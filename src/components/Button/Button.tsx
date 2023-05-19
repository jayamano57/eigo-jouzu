import { Button as MantineButton } from '@mantine/core'
import { PropsWithChildren } from 'react'

export function Button({ children }: PropsWithChildren) {
  return (
    <MantineButton
      fullWidth
      styles={() => ({
        root: {
          backgroundColor: 'var(--atomic-tangerine)',
          border: 0,
          height: '56px',
          color: 'var(--light-yellow)',
        },
      })}
    >
      {children}
    </MantineButton>
  )
}
