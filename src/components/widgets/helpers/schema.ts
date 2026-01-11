import { z } from 'zod'

import { linkIconNames } from '#widgets/types'

const linkSchema = z.object({
  href: z.string(),
  content: z.string(),
  icon: z.enum(linkIconNames),
})

const basicInfoSchema = z.object({
  type: z.literal('BasicInfo'),
  id: z.string(),
  data: z.object({
    propsData: z.object({
      name: z.string(),
      linksGroup: z.tuple([
        z.array(z.object({ href: z.string(), content: z.string(), icon: z.string() })).transform(items => items.filter((item): item is z.infer<typeof linkSchema> => item.icon !== 'cake' && linkIconNames.includes(item.icon as any))),
        z.array(z.object({ href: z.string(), content: z.string(), icon: z.string() })).transform(items => items.filter((item): item is z.infer<typeof linkSchema> => item.icon !== 'cake' && linkIconNames.includes(item.icon as any))),
        z.array(z.object({ href: z.string(), content: z.string(), icon: z.string() })).transform(items => items.filter((item): item is z.infer<typeof linkSchema> => item.icon !== 'cake' && linkIconNames.includes(item.icon as any))),
      ]),
    }),
    styleData: z.object({
      marginTop: z.number(),
      marginBottom: z.number(),
      lineHeight: z.number().optional().default(1.5),
      paragraphSpacing: z.number().optional().default(0),
      listSpacing: z.number().optional().default(0),
      fontSize: z.number().optional().default(16),
      itemSpacing: z.number().optional().default(4),
      titleSpacing: z.number().optional().default(4),
      dateSpacing: z.number().optional().default(4),
    }),
  }),
})

const titleSectionSchema = z.object({
  type: z.literal('TitleSection'),
  id: z.string(),
  data: z.object({
    propsData: z.object({
      title: z.string(),
    }),
    styleData: z.object({
      marginTop: z.number(),
      marginBottom: z.number(),
      lineHeight: z.number().optional().default(1.5),
      paragraphSpacing: z.number().optional().default(0),
      listSpacing: z.number().optional().default(0),
      fontSize: z.number().optional().default(16),
      itemSpacing: z.number().optional().default(4),
      titleSpacing: z.number().optional().default(4),
      dateSpacing: z.number().optional().default(4),
      dividerSpacing: z.number().optional().default(4),
    }),
  }),
})

const experienceTimeSchema = z.object({
  type: z.literal('ExperienceTime'),
  id: z.string(),
  data: z.object({
    propsData: z.object({
      title: z.string(),
      dateRange: z.string(),
    }),
    styleData: z.object({
      marginTop: z.number(),
      marginBottom: z.number(),
      lineHeight: z.number().optional().default(1.5),
      paragraphSpacing: z.number().optional().default(0),
      listSpacing: z.number().optional().default(0),
      fontSize: z.number().optional().default(16),
      itemSpacing: z.number().optional().default(4),
      titleSpacing: z.number().optional().default(4),
      dateSpacing: z.number().optional().default(4),
    }),
  }),
})

const textContentSchema = z.object({
  type: z.literal('TextContent'),
  id: z.string(),
  data: z.object({
    propsData: z.object({
      content: z.string(),
      date: z.string().optional(),
      title: z.string().optional(),
      location: z.string().optional(),
    }),
    styleData: z.object({
      marginTop: z.number(),
      marginBottom: z.number(),
      lineHeight: z.number().optional().default(1.5),
      paragraphSpacing: z.number().optional().default(0),
      listSpacing: z.number().optional().default(0),
      fontSize: z.number().optional().default(16),
      itemSpacing: z.number().optional().default(4),
      titleSpacing: z.number().optional().default(4),
      dateSpacing: z.number().optional().default(4),
    }),
  }),
})



const educationSchema = z.object({
  type: z.literal('Education'),
  id: z.string(),
  data: z.object({
    propsData: z.object({
      school: z.string(),
      degree: z.string(),
      location: z.string(),
      dateRange: z.string(),
      relevantCourses: z.string().optional(),
    }),
    styleData: z.object({
      marginTop: z.number(),
      marginBottom: z.number(),
      lineHeight: z.number().optional().default(1.5),
      paragraphSpacing: z.number().optional().default(0),
      listSpacing: z.number().optional().default(0),
      fontSize: z.number().optional().default(0),
      itemSpacing: z.number().optional().default(4),
      titleSpacing: z.number().optional().default(4),
      dateSpacing: z.number().optional().default(4),
      relevantCoursesSpacing: z.number().optional().default(4),
    }),
  }),
})

const widgetSchema = z.discriminatedUnion('type', [
  basicInfoSchema,
  titleSectionSchema,
  experienceTimeSchema,
  textContentSchema,
  educationSchema,
])

export const widgetsSchema = widgetSchema.array()
