import {
  RioGeometricPattern,
  rioDefaultPalette,
  rioNightPalette,
  type RioGeometricPatternProps,
} from '../src'

export function RioGeometricPatternContract() {
  const props: RioGeometricPatternProps = {
    align: 'right',
    decorative: true,
    fade: 'both',
    fit: 'cover',
    opacity: 0.72,
    palette: {
      background: '#ffffff',
      primary: '#42B9EB',
      secondary: '#13335A',
    },
    variant: 'corner',
  }

  return (
    <div>
      <RioGeometricPattern {...props} />
      <RioGeometricPattern palette={rioDefaultPalette} variant="strip" />
      <RioGeometricPattern palette={rioNightPalette} variant="full" />
    </div>
  )
}
