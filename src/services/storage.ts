import type { ITemplate, IWidgetNode } from '#widgets/types'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/lib/storage'

// Store the language of the app
const NAME_LANGUAGE = 'LANGUAGE'
// Store the json data of the widgets
const NAME_WIDGETS = 'WIDGET'
// Store the resume templates
const NAME_TEMPLATES = 'TEMPLATES'

export const storageService = {
  getWidgets(): IWidgetNode[] | null {
    return getLocalStorage(NAME_WIDGETS)
  },
  setWidgets(widgets: IWidgetNode[]) {
    setLocalStorage(NAME_WIDGETS, widgets)
  },
  removeWidgets() {
    removeLocalStorage(NAME_WIDGETS)
  },

  getLanguage(): string | null {
    return getLocalStorage(NAME_LANGUAGE)
  },
  setLanguage(lang: string) {
    setLocalStorage(NAME_LANGUAGE, lang)
  },

  getTemplates(): ITemplate[] | null {
    return getLocalStorage(NAME_TEMPLATES)
  },
  setTemplates(templates: ITemplate[]) {
    setLocalStorage(NAME_TEMPLATES, templates)
  },
}
