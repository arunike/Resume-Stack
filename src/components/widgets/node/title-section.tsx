import { clsx } from 'clsx'
import type { ITitleSectionData } from '#widgets/types'

interface TitleSectionProps {
  data: ITitleSectionData['propsData']
  isLatex?: boolean
}

export function TitleSection({ data, isLatex }: TitleSectionProps) {
  const { title } = data

  if (isLatex) {
    return (
      <div className="mb-2 mt-4 border-b border-black" style={{ paddingBottom: 'var(--divider-spacing, 4px)' }}>
        <h2 className={clsx('text-[1.25em] font-serif uppercase tracking-wide text-black', (data.titleBold ?? true) && 'font-bold')}>
          {title}
        </h2>
      </div>
    )
  }

  return (
    <div className="mb-3 mt-5 flex items-center justify-between border-b border-b-zinc-400 pb-1">
      <div className={clsx('text-[1.125em] text-zinc-900', (data.titleBold ?? true) && 'font-bold')}>{title}</div>
    </div>
  )
}
