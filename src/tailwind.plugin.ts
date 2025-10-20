import plugin from 'tailwindcss/plugin'

const defaultLightTokens = {
  '--sidebar-background': '255 255 255',
  '--sidebar-foreground': '30 41 59',
  '--sidebar-primary': '30 64 175',
  '--sidebar-primary-foreground': '255 255 255',
  '--sidebar-accent': '241 245 249',
  '--sidebar-accent-foreground': '30 41 59',
  '--sidebar-border': '226 232 240',
  '--sidebar-ring': '59 130 246',
}

const defaultDarkTokens = {
  '--sidebar-background': '30 41 59',
  '--sidebar-foreground': '241 245 249',
  '--sidebar-primary': '96 165 250',
  '--sidebar-primary-foreground': '15 23 42',
  '--sidebar-accent': '51 65 85',
  '--sidebar-accent-foreground': '241 245 249',
  '--sidebar-border': '71 85 105',
  '--sidebar-ring': '96 165 250',
}

const sidebarColors = {
  sidebar: 'rgb(var(--sidebar-background) / <alpha-value>)',
  'sidebar-foreground': 'rgb(var(--sidebar-foreground) / <alpha-value>)',
  'sidebar-primary': 'rgb(var(--sidebar-primary) / <alpha-value>)',
  'sidebar-primary-foreground':
    'rgb(var(--sidebar-primary-foreground) / <alpha-value>)',
  'sidebar-accent': 'rgb(var(--sidebar-accent) / <alpha-value>)',
  'sidebar-accent-foreground':
    'rgb(var(--sidebar-accent-foreground) / <alpha-value>)',
  'sidebar-border': 'rgb(var(--sidebar-border) / <alpha-value>)',
  'sidebar-ring': 'rgb(var(--sidebar-ring) / <alpha-value>)',
}

export const subgTheme = plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        ...defaultLightTokens,
        '--sidebar-bg': defaultLightTokens['--sidebar-background'],
      },
      '.dark': {
        ...defaultDarkTokens,
        '--sidebar-bg': defaultDarkTokens['--sidebar-background'],
      },
    })
  },
  {
    theme: {
      extend: {
        colors: sidebarColors,
      },
    },
  },
) as ReturnType<typeof plugin>

export default subgTheme
