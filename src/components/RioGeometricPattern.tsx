import { rioDefaultPalette } from '../config/rioPatternPresets'
import type {
  RioGeometricPatternAlign,
  RioGeometricPatternFade,
  RioGeometricPatternFit,
  RioGeometricPatternPalette,
  RioGeometricPatternProps,
  RioGeometricPatternVariant,
} from '../types'

type PatternTone = 'primary' | 'secondary'

interface PatternPath {
  d: string
  tone: PatternTone
}

const patternPaths: PatternPath[] = [
  { tone: 'primary', d: 'M 221.592 176.816 L 166.508 176.816 L 166.508 110.715 L 221.592 176.816 Z' },
  { tone: 'primary', d: 'M 148.147 264.950 L 221.591 264.950 L 221.591 176.817 L 148.147 264.950 Z' },
  { tone: 'primary', d: 'M 221.592 264.950 L 276.676 264.950 L 276.676 198.849 L 221.592 264.950 Z' },
  { tone: 'primary', d: 'M 295.036 176.816 L 221.592 176.816 L 221.592 88.684 L 295.036 176.816 Z' },
  { tone: 'primary', d: 'M 74.703 177.085 L 74.703 243.186 L 19.619 243.186 L 74.703 177.085 Z' },
  { tone: 'primary', d: 'M 148.147 265.219 L 148.147 177.086 L 74.703 177.086 L 148.147 265.219 Z' },
  { tone: 'secondary', d: 'M 148.147 177.085 L 148.147 110.984 L 93.064 110.984 L 148.147 177.085 Z' },
  { tone: 'primary', d: 'M 74.703 88.951 L 74.703 177.084 L 1.259 177.084 L 74.703 88.951 Z' },
  { tone: 'primary', d: 'M 295.037 89.912 L 295.037 178.045 L 368.480 178.045 L 295.037 89.912 Z' },
  { tone: 'secondary', d: 'M 295.037 178.046 L 295.037 244.147 L 350.121 244.147 L 295.037 178.046 Z' },
  { tone: 'secondary', d: 'M 221.592 90.697 L 276.676 90.697 L 276.676 24.596 L 221.592 90.697 Z' },
  { tone: 'primary', d: 'M 148.147 90.697 L 221.591 90.697 L 221.591 2.564 L 148.147 90.697 Z' },
  { tone: 'primary', d: 'M 1.258 90.060 L 1.258 23.959 L 56.342 23.959 L 1.258 90.060 Z' },
  { tone: 'primary', d: 'M 74.703 1.927 L 74.703 90.060 L 148.147 90.060 L 74.703 1.927 Z' },
  { tone: 'primary', d: 'M 368.481 88.928 L 368.481 22.827 L 313.397 22.827 L 368.481 88.928 Z' },
  { tone: 'secondary', d: 'M 221.089 705.921 L 221.089 772.248 L 165.817 772.248 L 221.089 705.921 Z' },
  { tone: 'primary', d: 'M 294.785 791.802 L 294.785 703.367 L 221.090 703.367 L 294.785 791.802 Z' },
  { tone: 'secondary', d: 'M 294.785 705.921 L 294.785 639.594 L 239.513 639.594 L 294.785 705.921 Z' },
  { tone: 'primary', d: 'M 221.089 617.486 L 221.089 705.921 L 147.394 705.921 L 221.089 617.486 Z' },
  { tone: 'secondary', d: 'M 221.089 528.510 L 276.361 528.510 L 276.361 594.838 L 221.089 528.510 Z' },
  { tone: 'primary', d: 'M 147.392 528.510 L 221.087 528.510 L 221.087 616.945 L 147.392 528.510 Z' },
  { tone: 'secondary', d: 'M 73.696 705.282 L 128.968 705.282 L 128.968 771.609 L 73.696 705.282 Z' },
  { tone: 'primary', d: 'M 147.392 616.847 L 73.697 616.847 L 73.697 705.282 L 147.392 616.847 Z' },
  { tone: 'secondary', d: 'M 73.696 616.847 L 18.424 616.847 L 18.424 683.174 L 73.696 616.847 Z' },
  { tone: 'primary', d: 'M -0.000 703.366 L 73.695 703.366 L 73.695 791.801 L -0.000 703.366 Z' },
  { tone: 'primary', d: 'M -0.000 529.148 L -0.000 595.475 L 55.272 595.475 L -0.000 529.148 Z' },
  { tone: 'primary', d: 'M 73.696 617.584 L 73.696 529.149 L 147.392 529.149 L 73.696 617.584 Z' },
  { tone: 'secondary', d: 'M 368.481 530.285 L 368.481 596.612 L 313.209 596.612 L 368.481 530.285 Z' },
  { tone: 'primary', d: 'M 368.481 705.239 L 313.209 705.239 L 313.209 638.912 L 368.481 705.239 Z' },
  { tone: 'primary', d: 'M 294.785 791.120 L 368.480 791.120 L 368.480 702.685 L 294.785 791.120 Z' },
  { tone: 'primary', d: 'M 295.656 439.367 L 222.832 439.367 L 222.832 526.757 L 295.656 439.367 Z' },
  { tone: 'secondary', d: 'M 222.830 439.367 L 168.211 439.367 L 168.211 504.910 L 222.830 439.367 Z' },
  { tone: 'secondary', d: 'M 222.830 352.705 L 222.830 287.162 L 277.450 287.162 L 222.830 352.705 Z' },
  { tone: 'primary', d: 'M 150.005 265.315 L 150.005 352.705 L 222.830 352.705 L 150.005 265.315 Z' },
  { tone: 'secondary', d: 'M 150.005 352.705 L 150.005 418.248 L 204.625 418.248 L 150.005 352.705 Z' },
  { tone: 'primary', d: 'M 222.830 440.096 L 222.830 352.706 L 295.655 352.706 L 222.830 440.096 Z' },
  { tone: 'primary', d: 'M 77.180 527.389 L 77.180 461.846 L 131.800 461.846 L 77.180 527.389 Z' },
  { tone: 'primary', d: 'M 4.355 439.998 L 4.355 527.388 L 77.179 527.388 L 4.355 439.998 Z' },
  { tone: 'secondary', d: 'M 77.180 352.608 L 22.561 352.608 L 22.561 287.065 L 77.180 352.608 Z' },
  { tone: 'primary', d: 'M 4.355 439.998 L 77.179 439.998 L 77.179 352.609 L 4.355 439.998 Z' },
  { tone: 'secondary', d: 'M 77.180 439.998 L 131.800 439.998 L 131.800 374.455 L 77.180 439.998 Z' },
  { tone: 'primary', d: 'M 150.005 352.608 L 77.181 352.608 L 77.181 265.219 L 150.005 352.608 Z' },
  { tone: 'primary', d: 'M 368.481 441.121 L 368.481 528.511 L 295.656 528.511 L 368.481 441.121 Z' },
  { tone: 'primary', d: 'M 368.481 265.806 L 313.862 265.806 L 313.862 331.349 L 368.481 265.806 Z' },
  { tone: 'primary', d: 'M 295.656 353.197 L 368.480 353.197 L 368.480 440.586 L 295.656 353.197 Z' },
]

