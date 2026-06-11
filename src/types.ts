import type { CSSProperties } from 'react'

export type RioGeometricPatternFit = 'cover' | 'contain'
export type RioGeometricPatternAlign = 'left' | 'center' | 'right'
export type RioGeometricPatternFade = 'none' | 'left' | 'right' | 'both'
export type RioGeometricPatternVariant = 'full' | 'strip' | 'corner'

export interface RioGeometricPatternPalette {
  background: string
  primary: string
  secondary: string
}

export interface RioGeometricPatternProps {
  className?: string
  style?: CSSProperties
  palette?: Partial<RioGeometricPatternPalette>
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  opacity?: number
  fit?: RioGeometricPatternFit
  align?: RioGeometricPatternAlign
  fade?: RioGeometricPatternFade
  variant?: RioGeometricPatternVariant
  decorative?: boolean
  ariaLabel?: string
}
