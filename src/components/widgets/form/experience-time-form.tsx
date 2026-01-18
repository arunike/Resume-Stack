import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import { Slider } from '#ui/slider'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'
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
        <div className="form-label mt-2">
          <span>{t('form.dateRangeFontSize')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={propsData.dateRangeFontSize || 12}
            onChange={e => handleChange('dateRangeFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[propsData.dateRangeFontSize || 12]}
            onValueChange={value => handleChange('dateRangeFontSize', value[0])}
          />
        </div>
      </div>
    </div>
  )
}
