import { clsx } from 'clsx'
import { LinkIconComponent } from '#widgets/common'
import type { IBasicInfoData } from '#widgets/types'

interface BasicInfoProps {
  data: IBasicInfoData['propsData']
  isLatex?: boolean
}

export function BasicInfo({ data, isLatex }: BasicInfoProps) {
  const { name, linksGroup } = data

  if (isLatex) {
    return (
      <div className="flex flex-col items-center py-2 text-center text-black">
        <h1
          className="text-[1.875em] font-bold font-serif leading-none tracking-normal"
          style={{ marginBottom: 'var(--title-spacing, 4px)' }}
        >
          {name}
        </h1>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.875em]">
          <div className="flex items-center gap-2">
            {linksGroup.flat().map((item, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mr-4 select-none"></span>}
                <span className="mr-1.5 flex h-3.5 w-3.5 items-center justify-center text-black">
                  {LinkIconComponent(item.icon)}
                </span>
                <a
                  href={item.href || undefined}
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.content}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-center @container py-5">
      <div className="basis-0">
        <div
          className="flex items-end whitespace-nowrap"
          style={{ marginBottom: 'var(--item-spacing, 4px)' }}
        >
          <span className="mr-3 text-[1.5em] font-semibold">{name}</span>
        </div>
        <ul>
          {linksGroup.map((links, groupIndex) => (
            <li key={groupIndex}>
              <ul className="flex flex-wrap items-center @3xl:flex-nowrap">
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="mr-4 flex h-8 min-w-40 items-center"
                  >
                    <span className="flex-center mr-2">{LinkIconComponent(item.icon)}</span>
                    <a
                      href={item.href || undefined}
                      className={clsx(item.href && 'underline')}
                      target="_blank"
                    >
                      {item.content}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
