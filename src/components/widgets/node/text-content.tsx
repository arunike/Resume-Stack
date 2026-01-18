import type { ITextContentData } from '#widgets/types'
import { clsx } from 'clsx'

interface TextContentProps {
  data: ITextContentData['propsData']
  isLatex?: boolean
}

export function TextContent({ data, isLatex }: TextContentProps) {
  const {
    content,
    date,
    title,
    location,
    titleFontSize = 16,
    locationFontSize = 12,
    dateFontSize = 12,
    contentFontSize = 14,
    titleBold = true,
    locationBold = true,
    dateBold = true,
  } = data

  return (
    <div className={`relative flex flex-col ${isLatex ? 'font-serif' : ''}`}>
      {(title || location) && (
        <div
          className="flex items-baseline justify-between"
          style={{ marginBottom: 'var(--title-spacing, 4px)' }}
        >
          {title ? (
            <h3
              className={clsx('text-black', titleBold && 'font-bold')}
              style={{ fontSize: `${titleFontSize}pt` }}
            >
              {title}
            </h3>
          ) : (
            <div></div>
          )}
          {location && (
            <span
              className={clsx(
                `text-zinc-900 ${isLatex ? 'italic' : ''}`,
                locationBold && 'font-bold',
              )}
              style={{ fontSize: `${locationFontSize}pt` }}
            >
              {location}
            </span>
          )}
        </div>
      )}

      {date && (
        <div
          className={clsx(`text-zinc-900 ${isLatex ? 'italic' : ''}`, dateBold && 'font-bold')}
          style={{
            marginBottom: 'var(--date-spacing, 4px)',
            fontSize: `${dateFontSize}pt`,
          }}
        >
          {date}
        </div>
      )}

      <div
        className={`tiptap flex flex-col justify-center ${
          isLatex
            ? 'text-[0.9em] [&_li]:mt-0 [&_li]:mb-[var(--list-spacing,0)] [&_li]:!leading-[var(--line-height,1.5)] [&_p]:mt-0 [&_p]:mb-[var(--paragraph-spacing,0)] [&_p]:!leading-[var(--line-height,1.5)] [&_ul]:my-0 [&_ul]:!list-outside [&_ul]:!list-disc [&_ul]:!pl-5'
            : ''
        }`}
        style={{
          lineHeight: 'var(--line-height, 1.5)',
          fontSize: `${contentFontSize}pt`,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
