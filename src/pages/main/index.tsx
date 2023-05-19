import styles from './styles.module.css'
import { MessageInput } from '../../components/MessageInput/MessageInput'
import {
  ChatBoxContainer,
  ChatMessage,
  Message,
} from '../../components/ChatBox/ChatBoxContainer'
import { useCallback, useEffect, useState } from 'react'
import { completionService } from '../../services/Completion/completion.service'

export function Main() {
  const [message, setMessage] = useState<Message>('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])

  const [responding, setResponding] = useState(false)

  const handleSend = () => {
    setChatMessages([...chatMessages, { type: 'sender', message }])
    setMessage('')

    setTimeout(() => setResponding(true), 500)
  }

  const handleResponse = useCallback(async () => {
    const response = await completionService.complete(
      chatMessages[chatMessages.length - 1].message
    )

    setResponding(false)
    setChatMessages([...chatMessages, { type: 'recipient', message: response }])
  }, [chatMessages])

  useEffect(() => {
    if (!responding) return

    handleResponse()
  }, [handleResponse, responding])

  return (
    <div className={styles.main}>
      <ChatBoxContainer chatMessages={chatMessages} loading={responding} />

      <MessageInput
        onChange={setMessage}
        message={message}
        responding={responding}
        onClick={handleSend}
      />
    </div>
  )
}
