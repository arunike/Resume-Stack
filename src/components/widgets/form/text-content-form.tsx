import { UserPen } from 'lucide-react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import type { TiptapRef } from '#tiptap/editor'
import { TiptapEditor } from '#tiptap/editor'
import { Button } from '#ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#ui/dialog'
import type { ITextContentData } from '#widgets/types'

type PropsData = ITextContentData['propsData']

export function TextContentForm({
  propsData,
  onChange,
}: {
  propsData: PropsData
  onChange: (value: PropsData) => void
}) {
  const { t } = useTranslation()

  function handleChange<K extends keyof PropsData>(name: K, value: PropsData[K]) {
    onChange({
      ...propsData,
      [name]: value,
    })
  }

  const [content, setContent] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setOpen(true)
      setContent(propsData.content)
    } else {
      setOpen(false)
      setContent('')
    }
  }
  const editorRef: TiptapRef = useRef(null)
  const handleSave = () => {
    if (editorRef.current) {
      handleChange('content', editorRef.current.getHTML())
    }
    handleOpenChange(false)
  }

  return (
    <div>
      <div className="mb-4">
        <div className="form-label">
          <span>{t('form.title')}</span>
        </div>
        <Input
          value={propsData.title || ''}
          onChange={e => handleChange('title', e.target.value)}
          placeholder={t('form.enterTitle')}
        />
      </div>

      <div className="mb-4">
        <div className="form-label">
          <span>{t('form.location')}</span>
        </div>
        <Input
          value={propsData.location || ''}
          onChange={e => handleChange('location', e.target.value)}
          placeholder={t('form.enterLocation')}
        />
      </div>

      <div className="mb-4">
        <div className="form-label">
          <span>{t('form.date')}</span>
        </div>
        <Input
          value={propsData.date || ''}
          onChange={e => handleChange('date', e.target.value)}
          placeholder={t('form.enterDate')}
        />
      </div>

      <div>
        <div className="form-label">
          <span>{t('form.textContent')}</span>
        </div>

        <Dialog
          open={open}
          onOpenChange={handleOpenChange}
        >
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
            >
              <UserPen />
              {t('form.editContent')}
            </Button>
          </DialogTrigger>

          <DialogContent
            className="sm:min-w-[600px] lg:min-w-[800px]"
            onEscapeKeyDown={e => e.preventDefault()}
          >
            <DialogHeader>
              <DialogTitle>{t('form.textContent')}</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <div className="h-[320px]">
              <TiptapEditor
                ref={editorRef}
                content={content}
              />
            </div>
            <DialogFooter>
              <Button onClick={handleSave}>{t('common.save')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
