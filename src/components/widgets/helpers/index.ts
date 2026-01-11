import i18n from 'i18next'
import { toast } from 'sonner'

import type { IWidgetNode } from '#widgets/types'
import { storageService } from '@/services/storage'
import { widgetsSchema } from '#widgets/helpers/schema'
import { createDefaultWidgets } from './factory'

export function getWidgets(): IWidgetNode[] {
  let widgets: IWidgetNode[] = []
  const json = storageService.getWidgets()
  if (json) {
    const ret = widgetsSchema.safeParse(json)
    if (ret.success) {
      widgets = ret.data
    } else {
      console.warn('Local config parse error', ret.error)
      setTimeout(() => {
        toast.error(i18n.t('message.parseError'))
      }, 100)
    }
  } else {
    widgets = createDefaultWidgets()
  }
  return widgets
}

export function generateBasename(widgets: IWidgetNode[]) {
  const basicInfo = widgets.find(item => item.type === 'BasicInfo')
  if (basicInfo) {
    const { name } = basicInfo.data.propsData
    return `${name.replace(/\s+/g, '_')}_resume_stack`
  }
  return ''
}

export * from './factory'
export * from './schema'
