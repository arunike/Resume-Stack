import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import { BasicInfo } from '#widgets/node/basic-info'
import { Education } from '#widgets/node/education'
import { ExperienceTime } from '#widgets/node/experience-time'
import { TextContent } from '#widgets/node/text-content'
import { TitleSection } from '#widgets/node/title-section'
import type { IWidgetNode } from '#widgets/types'
import { generateBasename } from '#widgets/helpers'
import { useWidgetsStore } from '@/store'

export function PrintPage() {
  const widgets = useWidgetsStore(state => state.widgets)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  // Force latex theme
  const isLatex = true

  useEffect(() => {
    const print = searchParams.get('print')
    let timer: ReturnType<typeof setTimeout> | null = null
    if (print === 'true') {
      timer = setTimeout(() => {
        const originalTitle = document.title
        document.title = generateBasename(widgets) || originalTitle
        window.addEventListener(
          'afterprint',
          () => {
            document.title = originalTitle
            navigate(-1)
          },
          { once: true },
        )
        window.print()
      }, 100)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [navigate, widgets, searchParams])

  function WidgetRenderComponent(item: IWidgetNode) {
    switch (item.type) {
      case 'BasicInfo':
        return <BasicInfo data={item.data.propsData} isLatex={isLatex} />
      case 'TitleSection':
        return <TitleSection data={item.data.propsData} isLatex={isLatex} />
      case 'ExperienceTime':
        return <ExperienceTime data={item.data.propsData} isLatex={isLatex} />
      case 'TextContent':
        return <TextContent data={item.data.propsData} isLatex={isLatex} />

      case 'Education':
        return <Education data={item.data.propsData} isLatex={isLatex} />
    }
  }

  return (
    <div className="mx-auto w-[900px] font-serif">
      <ul className="widgets-container">
        {widgets.map(item => (
          <li
            key={item.id}
            className="flow-root"
          >
            <div
              style={
                {
                  ...item.data.styleData,
                  fontSize: `${item.data.styleData.fontSize || 11}pt`,
                  '--paragraph-spacing': `${item.data.styleData.paragraphSpacing || 0}px`,
                  '--list-spacing': `${item.data.styleData.listSpacing || 0}px`,
                  '--item-spacing': `${item.data.styleData.itemSpacing ?? 4}px`,
                  '--title-spacing': `${item.data.styleData.titleSpacing ?? 4}px`,
                  '--date-spacing': `${item.data.styleData.dateSpacing ?? 4}px`,
                  '--divider-spacing': `${item.data.styleData.dividerSpacing ?? 4}px`,
                  '--relevant-courses-spacing': `${item.data.styleData.relevantCoursesSpacing ?? 4}px`,
                  '--line-height': `${item.data.styleData.lineHeight ?? 1.5}`,
                } as React.CSSProperties
              }
            >
              {WidgetRenderComponent(item)}
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}
