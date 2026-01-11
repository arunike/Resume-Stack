import { produce } from 'immer'
import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
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
  const { name, linksGroup } = propsData

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
      </div>

      <div>
        <div className="form-label">
          <span>{t('form.contactInfo1')}</span>
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
