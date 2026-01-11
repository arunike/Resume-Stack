import type { IEducationData } from '../types'

interface EducationProps {
    data: IEducationData['propsData']
    isLatex?: boolean
}

export function Education({ data, isLatex }: EducationProps) {
    const { school, degree, location, dateRange } = data

    return (
        <div className={`w-full ${isLatex ? 'font-serif' : ''}`}>
            <div
                className="flex items-baseline justify-between"
                style={{ marginBottom: 'var(--title-spacing, 4px)' }}
            >
                <h3 className={`text-[1em] font-bold text-black`}>
                    {school}
                </h3>
                <span className={`text-[0.9em] italic text-zinc-900`}>
                    {location}
                </span>
            </div>
            <div className="flex justify-between items-baseline">
                <span className="text-[0.9em] text-zinc-900">
                    {degree}
                </span>
                <span className={`text-[0.9em] text-zinc-900 ${isLatex ? 'italic' : ''}`}>
                    {dateRange}
                </span>
            </div>
            {data.relevantCourses && (
                <div className="mt-1" style={{ marginTop: 'var(--relevant-courses-spacing, 4px)' }}>
                    <span className="text-[0.9em] font-bold text-zinc-900 mr-2">
                        Relevant Courses:
                    </span>
                    <span className="text-[0.9em] text-zinc-900">
                        {data.relevantCourses}
                    </span>
                </div>
            )}
        </div>
    )
}
