import type { LoginBrandConfig } from '../types'

const slashColors = [
  'rgba(65,183,230,0.94)',
  'rgba(255,255,255,0.92)',
  'rgba(18,54,95,0.88)',
] as const

const slashOpacities = [0.9, 0.76, 0.62] as const

const slashes = Array.from({ length: 44 }, (_, index) => {
  let rotation = 0

  if (index % 11 === 0) rotation = 270
  else if (index % 7 === 0) rotation = 180
  else if (index % 5 === 0) rotation = 90

  return {
    color: slashColors[index % slashColors.length],
    opacity: slashOpacities[index % slashOpacities.length],
    rotation,
  }
})

interface BrandPanelProps {
  brand: LoginBrandConfig
}

export function BrandPanel({ brand }: BrandPanelProps) {
  return (
    <section className="relative flex min-h-[420px] flex-col overflow-hidden bg-[#113052] px-6 py-10 text-white lg:min-h-screen lg:px-10 lg:py-12 lg:pr-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-28 overflow-hidden bg-white/[0.065] lg:grid lg:grid-cols-2 lg:content-center"
      >
        {slashes.map(({ color, opacity, rotation }, index) => (
          <span
            key={`${color}-${index}`}
            className="h-14 w-14"
            style={{
              background: `linear-gradient(135deg, transparent 50%, ${color} 50%)`,
              opacity,
              transform: `rotate(${rotation}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex flex-1 items-center">
          <div className="max-w-[520px]">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#e6f7ff]">
              {brand.eyebrow}
            </p>
            <h1 className="mb-7 text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {brand.productName}
            </h1>
            <p className="hidden max-w-[510px] text-lg leading-[1.7] text-white/70 sm:block">
              {brand.description}
            </p>
          </div>
        </div>

        <div>
          {brand.metrics.length > 0 && (
            <div className="mb-5 hidden gap-4 sm:grid sm:grid-cols-3">
              {brand.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/[0.12] bg-white/[0.075] p-5 backdrop-blur"
                >
                  <strong className="block text-2xl font-black tracking-normal">
                    {metric.label}
                  </strong>
                  <small className="mt-1.5 block text-[10px] font-black uppercase tracking-[0.08em] text-white/[0.52]">
                    {metric.description}
                  </small>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-6">
            <div className="flex items-center gap-5">
              {brand.logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-9 w-auto brightness-0 invert opacity-85"
                />
              ))}
            </div>
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-[#e6f7ff]">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#41b7e6] shadow-[0_0_0_4px_rgba(65,183,230,0.16)]" />
              {brand.onlineLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
