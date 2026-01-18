export const WIDGET_CONSTRAINTS = {
  basicInfo: {
    linksPerRow: 3,
    avatar: { size: { min: 48, max: 128 } },
  },
  imageSection: {
    sizePercent: { min: 20, max: 100 },
    borderRadius: { min: 0, max: 48 },
  },
  style: {
    margin: { min: -100, max: 100 },
    lineHeight: { min: 1, max: 3 },
    spacing: { min: -32, max: 32 },
    fontSize: { min: 8, max: 72 },
  },
} as const
