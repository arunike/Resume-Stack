import type { ITextContentData } from '#widgets/types'

interface TextContentProps {
  data: ITextContentData['propsData']
  isLatex?: boolean
}

export function TextContent({ data, isLatex }: TextContentProps) {
  const { content, date, title, location } = data

  return (
    <div className={`relative flex flex-col ${isLatex ? 'font-serif' : ''}`}>
      {(title || location) && (
        <div
          className="flex items-baseline justify-between"
          style={{ marginBottom: 'var(--title-spacing, 4px)' }}
        >
          {title ? (
            <h3 className="text-[1em] font-bold text-black">{title}</h3>
          ) : (
            <div></div>
          )}
          {location && (
            <span className={`text-[0.9em] text-zinc-900 ${isLatex ? 'italic' : ''}`}>
              {location}
            </span>
          )}
        </div>
      )}

      {date && (
        <div
          className={`text-[0.9em] text-zinc-900 ${isLatex ? 'italic' : ''}`}
          style={{ marginBottom: 'var(--date-spacing, 4px)' }}
        >
          {date}
        </div>
      )}

      <div
        className={`tiptap flex flex-col justify-center ${isLatex
          ? 'text-[0.9em] [&_p]:mt-0 [&_p]:mb-[var(--paragraph-spacing,0)] [&_ul]:my-0 [&_ul]:!list-disc [&_ul]:!list-outside [&_ul]:!pl-5 [&_li]:mt-0 [&_li]:mb-[var(--list-spacing,0)] [&_p]:!leading-[var(--line-height,1.5)] [&_li]:!leading-[var(--line-height,1.5)]'
          : ''
          }`}
        style={{ lineHeight: 'var(--line-height, 1.5)' }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}
