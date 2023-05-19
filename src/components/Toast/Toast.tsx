import { notifications } from '@mantine/notifications'

const show = (title: string, description?: string) => {
  notifications.show({
    title: title,
    message: description,
    styles: (theme) => ({
      root: {
        backgroundColor: theme.white,
        '&::before': { backgroundColor: 'var(--dark-green)' },
      },

      title: { color: theme.black },
      description: { color: theme.white },
    }),
  })
}

export { show }
