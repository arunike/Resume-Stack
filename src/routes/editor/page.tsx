import i18n from 'i18next'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { isStorageAvailable } from '@/lib/storage'
import { EditHeader } from '@/routes/editor/sections/edit-header'
import { PanelConfig } from '@/routes/editor/sections/panel-config'
import { PanelDnd } from '@/routes/editor/sections/panel-dnd'
import { PanelMaterials } from '@/routes/editor/sections/panel-materials'
import { useState } from 'react'
import { Layers, LayoutTemplate, Settings2 } from 'lucide-react'
import { LogoGithub } from '@/components/common/svg-icons'

export function EditorPage() {
  const [activeMobileTab, setActiveMobileTab] = useState<'materials' | 'preview' | 'config'>(
    'preview',
  )

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
    <div className="flex h-screen w-full min-w-0 flex-col">
      <EditHeader />

      {/* Mobile Content Area */}
      <div className="relative flex-1 overflow-hidden md:hidden">
        <div className={`absolute inset-0 ${activeMobileTab === 'materials' ? 'block' : 'hidden'}`}>
          <div className="bg-background h-full overflow-y-auto p-4">
            <PanelMaterials />
            <div className="mt-6 border-t pt-4">
              <a
                href="https://github.com/arunike/resume-stack"
                target="_blank"
                className="text-muted-foreground hover:bg-accent hover:text-foreground flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm transition-colors"
              >
                <LogoGithub
                  width={16}
                  height={16}
                />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-zinc-50 ${activeMobileTab === 'preview' ? 'block' : 'hidden'}`}
        >
          <PanelDnd />
        </div>
        <div className={`absolute inset-0 ${activeMobileTab === 'config' ? 'block' : 'hidden'}`}>
          <div className="h-full overflow-y-auto">
            <PanelConfig />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden h-[calc(100vh-64px)] md:flex">
        <div className="scroll-thin flex h-full w-[200px] shrink-0 flex-col justify-between overflow-y-auto border-r">
          <PanelMaterials />

          <div className="border-t p-4">
            <a
              href="https://github.com/arunike/resume-stack"
              target="_blank"
              className="text-muted-foreground hover:bg-accent hover:text-foreground flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm transition-colors"
            >
              <LogoGithub
                width={16}
                height={16}
              />
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="flex grow justify-center overflow-hidden bg-zinc-50 p-4">
          <PanelDnd />
        </div>
        <div className="scroll-thin h-full w-[292px] shrink-0 overflow-y-auto border-l 2xl:w-[332px]">
          <PanelConfig />
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="bg-background z-50 flex h-16 shrink-0 items-center justify-around border-t px-2 md:hidden">
        <button
          onClick={() => setActiveMobileTab('materials')}
          className={`flex flex-col items-center gap-1 rounded-lg p-2 ${activeMobileTab === 'materials' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Layers className="h-5 w-5" />
          <span className="text-[10px] font-medium">Add</span>
        </button>
        <button
          onClick={() => setActiveMobileTab('preview')}
          className={`flex flex-col items-center gap-1 rounded-lg p-2 ${activeMobileTab === 'preview' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <LayoutTemplate className="h-5 w-5" />
          <span className="text-[10px] font-medium">Editor</span>
        </button>
        <button
          onClick={() => setActiveMobileTab('config')}
          className={`flex flex-col items-center gap-1 rounded-lg p-2 ${activeMobileTab === 'config' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Settings2 className="h-5 w-5" />
          <span className="text-[10px] font-medium">Config</span>
        </button>
      </div>
    </div>
  )
}
