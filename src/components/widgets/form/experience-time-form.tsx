import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import type { IExperienceTimeData } from '#widgets/types'

type PropsData = IExperienceTimeData['propsData']

export function ExperienceTimeForm({
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
          <span>{t('form.experienceContent')}</span>
        </div>
        <Input
          value={propsData.title}
          placeholder={t('form.enterExperience')}
          onChange={e => handleChange('title', e.target.value)}
        />
      </div>

      <div>
        <div className="form-label">
          <span>{t('form.timeRange')}</span>
        </div>
        <Input
          value={propsData.dateRange}
          placeholder={t('form.enterTimeRange')}
          onChange={e => handleChange('dateRange', e.target.value)}
        />
      </div>
    </div>
  )
}
