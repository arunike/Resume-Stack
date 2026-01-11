import { produce } from 'immer'
import { Plus, Trash2 } from 'lucide-react'

import { Button } from '#ui/button'
import { Input } from '#ui/input'
import { IconSelect } from '#widgets/form/contacts/icon-select'
import { LinkInput } from '#widgets/form/contacts/link-input'
import type { ILinkData } from '#widgets/types'
import { createLinkData } from '#widgets/helpers'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'

interface LinkGroupProps {
  data: ILinkData[]
  onChange: (data: ILinkData[]) => void
}

export function ContactsForm({ data, onChange }: LinkGroupProps) {
  const handleChange = <K extends keyof ILinkData>(
    index: number,
    field: K,
    value: ILinkData[K],
  ) => {
    const nextState = produce(data, draft => {
      draft[index][field] = value
    })
    onChange(nextState)
  }

  const handleDelete = (index: number) => {
    const nextState = produce(data, draft => {
      draft.splice(index, 1)
    })
    onChange(nextState)
  }

  const showCreate = data.length < WIDGET_CONSTRAINTS.basicInfo.linksPerRow
  const handleCreate = () => {
    onChange([...data, createLinkData()])
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li
          key={index}
          className="mb-2 flex items-center"
        >
          <IconSelect
            value={item.icon}
            onChange={newIcon => handleChange(index, 'icon', newIcon)}
            className="mr-1 shrink-0"
          />
          <Input
            value={item.content}
            onChange={e => handleChange(index, 'content', e.target.value)}
          />
          <LinkInput
            value={item.href}
            onChange={newHref => handleChange(index, 'href', newHref)}
            className="ml-1 shrink-0"
          />
          <Button
            className="ml-1 shrink-0"
            variant="outline"
            size="icon"
            onClick={() => handleDelete(index)}
          >
            <Trash2 />
          </Button>
        </li>
      ))}
      {showCreate && (
        <li className="mb-2 flex items-center">
          <Button
            className="w-full"
            variant="outline"
            size="icon"
            onClick={handleCreate}
          >
            <Plus />
          </Button>
        </li>
      )}
    </ul>
  )
}
