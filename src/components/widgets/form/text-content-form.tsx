import { UserPen } from 'lucide-react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import { Switch } from '#ui/switch'
import { Slider } from '#ui/slider'
import type { TiptapRef } from '#tiptap/editor'
import { TiptapEditor } from '#tiptap/editor'
import { Button } from '#ui/button'
import { Collapsible } from '#ui/collapsible'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'
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
      <Collapsible
        title={t('form.advancedOptions')}
        className="mt-4 mb-4"
      >
        <div className="space-y-4">
          <div>
            <div className="form-label">
              <span>{t('form.title')}</span>
            </div>
            <Input
              value={propsData.title}
              onChange={e => handleChange('title', e.target.value)}
              placeholder={t('form.enterTitle')}
            />
            <div className="form-label mt-2">
              <span>{t('form.titleFontSize')}</span>
            </div>
            <div className="flex items-center">
              <Input
                className="mr-2 w-32 shrink-0"
                type="number"
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={propsData.titleFontSize || 16}
                onChange={e => handleChange('titleFontSize', Number(e.target.value))}
              />
              <Slider
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={[propsData.titleFontSize || 16]}
                onValueChange={value => handleChange('titleFontSize', value[0])}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="form-label">
                <span>{t('form.isTitleBold')}</span>
              </div>
              <Switch
                checked={propsData.titleBold ?? true}
                onChange={e => handleChange('titleBold', e.target.checked)}
              />
            </div>
          </div>

          <div>
            <div className="form-label">
              <span>{t('form.location')}</span>
            </div>
            <Input
              value={propsData.location}
              onChange={e => handleChange('location', e.target.value)}
              placeholder={t('form.enterLocation')}
            />
            <div className="form-label mt-2">
              <span>{t('form.locationFontSize')}</span>
            </div>
            <div className="flex items-center">
              <Input
                className="mr-2 w-32 shrink-0"
                type="number"
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={propsData.locationFontSize || 12}
                onChange={e => handleChange('locationFontSize', Number(e.target.value))}
              />
              <Slider
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={[propsData.locationFontSize || 12]}
                onValueChange={value => handleChange('locationFontSize', value[0])}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="form-label">
                <span>{t('form.isLocationBold')}</span>
              </div>
              <Switch
                checked={propsData.locationBold ?? true}
                onChange={e => handleChange('locationBold', e.target.checked)}
              />
            </div>
          </div>

          <div>
            <div className="form-label">
              <span>{t('form.date')}</span>
            </div>
            <Input
              value={propsData.date}
              onChange={e => handleChange('date', e.target.value)}
              placeholder={t('form.enterDate')}
            />
            <div className="form-label mt-2">
              <span>{t('form.dateFontSize')}</span>
            </div>
            <div className="flex items-center">
              <Input
                className="mr-2 w-32 shrink-0"
                type="number"
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={propsData.dateFontSize || 12}
                onChange={e => handleChange('dateFontSize', Number(e.target.value))}
              />
              <Slider
                min={WIDGET_CONSTRAINTS.style.fontSize.min}
                max={WIDGET_CONSTRAINTS.style.fontSize.max}
                value={[propsData.dateFontSize || 12]}
                onValueChange={value => handleChange('dateFontSize', value[0])}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="form-label">
                <span>{t('form.isDateBold')}</span>
              </div>
              <Switch
                checked={propsData.dateBold ?? true}
                onChange={e => handleChange('dateBold', e.target.checked)}
              />
            </div>
          </div>
        </div>
      </Collapsible>

      <div>
        <div className="form-label">
          <span>{t('form.textContent')}</span>
        </div>
        <div className="form-label mt-2">
          <span>{t('form.contentFontSize')}</span>
        </div>
        <div className="mb-4 flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={propsData.contentFontSize || 14}
            onChange={e => handleChange('contentFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[propsData.contentFontSize || 14]}
            onValueChange={value => handleChange('contentFontSize', value[0])}
          />
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
