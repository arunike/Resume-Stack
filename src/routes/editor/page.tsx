import i18n from 'i18next'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { isStorageAvailable } from '@/lib/storage'
import { EditHeader } from '@/routes/editor/sections/edit-header'
import { PanelConfig } from '@/routes/editor/sections/panel-config'
import { PanelDnd } from '@/routes/editor/sections/panel-dnd'
import { PanelMaterials } from '@/routes/editor/sections/panel-materials'
import { LogoGithub } from '@/components/common/svg-icons'

export function EditorPage() {
  useEffect(() => {
    const toastId = !isStorageAvailable()
      ? toast.warning(i18n.t('message.storageIsDisabled'), {
        description: i18n.t('message.storageIsDisabledDesc'),
        duration: Infinity,
      })
      : null
    return () => {
      if (toastId) {
        toast.dismiss(toastId)
      }
    }
  }, [])

  return (
    <div className="h-[100vh] min-w-[900px]">
      <EditHeader />
      <div className="flex h-[calc(100%-64px)]">
        <div className="scroll-thin flex h-full w-[200px] shrink-0 flex-col justify-between overflow-y-auto border-r">
          <PanelMaterials />

          <div className="border-t p-4">
            <a
              href="https://github.com/arunike/resume-stack"
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <LogoGithub width={16} height={16} />
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="flex grow justify-center bg-zinc-50 p-4">
          <PanelDnd />
        </div>
        <div className="scroll-thin h-full w-[292px] shrink-0 overflow-y-auto border-l 2xl:w-[332px]">
          <PanelConfig />
        </div>
      </div>
    </div>
  )
}
