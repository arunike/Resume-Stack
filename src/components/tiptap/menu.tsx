import { Check } from 'lucide-react'
import type { Editor } from '@tiptap/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { TiptapMenuIcon } from '#tiptap/menu-icon'
import { Button } from '#ui/button'
import { Input } from '#ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '#ui/popover'

interface TiptapMenuProps {
  editor: Editor
}

export function TiptapMenu({ editor }: TiptapMenuProps) {
  const { t } = useTranslation()

  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const [linkContent, setLinkContent] = useState<string>('')
  const handleClickLink = () => {
    if (isLinkOpen) return
    setIsLinkOpen(true)

    const previousUrl = editor.getAttributes('link').href
    if (previousUrl) setLinkContent(previousUrl)
  }
  const handleSaveLink = () => {
    const href = linkContent.trim()
    if (!href) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href }).run()
  }

  return (
    <div className="flex h-full flex-wrap items-center">
      <TiptapMenuIcon
        name="undo"
        onClick={() => editor.chain().focus().undo().run()}
      />
      <TiptapMenuIcon
        name="redo"
        onClick={() => editor.chain().focus().redo().run()}
      />

      <div className="relative top-[0.5px] mr-3 ml-1 h-4 w-px bg-zinc-400"></div>

      <TiptapMenuIcon
        name="paragraph"
        active={editor.isActive('paragraph')}
        onClick={() => {
          editor.chain().focus().setParagraph().run()
        }}
      />

      <TiptapMenuIcon
        name="h1"
        active={editor.isActive('heading', { level: 1 })}
        onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
      />

      <TiptapMenuIcon
        name="h2"
        active={editor.isActive('heading', { level: 2 })}
        onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
      />

      <TiptapMenuIcon
        name="h3"
        active={editor.isActive('heading', { level: 3 })}
        onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
      />

      <TiptapMenuIcon
        name="bullet-list"
        active={editor.isActive('bulletList')}
        onClick={() => {
          editor.chain().focus().toggleBulletList().run()
        }}
      />

      <TiptapMenuIcon
        name="ordered-list"
        active={editor.isActive('orderedList')}
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run()
        }}
      />

      <div className="relative top-[0.5px] mr-3 ml-1 h-4 w-px bg-zinc-400"></div>

      <TiptapMenuIcon
        name="bold"
        active={editor.isActive('bold')}
        onClick={() => {
          editor.chain().focus().toggleBold().run()
        }}
      />

      <TiptapMenuIcon
        name="italic"
        active={editor.isActive('italic')}
        onClick={() => {
          editor.chain().focus().toggleItalic().run()
        }}
      />

      <TiptapMenuIcon
        name="strike"
        active={editor.isActive('strike')}
        onClick={() => {
          editor.chain().focus().toggleStrike().run()
        }}
      />

      <TiptapMenuIcon
        name="code"
        active={editor.isActive('code')}
        onClick={() => {
          editor.chain().focus().toggleCode().run()
        }}
      />

      <Popover
        open={isLinkOpen}
        onOpenChange={setIsLinkOpen}
      >
        <PopoverAnchor asChild>
          <div>
            <TiptapMenuIcon
              name="link"
              active={editor.isActive('link')}
              onClick={handleClickLink}
            />
          </div>
        </PopoverAnchor>
        <PopoverContent
          className="w-64"
          align="start"
        >
          <div className="flex items-center">
            <Input
              value={linkContent}
              onChange={e => setLinkContent(e.target.value)}
              placeholder={t('form.enterLink')}
            />
            <Button
              className="ml-2 shrink-0"
              size="icon"
              onClick={handleSaveLink}
            >
              <Check strokeWidth={3} />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
