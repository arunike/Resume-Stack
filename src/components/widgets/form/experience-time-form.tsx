import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import { Switch } from '#ui/switch'
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
          placeholder={t('form.enterLocation')}
          onChange={e => handleChange('location', e.target.value)}
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
            checked={propsData.locationBold ?? false}
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
          placeholder={t('form.enterDate')}
          onChange={e => handleChange('date', e.target.value)}
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
            checked={propsData.dateBold ?? false}
            onChange={e => handleChange('dateBold', e.target.checked)}
          />
        </div>
      </div>
    </div>
  )
}
