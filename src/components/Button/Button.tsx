import { Button as MantineButton } from '@mantine/core'

export function Button({ children }) {
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
