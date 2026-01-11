import { useTranslation } from 'react-i18next'

import { Input } from '#ui/input'
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
            </div>
            <div>
                <div className="form-label">
                    <span>{t('form.timeRange')}</span>
                </div>
                <Input
                    value={propsData.dateRange}
                    onChange={e => handleChange('dateRange', e.target.value)}
                    placeholder={t('form.enterTimeRange')}
                />
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
            </div>
        </div>
    )
}
