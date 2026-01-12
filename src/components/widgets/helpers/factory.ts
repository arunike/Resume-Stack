import type { ILinkData, IWidgetNode, WidgetType } from '#widgets/types'

export function generateWidgetId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

export function createDefaultWidgets(): IWidgetNode[] {
  return [
    {
      type: 'BasicInfo',
      id: generateWidgetId(),
      data: {
        propsData: {
          name: 'Richie Zhou',
          linksGroup: [
            [
              { href: '', content: '(123) 456-7890', icon: 'phone' },
            ],
            [
              { href: 'https://github.com/arunike', content: 'github.com/arunike', icon: 'github' },
              {
                href: 'mailto:richiezhouyjz@gmail.com',
                content: 'richiezhouyjz@gmail.com',
                icon: 'gmail',
              },
            ],
            [],
          ],
        },
        styleData: {
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'TitleSection',
      id: generateWidgetId(),
      data: {
        propsData: { title: 'Professional Skills' },
        styleData: {
          marginTop: 20,
          marginBottom: 12,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'TextContent',
      id: generateWidgetId(),
      data: {
        propsData: {
          content: '<ul><li><p>Proficient in <code>JavaScript</code>, <code>TypeScript</code>;</p></li><li><p>Experienced with <code>Vue</code>, <code>React</code> frontend development and understanding of core principles;</p></li><li><p>Skilled in using <code>Vite</code>, <code>Webpack</code> and other build tools;</p></li><li><p>Proficient in backend development with <code>NodeJS</code>, <code>MySQL</code>, <code>Redis</code>;</p></li></ul>',
        },
        styleData: {
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'TitleSection',
      id: generateWidgetId(),
      data: {
        propsData: { title: 'Work Experience' },
        styleData: {
          marginTop: 20,
          marginBottom: 12,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'ExperienceTime',
      id: generateWidgetId(),
      data: {
        propsData: {
          title: 'Company',
          dateRange: '2026/01 - 2026/12',
        },
        styleData: {
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'TextContent',
      id: generateWidgetId(),
      data: {
        propsData: {
          content: '<ul><li><p>Responsible for the full development process from requirement analysis to frontend architecture design, feature development, and performance optimization.</p></li><li><p>Consistently collaborated with product, design, and backend teams to promote agile development processes and implement CI/CD toolchains, ensuring high-quality delivery.</p></li><li><p>Successfully optimized the payment process page through in-depth research on user experience and frontend performance, improving user conversion and payment success rates.</p></li></ul>',
        },
        styleData: {
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'TitleSection',
      id: generateWidgetId(),
      data: {
        propsData: { title: 'Education' },
        styleData: {
          marginTop: 20,
          marginBottom: 12,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
    {
      type: 'ExperienceTime',
      id: generateWidgetId(),
      data: {
        propsData: {
          title: 'University - Computer Science',
          dateRange: '2026/01 - 2026/12',
        },
        styleData: {
          marginTop: 0,
          marginBottom: 0,
          lineHeight: 1.5,
          paragraphSpacing: 0,
          listSpacing: 0,
          fontSize: 16,
          itemSpacing: 4,
          titleSpacing: 4,
          dateSpacing: 4,
        },
      },
    },
  ]
}

export function createWidgetNode(type: WidgetType): IWidgetNode {
  const id = `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
  switch (type) {
    case 'BasicInfo':
      return {
        type: 'BasicInfo',
        id,
        data: {
          propsData: {
            name: 'Richie Zhou',
            linksGroup: [
              [
                {
                  href: '',
                  content: '(123) 456-7890',
                  icon: 'phone',
                },
              ],
              [
                {
                  href: 'https://github.com/arunike',
                  content: 'github.com/arunike',
                  icon: 'github',
                },
                {
                  href: 'mailto:richiezhouyjz@gmail.com',
                  content: 'richiezhouyjz@gmail.com',
                  icon: 'gmail',
                },
              ],
              [],
            ],
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 1.5,
            paragraphSpacing: 0,
            listSpacing: 0,
            fontSize: 16,
            itemSpacing: 4,
            titleSpacing: 4,
            dateSpacing: 4,
          },
        },
      }
    case 'TitleSection':
      return {
        type: 'TitleSection',
        id,
        data: {
          propsData: {
            title: 'Work Experience',
          },
          styleData: {
            marginTop: 20,
            marginBottom: 12,
            lineHeight: 1.5,
            paragraphSpacing: 0,
            listSpacing: 0,
            fontSize: 16,
            itemSpacing: 4,
            titleSpacing: 4,
            dateSpacing: 4,
            dividerSpacing: 4,
          },
        },
      }
    case 'ExperienceTime':
      return {
        type: 'ExperienceTime',
        id,
        data: {
          propsData: {
            title: 'Company',
            dateRange: '2026/01 - 2026/12',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 1.5,
            paragraphSpacing: 0,
            listSpacing: 0,
            fontSize: 16,
            itemSpacing: 4,
            titleSpacing: 4,
            dateSpacing: 4,
          },
        },
      }
    case 'TextContent':
      return {
        type: 'TextContent',
        id,
        data: {
          propsData: {
            content: '<ul><li><p>Responsible for the full development process from requirement analysis to frontend architecture design, feature development, and performance optimization.</p></li><li><p>Consistently collaborated with product, design, and backend teams to promote agile development processes and implement CI/CD toolchains, ensuring high-quality delivery.</p></li><li><p>Successfully optimized the payment process page through in-depth research on user experience and frontend performance, improving user conversion and payment success rates.</p></li></ul>',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 1.5,
            paragraphSpacing: 0,
            listSpacing: 0,
            fontSize: 16,
            itemSpacing: 4,
            titleSpacing: 4,
            dateSpacing: 4,
          },
        },
      }

    case 'Education':
      return {
        type: 'Education',
        id,
        data: {
          propsData: {
            school: 'University',
            degree: 'Bachelor of Science in Computer Science',
            location: 'Location',
            dateRange: 'Sep. 2020 - May 2024',
            relevantCourses: '',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 1.5,
            paragraphSpacing: 0,
            listSpacing: 0,
            fontSize: 16,
            itemSpacing: 4,
            titleSpacing: 4,
            dateSpacing: 4,
            relevantCoursesSpacing: 4,
          },
        },
      }
    default: {
      const exhaustiveCheck: never = type
      return exhaustiveCheck
    }
  }
}

export function createLinkData(): ILinkData {
  return {
    href: 'https://github.com/',
    content: 'github.com',
    icon: 'link',
  }
}
