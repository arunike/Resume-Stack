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
  const [activeMobileTab, setActiveMobileTab] = useState<'materials' | 'preview' | 'config'>('preview')

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
    <div className="flex h-screen w-full flex-col min-w-0">
      <EditHeader />
      
      {/* Mobile Content Area */}
      <div className="flex-1 overflow-hidden relative md:hidden">
        <div className={`absolute inset-0 ${activeMobileTab === 'materials' ? 'block' : 'hidden'}`}>
           <div className="h-full overflow-y-auto p-4 bg-background">
              <PanelMaterials />
               <div className="mt-6 border-t pt-4">
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
        </div>
        <div className={`absolute inset-0 bg-zinc-50 ${activeMobileTab === 'preview' ? 'block' : 'hidden'}`}>
           <PanelDnd />
        </div>
         <div className={`absolute inset-0 ${activeMobileTab === 'config' ? 'block' : 'hidden'}`}>
           <div className="h-full overflow-y-auto">
              <PanelConfig />
           </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex h-[calc(100vh-64px)]">
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
        <div className="flex grow justify-center bg-zinc-50 p-4 overflow-hidden">
          <PanelDnd />
        </div>
        <div className="scroll-thin h-full w-[292px] shrink-0 overflow-y-auto border-l 2xl:w-[332px]">
          <PanelConfig />
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden border-t bg-background h-16 flex items-center justify-around shrink-0 z-50 px-2">
         <button 
           onClick={() => setActiveMobileTab('materials')}
           className={`flex flex-col items-center gap-1 p-2 rounded-lg ${activeMobileTab === 'materials' ? 'text-primary' : 'text-muted-foreground'}`}
         >
           <Layers className="h-5 w-5" />
           <span className="text-[10px] font-medium">Add</span>
         </button>
         <button 
           onClick={() => setActiveMobileTab('preview')}
           className={`flex flex-col items-center gap-1 p-2 rounded-lg ${activeMobileTab === 'preview' ? 'text-primary' : 'text-muted-foreground'}`}
         >
           <LayoutTemplate className="h-5 w-5" />
           <span className="text-[10px] font-medium">Editor</span>
         </button>
         <button 
           onClick={() => setActiveMobileTab('config')}
           className={`flex flex-col items-center gap-1 p-2 rounded-lg ${activeMobileTab === 'config' ? 'text-primary' : 'text-muted-foreground'}`}
         >
           <Settings2 className="h-5 w-5" />
           <span className="text-[10px] font-medium">Config</span>
         </button>
      </div>
    </div>
  )
}
