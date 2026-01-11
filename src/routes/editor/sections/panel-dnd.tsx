import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core/dist/types'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { DraggableNodeWrapper } from '@/routes/editor/components/draggable-node-wrapper'
import { useWidgetsStore } from '@/store'

export function PanelDnd() {
  const widgets = useWidgetsStore(s => s.widgets)
  const setWidgets = useWidgetsStore(s => s.setWidgets)
  const setActiveId = useWidgetsStore(s => s.setActiveId)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 2,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = widgets.findIndex(item => item.id === active.id)
      if (oldIndex === -1) return
      const newIndex = widgets.findIndex(item => item.id === over.id)
      if (newIndex === -1) return
      setWidgets(arrayMove(widgets, oldIndex, newIndex))
      setActiveId(active.id as string)
    }
  }

  return (
    <ul className="widgets-container scroll-thin relative basis-[900px] overflow-auto rounded-2xl border">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement, restrictToVerticalAxis]}
      >
        <SortableContext
          items={widgets}
          strategy={verticalListSortingStrategy}
        >
          {widgets.map(item => (
            <DraggableNodeWrapper
              key={item.id}
              item={item}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  )
}
