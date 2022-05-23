import { Theme } from '@emotion/react'
import { CSSProperties } from 'react'
import { parse24hTime } from '../../utils/date-time'
import { Box } from '../atoms/box'
import { Text } from '../atoms/text'

const styles = {
  root: (theme: Theme): CSSProperties => ({
    display: 'flex',
    gap: theme.spacing(1),
    maxWidth: theme.spacing(70),
    overflow: 'auto',
    padding: theme.spacing(0, 2)
  }),
  item: (theme: Theme): any => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    justifyContent: 'center',
    '&:first-of-type': { marginLeft: theme.spacing(2) },
    '&:last-of-type': { marginRight: theme.spacing(2) }
  })
}

function ForecastDay({ day }: { day: WeatherApiState['forecast'][0]['hour'] }) {
  return (
    <Box sx={styles.root}>
      {day.map(hour => (
        <Box key={hour.time} sx={styles.item}>
          <Text variant="subtitle2">{parse24hTime(hour.time, 'en-GB')}</Text>
          <img src={hour.condition.icon} alt={hour.condition.text} />
          <Text variant="h5">{hour.tempC.toFixed(0)}º</Text>
        </Box>
      ))}
    </Box>
  )
}

export default ForecastDay
