import { produce } from 'immer'
import { useTranslation } from 'react-i18next'

import { Switch } from '#ui/switch'
import { Input } from '#ui/input'
import { Slider } from '#ui/slider'
import { WIDGET_CONSTRAINTS } from '#widgets/constraints'
import { ContactsForm } from '#widgets/form/contacts/contacts-form'
import type { IBasicInfoData, ILinkData } from '#widgets/types'

type PropsData = IBasicInfoData['propsData']

export function BasicInfoForm({
  propsData,
  onChange,
}: {
  propsData: PropsData
  onChange: (value: PropsData) => void
}) {
  const { t } = useTranslation()
  const { name, linksGroup, nameFontSize = 24, infoFontSize = 14, nameBold = true } = propsData

  function handleChange<K extends keyof PropsData>(name: K, value: PropsData[K]) {
    onChange({
      ...propsData,
      [name]: value,
    })
  }

  const handleLinkGroupChange = (groupIndex: number, linkGroup: ILinkData[]) => {
    const nextState = produce(linksGroup, draft => {
      draft[groupIndex] = linkGroup
    })
    handleChange('linksGroup', nextState)
  }

  return (
    <div>
      <div>
        <div className="form-label">
          <span>{t('form.name')}</span>
        </div>
        <Input
          value={name}
          placeholder={t('form.enterName')}
          onChange={e => handleChange('name', e.target.value)}
        />
        <div className="mt-3 flex items-center justify-between">
          <div className="form-label">
            <span>{t('form.isNameBold')}</span>
          </div>
          <Switch
            checked={nameBold}
            onChange={e => handleChange('nameBold', e.target.checked)}
          />
        </div>
        <div className="form-label mt-2">
          <span>{t('form.nameFontSize')}</span>
        </div>
        <div className="flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={nameFontSize}
            onChange={e => handleChange('nameFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[nameFontSize]}
            onValueChange={value => handleChange('nameFontSize', value[0])}
          />
        </div>
      </div>

      <div>
        <div className="form-label">
          <span>{t('form.contactInfo1')}</span>
        </div>
        <div className="form-label mt-2">
          <span>{t('form.infoFontSize')}</span>
        </div>
        <div className="mb-4 flex items-center">
          <Input
            className="mr-2 w-32 shrink-0"
            type="number"
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={infoFontSize}
            onChange={e => handleChange('infoFontSize', Number(e.target.value))}
          />
          <Slider
            min={WIDGET_CONSTRAINTS.style.fontSize.min}
            max={WIDGET_CONSTRAINTS.style.fontSize.max}
            value={[infoFontSize]}
            onValueChange={value => handleChange('infoFontSize', value[0])}
          />
        </div>
        <ContactsForm
          data={linksGroup[0]}
          onChange={data => handleLinkGroupChange(0, data)}
        />
        <div className="form-label">
          <span>{t('form.contactInfo2')}</span>
        </div>
        <ContactsForm
          data={linksGroup[1]}
          onChange={data => handleLinkGroupChange(1, data)}
        />
        <div className="form-label">
          <span>{t('form.contactInfo3')}</span>
        </div>
        <ContactsForm
          data={linksGroup[2]}
          onChange={data => handleLinkGroupChange(2, data)}
        />
      </div>
    </div>
  )
}
