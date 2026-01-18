import type { IEducationData } from '../types'

interface EducationProps {
    data: IEducationData['propsData']
    isLatex?: boolean
}

export function Education({ data, isLatex }: EducationProps) {
    const { school, degree, location, dateRange, relevantCourses, schoolFontSize = 16, degreeFontSize = 14, locationFontSize = 12, dateRangeFontSize = 12, relevantCoursesFontSize = 12 } = data

    return (
        <div className={`w-full ${isLatex ? 'font-serif' : ''}`}>
            <div
                className="flex items-baseline justify-between"
                style={{ marginBottom: 'var(--title-spacing, 4px)' }}
            >
                <h3
                    className={`font-bold text-black`}
                    style={{ fontSize: `${schoolFontSize}pt` }}
                >
                    {school}
                </h3>
                <span
                    className={`italic text-zinc-900`}
                    style={{ fontSize: `${locationFontSize}pt` }}
                >
                    {location}
                </span>
            </div>
            <div className="flex justify-between items-baseline">
                <span
                    className="text-zinc-900"
                    style={{ fontSize: `${degreeFontSize}pt` }}
                >
                    {degree}
                </span>
                <span
                    className={`text-zinc-900 ${isLatex ? 'italic' : ''}`}
                    style={{ fontSize: `${dateRangeFontSize}pt` }}
                >
                    {dateRange}
                </span>
            </div>
            {relevantCourses && (
                <div className="mt-1" style={{ marginTop: 'var(--relevant-courses-spacing, 4px)' }}>
                    <span
                        className="font-bold text-zinc-900 mr-2"
                        style={{ fontSize: `${relevantCoursesFontSize}pt` }}
                    >
                        Relevant Courses:
                    </span>
                    <span
                        className="text-zinc-900"
                        style={{ fontSize: `${relevantCoursesFontSize}pt` }}
                    >
                        {relevantCourses}
                    </span>
                </div>
            )}
        </div>
    )
}
