import { type ChangeEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { FileText, Save, Trash2, ChevronDown } from 'lucide-react'

import LogoImage from '@/assets/logo_with_text.png'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '#ui/popover'
import { Button } from '#ui/button'
import { Input } from '#ui/input'
import { generateBasename, widgetsSchema } from '#widgets/helpers'
import { useWidgetsStore } from '@/store'

export function EditHeader() {
  const { t } = useTranslation()
  const widgets = useWidgetsStore(state => state.widgets)
  const resetWidgets = useWidgetsStore(state => state.resetWidgets)
  const setWidgets = useWidgetsStore(state => state.setWidgets)
  const setActiveId = useWidgetsStore(state => state.setActiveId)

  const templates = useWidgetsStore(state => state.templates)
  const saveTemplate = useWidgetsStore(state => state.saveTemplate)
  const loadTemplate = useWidgetsStore(state => state.loadTemplate)
  const deleteTemplate = useWidgetsStore(state => state.deleteTemplate)

  const navigate = useNavigate()

  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [templateName, setTemplateName] = useState('')
  const [popoverOpen, setPopoverOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleImportConfig = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        try {
          const text = e.target?.result as string
          const ret = widgetsSchema.safeParse(JSON.parse(text))
          if (ret.success) {
            const importedWidgets = ret.data
            setWidgets(importedWidgets)
            setActiveId(importedWidgets.length ? importedWidgets[0].id : '')
            toast.success(t('message.importSuccess'))
          } else {
            throw ret.error
          }
        } catch (error) {
          console.warn('Import config parse error', error)
          toast.error(t('message.parseError'))
        }
      }
      reader.readAsText(file)
      event.target.value = ''
    }
  }

  const handleClickExport = () => {
    const dataStr = JSON.stringify(widgets, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (generateBasename(widgets) || 'resume-config') + '.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleClickPrint = () => {
    navigate('/print?print=true')
  }

  const handleSaveTemplate = () => {
    if (!templateName.trim()) return
    saveTemplate(templateName)
    setSaveDialogOpen(false)
    setTemplateName('')
    toast.success('Template saved successfully')
  }

  const handleLoadTemplate = (id: string) => {
    loadTemplate(id)
    setPopoverOpen(false)
    toast.success('Template loaded successfully')
  }

  return (
    <div className="flex h-[64px] items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="flex items-center"
        >
          <img
            src={LogoImage}
            alt="Logo"
            className="h-12 w-auto"
          />
        </a>
      </div>

      <div className="flex-center gap-2 md:gap-4">
        <Popover
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 px-2 md:px-4"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Templates</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-0"
            align="start"
          >
            <div className="border-b p-4">
              <h4 className="mb-2 leading-none font-medium">Saved Templates</h4>
              <p className="text-muted-foreground text-sm">Manage your resume versions localy.</p>
            </div>

            {templates.length > 0 ? (
              <div className="max-h-[300px] overflow-y-auto py-2">
                {templates.map(template => (
                  <div
                    key={template.id}
                    className="hover:bg-accent group flex items-center justify-between px-4 py-2"
                  >
                    <button
                      className="mr-2 flex-1 truncate text-left text-sm"
                      onClick={() => handleLoadTemplate(template.id)}
                    >
                      {template.name}
                      <span className="text-muted-foreground block text-xs">
                        {new Date(template.createdAt).toLocaleDateString()}
                      </span>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100"
                      onClick={() => deleteTemplate(template.id)}
                    >
                      <Trash2 className="text-destructive h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-muted-foreground p-8 text-center text-sm">
                No templates saved yet.
              </div>
            )}

            <div className="bg-muted/50 border-t p-2">
              <Button
                variant="default"
                className="w-full justify-start gap-2"
                onClick={() => {
                  setPopoverOpen(false)
                  setSaveDialogOpen(true)
                }}
              >
                <Save className="h-4 w-4" />
                Save Current as Template
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="bg-border mx-1 h-6 w-px md:mx-2" />

        <input
          ref={inputRef}
          type="file"
          accept="application/json"
          onChange={handleImportConfig}
          style={{ display: 'none' }}
        />
        <Button
          variant="outline"
          size="sm"
          className="px-2 md:px-4"
          onClick={() => inputRef.current?.click()}
        >
          <span className="hidden md:inline">{t('common.importConfig')}</span>
          <span className="md:hidden">Import</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="px-2 md:px-4"
          onClick={handleClickExport}
        >
          <span className="hidden md:inline">{t('common.exportConfig')}</span>
          <span className="md:hidden">Export</span>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="px-2 md:px-4"
            >
              <span className="hidden md:inline">{t('common.reset')}</span>
              <span className="md:hidden">Reset</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t('message.confirmReset')}</AlertDialogTitle>
              <AlertDialogDescription>{t('message.resetWarning')}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t('common.cancel')}</AlertDialogCancel>
              <AlertDialogAction onClick={resetWidgets}>{t('common.confirm')}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="flex-center hidden gap-2 sm:flex md:gap-4">
        <Button
          size="sm"
          onClick={handleClickPrint}
        >
          {t('common.print')}
        </Button>
      </div>

      <Dialog
        open={saveDialogOpen}
        onOpenChange={setSaveDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save as Template</DialogTitle>
            <DialogDescription>
              Give your template a name to easily identify it later.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="e.g. Frontend Developer Resume"
              value={templateName}
              onChange={e => setTemplateName(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSaveTemplate()
              }}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSaveDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveTemplate}>Save Template</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
