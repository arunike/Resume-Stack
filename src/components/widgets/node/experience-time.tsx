import type { IExperienceTimeData } from '#widgets/types'

interface ExperienceTimeProps {
  data: IExperienceTimeData['propsData']
  isLatex?: boolean
}

export function ExperienceTime({ data, isLatex }: ExperienceTimeProps) {
  const { title, dateRange, titleFontSize = 16, dateRangeFontSize = 12 } = data

  if (isLatex) {
    return (
      <div className="flex flex-wrap items-baseline justify-between font-serif text-black">
        <div className="font-bold" style={{ fontSize: `${titleFontSize}pt` }}>{title}</div>
        <div className="italic text-black" style={{ fontSize: `${dateRangeFontSize}pt` }}>{dateRange}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-between py-1">
      <div className="font-medium" style={{ fontSize: `${titleFontSize}pt` }}>{title}</div>
      <div className="text-zinc-600" style={{ fontSize: `${dateRangeFontSize}pt` }}>{dateRange}</div>
    </div>
  )
}
