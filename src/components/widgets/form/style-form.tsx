import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
import { Slider } from '#ui/slider'
import type { IStyleData, WidgetType } from '#widgets/types'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'

interface StyleFormProps {
  widgetType: WidgetType
  propsData: any
  styleData: IStyleData
  onChange: (styleData: IStyleData) => void
}

export function StyleForm({ widgetType, propsData, styleData, onChange }: StyleFormProps) {
  const { t } = useTranslation()

  function handleChange<K extends keyof IStyleData>(name: K, value: IStyleData[K]) {
    onChange({
      ...styleData,
      [name]: value,
    })
  }

  const hasTitleSpacing =
    ['Education', 'BasicInfo'].includes(widgetType) ||
    (['TextContent'].includes(widgetType) && !!propsData?.title)
  const hasDateSpacing =
    (['TextContent'].includes(widgetType) && propsData?.date) ||
    (['ExperienceTime', 'Education'].includes(widgetType) && propsData?.dateRange)

  const hasFontSize = !['BasicInfo', 'TextContent', 'ExperienceTime', 'Education'].includes(
    widgetType,
  )

  const hasParagraphSpacing = ['TextContent'].includes(widgetType)
  const hasListSpacing = ['TextContent', 'BasicInfo'].includes(widgetType)
  const hasDividerSpacing = ['TitleSection'].includes(widgetType)
  const hasRelevantCoursesSpacing = widgetType === 'Education' && !!propsData?.relevantCourses

  return (
    <ul>
      <li>
        <div className="form-label">
          <span>{t('form.marginTop')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.margin.min}
            max={WIDGET_CONSTRAINTS.style.margin.max}
            value={styleData.marginTop}
            onChange={e => handleChange('marginTop', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.margin.min}
            max={WIDGET_CONSTRAINTS.style.margin.max}
            value={[styleData.marginTop]}
            onValueChange={value => handleChange('marginTop', value[0])}
          />
        </div>
      </li>
      <li>
        <div className="form-label">
          <span>{t('form.marginBottom')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.margin.min}
            max={WIDGET_CONSTRAINTS.style.margin.max}
            value={styleData.marginBottom}
            onChange={e => handleChange('marginBottom', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.margin.min}
            max={WIDGET_CONSTRAINTS.style.margin.max}
            value={[styleData.marginBottom]}
            onValueChange={value => handleChange('marginBottom', value[0])}
          />
        </div>
      </li>
      <li>
        <div className="form-label">
          <span>{t('form.lineHeight')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.lineHeight.min}
            max={WIDGET_CONSTRAINTS.style.lineHeight.max}
            step={0.1}
            value={styleData.lineHeight}
            onChange={e => handleChange('lineHeight', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.lineHeight.min}
            max={WIDGET_CONSTRAINTS.style.lineHeight.max}
            step={0.1}
            value={[styleData.lineHeight]}
            onValueChange={value => handleChange('lineHeight', value[0])}
          />
        </div>
      </li>
      {hasParagraphSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.paragraphSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.paragraphSpacing}
              onChange={e => handleChange('paragraphSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.paragraphSpacing]}
              onValueChange={value => handleChange('paragraphSpacing', value[0])}
            />
          </div>
        </li>
      )}
      {hasListSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.listSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.listSpacing}
              onChange={e => handleChange('listSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.listSpacing]}
              onValueChange={value => handleChange('listSpacing', value[0])}
            />
          </div>
        </li>
      )}
      {hasFontSize && (
        <li>
          <div className="form-label">
            <span>{t('form.fontSize')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.fontSize.min}
              max={WIDGET_CONSTRAINTS.style.fontSize.max}
              value={styleData.fontSize || 11}
              onChange={e => handleChange('fontSize', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.fontSize.min}
              max={WIDGET_CONSTRAINTS.style.fontSize.max}
              value={[styleData.fontSize || 11]}
              onValueChange={value => handleChange('fontSize', value[0])}
            />
          </div>
        </li>
      )}
      {hasTitleSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.titleSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.titleSpacing ?? 4}
              onChange={e => handleChange('titleSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.titleSpacing ?? 4]}
              onValueChange={value => handleChange('titleSpacing', value[0])}
            />
          </div>
        </li>
      )}
      {hasDateSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.dateSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.dateSpacing ?? 4}
              onChange={e => handleChange('dateSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.dateSpacing ?? 4]}
              onValueChange={value => handleChange('dateSpacing', value[0])}
            />
          </div>
        </li>
      )}
      {hasDividerSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.dividerSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.dividerSpacing ?? 4}
              onChange={e => handleChange('dividerSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.dividerSpacing ?? 4]}
              onValueChange={value => handleChange('dividerSpacing', value[0])}
            />
          </div>
        </li>
      )}
      {hasRelevantCoursesSpacing && (
        <li>
          <div className="form-label">
            <span>{t('form.relevantCoursesSpacing')}</span>
          </div>
          <div className="flex items-center">
            <Input
              className="mr-2 w-32 shrink-0"
              type="number"
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={styleData.relevantCoursesSpacing ?? 4}
              onChange={e => handleChange('relevantCoursesSpacing', Number(e.target.value))}
            />
            <Slider
              min={WIDGET_CONSTRAINTS.style.spacing.min}
              max={WIDGET_CONSTRAINTS.style.spacing.max}
              value={[styleData.relevantCoursesSpacing ?? 4]}
              onValueChange={value => handleChange('relevantCoursesSpacing', value[0])}
            />
          </div>
        </li>
      )}
    </ul>
  )
}
