import type { IEducationData } from '../types'
import { clsx } from 'clsx'

interface EducationProps {
  data: IEducationData['propsData']
  isLatex?: boolean
}

export function Education({ data, isLatex }: EducationProps) {
  const {
    school,
    degree,
    location,
    date,
    relevantCourses,
    schoolFontSize = 16,
    degreeFontSize = 14,
    locationFontSize = 12,
    dateFontSize = 12,
    relevantCoursesFontSize = 12,
    schoolBold = true,
    degreeBold = true,
    locationBold = true,
    dateBold = true,
    relevantCoursesLabelBold = true,
    relevantCoursesBold = false,
  } = data

  return (
    <div className={`w-full ${isLatex ? 'font-serif' : ''}`}>
      <div
        className="flex items-baseline justify-between"
        style={{ marginBottom: 'var(--title-spacing, 4px)' }}
      >
        <h3
          className={clsx('text-black', schoolBold && 'font-bold')}
          style={{ fontSize: `${schoolFontSize}pt` }}
        >
          {school}
        </h3>
        <span
          className={clsx(`text-zinc-900`, isLatex && 'italic', locationBold && 'font-bold')}
          style={{ fontSize: `${locationFontSize}pt` }}
        >
          {location}
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span
          className={clsx('text-zinc-900', degreeBold && 'font-bold')}
          style={{ fontSize: `${degreeFontSize}pt` }}
        >
          {degree}
        </span>
        <span
          className={clsx(`text-zinc-900 ${isLatex ? 'italic' : ''}`, dateBold && 'font-bold')}
          style={{ fontSize: `${dateFontSize}pt` }}
        >
          {date}
        </span>
      </div>
      {relevantCourses && (
        <div
          className="mt-1"
          style={{ marginTop: 'var(--relevant-courses-spacing, 4px)' }}
        >
          <span
            className={clsx('mr-2 text-zinc-900', relevantCoursesLabelBold && 'font-bold')}
            style={{ fontSize: `${relevantCoursesFontSize}pt` }}
          >
            Relevant Courses:
          </span>
          <span
            className={clsx('text-zinc-900', relevantCoursesBold && 'font-bold')}
            style={{ fontSize: `${relevantCoursesFontSize}pt` }}
          >
            {relevantCourses}
          </span>
        </div>
      )}
    </div>
  )
}
