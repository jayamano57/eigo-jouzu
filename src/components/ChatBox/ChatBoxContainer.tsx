import { useEffect, useRef } from 'react'
import { ChatBox } from './ChatBox'
import { Loader } from '@mantine/core'

import styles from './styles.module.css'

export type Message = string

export interface ChatMessage {
  type: 'sender' | 'recipient'
  message: Message
}

interface ChatBoxContainerProps {
  chatMessages: ChatMessage[]
  loading?: boolean
}

export function ChatBoxContainer({
  chatMessages,
  loading,
}: ChatBoxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const { scrollHeight, clientHeight } = containerRef.current
    const maxScrollTop = scrollHeight - clientHeight

    setTimeout(
      () =>
        containerRef.current!.scrollTo({
          top: maxScrollTop,
          behavior: 'smooth',
        }),
      0
    )
  }, [chatMessages, loading])
  return (
    <div ref={containerRef} className={`scrollbar-hide ${styles.container}`}>
      {chatMessages.map((m, i) => (
        <ChatBox key={i} type={m.type} message={m.message}>
          {m.message}
        </ChatBox>
      ))}
      {loading && (
        <div>
          <Loader variant="dots" color="#8a8a8a" />
        </div>
      )}
    </div>
  )
}
