import { clsx } from 'clsx'
import type { IExperienceTimeData } from '#widgets/types'

interface ExperienceTimeProps {
  data: IExperienceTimeData['propsData']
  isLatex?: boolean
}

export function ExperienceTime({ data, isLatex }: ExperienceTimeProps) {
  const {
    title,
    date,
    location,
    titleFontSize = 16,
    dateFontSize = 12,
    locationFontSize = 12,
  } = data

  if (isLatex) {
    return (
      <div className="font-serif text-black">
        <div className="flex flex-wrap items-baseline justify-between">
          <div
            className={clsx((data.titleBold ?? true) && 'font-bold')}
            style={{ fontSize: `${titleFontSize}pt` }}
          >
            {title}
          </div>
          <div
            className={clsx('text-black', (data.locationBold ?? false) && 'font-bold')}
            style={{ fontSize: `${locationFontSize}pt` }}
          >
            {location}
          </div>
        </div>
        <div>
          <div
            className={clsx('text-black italic', (data.dateBold ?? false) && 'font-bold')}
            style={{ fontSize: `${dateFontSize}pt` }}
          >
            {date}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-1">
      <div className="flex flex-wrap items-center justify-between">
        <div
          className={clsx('font-medium', (data.titleBold ?? true) && 'font-bold')}
          style={{ fontSize: `${titleFontSize}pt` }}
        >
          {title}
        </div>
        <div
          className={clsx('text-zinc-600', (data.locationBold ?? false) && 'font-bold')}
          style={{ fontSize: `${locationFontSize}pt` }}
        >
          {location}
        </div>
      </div>
      <div>
        <div
          className={clsx('text-zinc-600', (data.dateBold ?? false) && 'font-bold')}
          style={{ fontSize: `${dateFontSize}pt` }}
        >
          {date}
        </div>
      </div>
    </div>
  )
}
