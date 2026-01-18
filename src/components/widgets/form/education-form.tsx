import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import { Switch } from '#ui/switch'
import { Slider } from '#ui/slider'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'
import type { IEducationData } from '#widgets/types'

type PropsData = IEducationData['propsData']

export function EducationForm({
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
          <span>{t('form.school')}</span>
        </div>
        <Input
          value={propsData.school}
          onChange={e => handleChange('school', e.target.value)}
          placeholder={t('form.enterSchool')}
        />
        <div className="form-label mt-2">
          <span>{t('form.schoolFontSize')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={propsData.schoolFontSize || 16}
            onChange={e => handleChange('schoolFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[propsData.schoolFontSize || 16]}
            onValueChange={value => handleChange('schoolFontSize', value[0])}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="form-label">
            <span>{t('form.isSchoolBold')}</span>
          </div>
          <Switch
            checked={propsData.schoolBold ?? true}
            onChange={e => handleChange('schoolBold', e.target.checked)}
          />
        </div>
      </div>
      <div>
        <div className="form-label">
          <span>{t('form.location')}</span>
        </div>
        <Input
          value={propsData.location}
          onChange={e => handleChange('location', e.target.value)}
          placeholder={t('form.enterLocation')}
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
            checked={propsData.locationBold ?? true}
            onChange={e => handleChange('locationBold', e.target.checked)}
          />
        </div>
      </div>
      <div>
        <div className="form-label">
          <span>{t('form.degree')}</span>
        </div>
        <Input
          value={propsData.degree}
          onChange={e => handleChange('degree', e.target.value)}
          placeholder={t('form.enterDegree')}
        />
        <div className="form-label mt-2">
          <span>{t('form.degreeFontSize')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={propsData.degreeFontSize || 14}
            onChange={e => handleChange('degreeFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[propsData.degreeFontSize || 14]}
            onValueChange={value => handleChange('degreeFontSize', value[0])}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="form-label">
            <span>{t('form.isDegreeBold')}</span>
          </div>
          <Switch
            checked={propsData.degreeBold ?? true}
            onChange={e => handleChange('degreeBold', e.target.checked)}
          />
        </div>
      </div>
      <div>
        <div className="form-label">
          <span>{t('form.date')}</span>
        </div>
        <Input
          value={propsData.date}
          onChange={e => handleChange('date', e.target.value)}
          placeholder={t('form.enterDate')}
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
      <div>
        <div className="form-label">
          <span>{t('form.relevantCourses')}</span>
        </div>
        <Input
          value={propsData.relevantCourses || ''}
          onChange={e => handleChange('relevantCourses', e.target.value)}
          placeholder={t('form.enterRelevantCourses')}
        />
        <div className="form-label mt-2">
          <span>{t('form.relevantCoursesFontSize')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={propsData.relevantCoursesFontSize || 12}
            onChange={e => handleChange('relevantCoursesFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[propsData.relevantCoursesFontSize || 12]}
            onValueChange={value => handleChange('relevantCoursesFontSize', value[0])}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="form-label">
            <span>{t('form.isRelevantCoursesLabelBold')}</span>
          </div>
          <Switch
            checked={propsData.relevantCoursesLabelBold ?? true}
            onChange={e => handleChange('relevantCoursesLabelBold', e.target.checked)}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="form-label">
            <span>{t('form.isRelevantCoursesBold')}</span>
          </div>
          <Switch
            checked={propsData.relevantCoursesBold ?? false}
            onChange={e => handleChange('relevantCoursesBold', e.target.checked)}
          />
        </div>
      </div>
    </div>
  )
}
