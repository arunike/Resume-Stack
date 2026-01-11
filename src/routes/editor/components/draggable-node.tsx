import { Copy, Trash } from 'lucide-react'
import type { MouseEvent } from 'react'
import { memo } from 'react'

import { Button } from '#ui/button'
import { BasicInfo } from '#widgets/node/basic-info'
import { Education } from '#widgets/node/education'
import { ExperienceTime } from '#widgets/node/experience-time'

import { TextContent } from '#widgets/node/text-content'
import { TitleSection } from '#widgets/node/title-section'
import type { IWidgetNode } from '#widgets/types'
import { generateWidgetId } from '#widgets/helpers'
import { useWidgetsStore } from '@/store'

export function DraggableNode({ item, isActive }: { item: IWidgetNode; isActive: boolean }) {
  const addWidget = useWidgetsStore(state => state.addWidget)
  const handleClickCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const newItem = JSON.parse(JSON.stringify(item))
    newItem.id = generateWidgetId()
    addWidget(newItem)
  }

  const removeWidget = useWidgetsStore(state => state.removeWidget)
  const handleClickRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    removeWidget(item.id)
  }

  function WidgetRenderComponent() {
    switch (item.type) {
      case 'BasicInfo':
        return <BasicInfo data={item.data.propsData} isLatex={true} />
      case 'TitleSection':
        return <TitleSection data={item.data.propsData} isLatex={true} />
      case 'ExperienceTime':
        return <ExperienceTime data={item.data.propsData} isLatex={true} />
      case 'TextContent':
        return <TextContent data={item.data.propsData} isLatex={true} />

      case 'Education':
        return <Education data={item.data.propsData} isLatex={true} />
    }
  }

  function OperationButtons() {
    return isActive ? (
      <div className="absolute top-1 right-1 flex items-center gap-2 transition-opacity">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onMouseDown={handleClickCopy}
        >
          <Copy />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onMouseDown={handleClickRemove}
        >
          <Trash />
        </Button>
      </div>
    ) : null
  }

  return (
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
      className="font-serif"
    >
      <WidgetRenderComponent />
      <OperationButtons />
    </div>
  )
}

export const MemoizedDraggableNode = memo(DraggableNode)