const variantClasses: Record<RioGeometricPatternVariant, string> = {
  corner: 'absolute bottom-0 right-0 h-2/3 min-h-40 w-2/3 min-w-56',
  full: 'absolute inset-0 h-full w-full',
  strip: 'absolute inset-y-0 right-0 h-full w-1/2 min-w-64',
}

const preserveAspectRatioByFit: Record<RioGeometricPatternFit, string> = {
  contain: 'meet',
  cover: 'slice',
}

const preserveAspectRatioByAlign: Record<RioGeometricPatternAlign, string> = {
  center: 'xMidYMid',
  left: 'xMinYMid',
  right: 'xMaxYMid',
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function resolvePalette({
  backgroundColor,
  palette,
  primaryColor,
  secondaryColor,
}: Pick<RioGeometricPatternProps, 'backgroundColor' | 'palette' | 'primaryColor' | 'secondaryColor'>): RioGeometricPatternPalette {
  return {
    background: backgroundColor ?? palette?.background ?? rioDefaultPalette.background,
    primary: primaryColor ?? palette?.primary ?? rioDefaultPalette.primary,
    secondary: secondaryColor ?? palette?.secondary ?? rioDefaultPalette.secondary,
  }
}

function getFadeStyle(direction: 'left' | 'right', background: string) {
  const angle = direction === 'left' ? '90deg' : '270deg'

  return {
    background: `linear-gradient(${angle}, ${background} 0%, ${background} 28%, transparent 100%)`,
  }
}

function renderFade(fade: RioGeometricPatternFade, background: string) {
  if (fade === 'none') {
    return null
  }

  return (
    <>
      {(fade === 'left' || fade === 'both') && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24" style={getFadeStyle('left', background)} />
      )}
      {(fade === 'right' || fade === 'both') && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24" style={getFadeStyle('right', background)} />
      )}
    </>
  )
}

export function RioGeometricPattern({
  align = 'right',
  ariaLabel = 'Padrao geometrico institucional',
  backgroundColor,
  className,
  decorative = true,
  fade = 'none',
  fit = 'cover',
  opacity = 1,
  palette,
  primaryColor,
  secondaryColor,
  style,
  variant = 'full',
}: RioGeometricPatternProps) {
  const resolvedPalette = resolvePalette({ backgroundColor, palette, primaryColor, secondaryColor })
  const preserveAspectRatio = `${preserveAspectRatioByAlign[align]} ${preserveAspectRatioByFit[fit]}`

  return (
    <div
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : ariaLabel}
      className={cx('pointer-events-none relative overflow-hidden', className)}
      role={decorative ? undefined : 'img'}
      style={{ backgroundColor: resolvedPalette.background, opacity, ...style }}
    >
      <svg
        className={variantClasses[variant]}
        preserveAspectRatio={preserveAspectRatio}
        viewBox="0 0 792.734 368.481"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0 368.481) rotate(-90)">
          <rect fill={resolvedPalette.background} height="792.734" width="368.481" />
          {patternPaths.map((path) => (
            <path d={path.d} fill={resolvedPalette[path.tone]} key={path.d} />
          ))}
        </g>
      </svg>
      {renderFade(fade, resolvedPalette.background)}
    </div>
  )
}
