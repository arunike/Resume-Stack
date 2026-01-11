import type { IExperienceTimeData } from '#widgets/types'

interface ExperienceTimeProps {
  data: IExperienceTimeData['propsData']
  isLatex?: boolean
}

export function ExperienceTime({ data, isLatex }: ExperienceTimeProps) {
  const { title, dateRange } = data

  if (isLatex) {
    return (
      <div className="flex flex-wrap items-baseline justify-between font-serif text-black">
        <div className="text-[1.125em] font-bold">{title}</div>
        <div className="text-[0.875em] italic text-black">{dateRange}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-between py-1">
      <div className="text-[1em] font-medium">{title}</div>
      <div className="text-[0.9em] text-zinc-600">{dateRange}</div>
    </div>
  )
}
