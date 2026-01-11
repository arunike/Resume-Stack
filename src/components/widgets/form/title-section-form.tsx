import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import type { ITitleSectionData } from '#widgets/types'

type PropsData = ITitleSectionData['propsData']

export function TitleSectionForm({
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

  return (
    <div>
      <div>
        <div className="form-label">
          <span>{t('form.titleContent')}</span>
        </div>
        <Input
          value={propsData.title}
          placeholder={t('form.enterTitle')}
          onChange={e => handleChange('title', e.target.value)}
        />
      </div>
    </div>
  )
}
