import { PropsWithChildren, useEffect, useRef } from 'react'

import styles from './styles.module.css'
import * as toast from '../Toast/Toast'

interface ChatBoxProps {
  type: 'sender' | 'recipient'
  message: string
  isLoading?: boolean
}

export function ChatBox({
  type,
  message,
  children,
}: PropsWithChildren<ChatBoxProps>) {
  const chatBox = useRef<HTMLDivElement>(null)
  const copyMessage = async () => {
    if (type === 'sender') return
    try {
      await navigator.clipboard.writeText(message)
      toast.show('Message Copied!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  useEffect(() => {
    if (!chatBox.current) return
    chatBox.current.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  return (
    <div
      ref={chatBox}
      onClick={copyMessage}
      className={`${styles.chatBox} 
  ${type === 'sender' ? styles.sender : styles.recipient}`}
    >
      {children}
    </div>
  )
}
