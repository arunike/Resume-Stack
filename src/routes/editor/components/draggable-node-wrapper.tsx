import { useLayoutEffect, useRef } from 'react'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'

import type { IWidgetNode } from '#widgets/types'
import { MemoizedDraggableNode } from '@/routes/editor/components/draggable-node'
import { useWidgetsStore } from '@/store'

interface ReorderItemProps {
  item: IWidgetNode
}

export function DraggableNodeWrapper({ item }: ReorderItemProps) {
  const isActive = useWidgetsStore(state => state.activeId === item.id)
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  }
  const getCls: () => string = () => {
    if (isDragging) return 'z-20 shadow-[0_4px_18px_2px_rgba(219,99,39,0.8)]'
    if (isActive) return 'z-10 shadow-[0_4px_12px_2px_rgba(219,99,39,0.6)]'
    return ''
  }

  const setActiveId = useWidgetsStore(state => state.setActiveId)
  const handleClickItem = () => setActiveId(item.id)

  const localRef = useRef<HTMLLIElement | null>(null)
  const mergedSetNodeRef = (node: HTMLLIElement | null) => {
    localRef.current = node
    setNodeRef(node)
  }
  useLayoutEffect(() => {
    if (!isActive) return
    const element = localRef.current
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [isActive])

  return (
    <li
      id={item.id}
      ref={mergedSetNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseDown={handleClickItem}
      className={clsx('relative flow-root cursor-move bg-white transition-shadow', getCls())}
    >
      <MemoizedDraggableNode
        item={item}
        isActive={isActive}
      />
    </li>
  )
}
