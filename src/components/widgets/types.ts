import type { JSX } from 'react'

export type WidgetType =
  | 'BasicInfo'
  | 'TitleSection'
  | 'ExperienceTime'
  | 'TextContent'
  | 'Education'

export interface IWidgetMaterial {
  type: WidgetType
  icon: JSX.Element
  title: string
}

export interface ITemplate {
  id: string
  name: string
  widgets: IWidgetNode[]
  createdAt: number
}

export type IWidgetNode =
  | {
      type: 'BasicInfo'
      id: string
      data: IBasicInfoData
    }
  | {
      type: 'TitleSection'
      id: string
      data: ITitleSectionData
    }
  | {
      type: 'ExperienceTime'
      id: string
      data: IExperienceTimeData
    }
  | {
      type: 'TextContent'
      id: string
      data: ITextContentData
    }
  | {
      type: 'Education'
      id: string
      data: IEducationData
    }

export interface IStyleData {
  marginTop: number
  marginBottom: number
  lineHeight: number
  paragraphSpacing: number
  listSpacing: number
  fontSize: number
  itemSpacing: number
  titleSpacing: number
  dateSpacing: number
  dividerSpacing: number
  relevantCoursesSpacing: number
}

export interface IBasicInfoData {
  styleData: IStyleData
  propsData: {
    name: string
    linksGroup: [ILinkGroupData, ILinkGroupData, ILinkGroupData]
    nameFontSize?: number
    infoFontSize?: number
    nameBold?: boolean
  }
}
export type ILinkGroupData = ILinkData[]
export interface ILinkData {
  href: string
  content: string
  icon: LinkIconNames
}

export interface ITitleSectionData {
  styleData: IStyleData
  propsData: {
    title: string
    titleBold?: boolean
  }
}

export interface IExperienceTimeData {
  styleData: IStyleData
  propsData: {
    title: string
    date: string
    location?: string
    titleFontSize?: number
    dateFontSize?: number
    locationFontSize?: number
    titleBold?: boolean
    dateBold?: boolean
    locationBold?: boolean
  }
}

export interface ITextContentData {
  styleData: IStyleData
  propsData: {
    content: string
    date?: string
    title?: string
    location?: string
    titleFontSize?: number
    locationFontSize?: number
    dateFontSize?: number
    contentFontSize?: number
    titleBold?: boolean
    locationBold?: boolean
    dateBold?: boolean
  }
}

export interface IEducationData {
  styleData: IStyleData
  propsData: {
    school: string
    degree: string
    location: string
    date: string
    relevantCourses?: string
    schoolFontSize?: number
    degreeFontSize?: number
    locationFontSize?: number
    dateFontSize?: number
    relevantCoursesFontSize?: number
    schoolBold?: boolean
    degreeBold?: boolean
    locationBold?: boolean
    dateBold?: boolean
    relevantCoursesLabelBold?: boolean
    relevantCoursesBold?: boolean
  }
}

export const linkIconNames = [
  'link',
  'location',
  'phone',
  'github',
  'juejin',
  'mail',
  'gmail',
  'linkedin',
  'website',
] as const
export type LinkIconNames = (typeof linkIconNames)[number]
