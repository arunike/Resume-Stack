import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { clsx } from "clsx"

interface CollapsibleProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Collapsible({ title, children, defaultOpen = false, className }: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={clsx("border rounded-md", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 font-medium text-left bg-zinc-50 hover:bg-zinc-100 rounded-t-md transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {isOpen && <div className="p-3 border-t bg-white rounded-b-md">{children}</div>}
    </div>
  )
}
