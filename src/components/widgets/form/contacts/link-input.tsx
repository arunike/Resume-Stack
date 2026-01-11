import { Link } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '#ui/button'
import { Input } from '#ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '#ui/popover'

interface LinkInputProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function LinkInput({ value, onChange, className }: LinkInputProps) {
  const { t } = useTranslation()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={className}
          variant="outline"
          size="icon"
        >
          <Link />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-52"
        align="end"
      >
        <div className="flex flex-wrap justify-between">
          <Input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={t('form.enterLink')}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
