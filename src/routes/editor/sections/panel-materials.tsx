import { Plus } from 'lucide-react'

import { Button } from '#ui/button'
import type { WidgetType } from '#widgets/types'
import { createWidgetNode } from '#widgets/helpers'
import { useWidgetMaterialList } from '#widgets/common'
import { useWidgetsStore } from '@/store'

export function PanelMaterials() {
  const widgetMaterialList = useWidgetMaterialList()
  const addWidget = useWidgetsStore(state => state.addWidget)
  const handleClick = (type: WidgetType) => {
    const newWidget = createWidgetNode(type)
    addWidget(newWidget)
  }

  return (
    <ul className="flex w-full flex-col p-4">
      {widgetMaterialList.map(item => (
        <li
          className="mb-3 grow"
          key={item.type}
        >
          <Button
            variant="outline"
            onClick={() => handleClick(item.type)}
            className="w-full justify-between has-[>svg]:px-4"
          >
            <span className="flex-center">
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </span>
            <Plus style={{ width: 13, height: 13 }} />
          </Button>
        </li>
      ))}
    </ul>
  )
}
