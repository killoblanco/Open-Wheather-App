import { Global, useTheme } from '@emotion/react'
import '@fontsource/signika/300.css'
import '@fontsource/signika/400.css'
import '@fontsource/signika/500.css'
import '@fontsource/signika/600.css'
import '@fontsource/signika/700.css'

function GlobalStyles() {
  const theme = useTheme()

  const styles = {
    ':root': {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.spacing(2)
    },
    '*': {
      margin: 0,
      padding: 0,
      color: theme.colors.main[theme.colors.mode].onBackground
    },
    body: {
      margin: 0,
      backgroundColor: theme.colors.main[theme.colors.mode].background
    }
  }

  return <Global styles={styles} />
}

export default GlobalStyles
