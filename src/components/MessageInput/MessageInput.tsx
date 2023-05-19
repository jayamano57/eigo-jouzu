import { useMemo } from 'react'
import styles from './styles.module.css'

interface MessageInputProps {
  message: string
  responding?: boolean
  onChange: (val: string) => void
  onClick: () => void
}

export function MessageInput({
  message,
  responding,
  onChange,
  onClick,
}: MessageInputProps) {
  const disabled = useMemo(
    () => message.trim() === '' || responding,
    [message, responding]
  )
  return (
    <div className={styles.messageInput}>
      <textarea
        className={styles.textarea}
        onChange={(e) => onChange(e.target.value)}
        value={message}
      />
      <button
        className={styles.submitBtn}
        style={{ opacity: disabled ? 0.5 : 1 }}
        onClick={onClick}
        disabled={disabled}
      >
        GO
      </button>
    </div>
  )
}
