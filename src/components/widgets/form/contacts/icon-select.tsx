import { useState } from 'react'

import { Button } from '#ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '#ui/popover'
import type { LinkIconNames } from '#widgets/types'
import { linkIconNames } from '#widgets/types'
import { LinkIconComponent } from '#widgets/common'

interface LinkIconSelectProps {
  value: string
  onChange: (value: LinkIconNames) => void
  className?: string
}

export function IconSelect({ value, onChange, className }: LinkIconSelectProps) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickIcon = (name: LinkIconNames) => {
    onChange(name)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          className={className}
          variant="outline"
          size="icon"
        >
          {LinkIconComponent(value)}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-52"
        align="start"
      >
        <div className="flex flex-wrap justify-between">
          {linkIconNames.map(name => (
            <Button
              key={name}
              variant="outline"
              size="icon"
              className="mb-2"
              onClick={() => handleClickIcon(name)}
            >
              {LinkIconComponent(name)}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
