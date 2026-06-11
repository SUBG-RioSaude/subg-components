# Formas geométricas Rio

Branch isolada para o componente reutilizável `RioGeometricPattern`.

Esta branch não replica o conteúdo da `main` nem da branch `login-institucional`. Ela mantém apenas os arquivos necessários para revisar, copiar e evoluir o padrão geométrico institucional como componente React com Tailwind.

## Objetivo

Criar um componente visual reutilizável para usar o padrão geométrico do Rio em telas, cards, headers, painéis institucionais e fundos decorativos.

O componente cuida de:

- renderizar o padrão como SVG inline;
- permitir troca de cores por props;
- oferecer presets de paleta;
- controlar encaixe, alinhamento, opacidade e variações de layout;
- aplicar fade lateral quando o padrão precisa se misturar ao fundo;
- manter acessibilidade simples para uso decorativo ou informativo.

O componente não cuida de:

- layout completo de página;
- tema global da aplicação;
- carregamento de assets externos;
- CSS dedicado;
- regra de negócio do sistema consumidor.

Cada sistema consumidor decide onde posicionar o componente e passa as cores adequadas para sua identidade visual.

## Estrutura

```txt
src/
  components/
    RioGeometricPattern.tsx
  config/
    rioPatternPresets.ts
  index.ts
  types.ts
tests/
  rio-geometric-pattern.contract.tsx
```

## Instalação local

```bash
pnpm install
pnpm typecheck
pnpm build
```

## Uso básico

```tsx
import { RioGeometricPattern } from '@subg-dev/rio-geometric-pattern'

export function HeaderVisual() {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg bg-white">
      <RioGeometricPattern className="absolute inset-0" />
    </div>
  )
}
```

## Troca de cores

Use `primaryColor`, `secondaryColor` e `backgroundColor` quando quiser trocar cores pontuais.

```tsx
<RioGeometricPattern
  className="absolute inset-0"
  backgroundColor="#F6FAFC"
  primaryColor="#00A3E0"
  secondaryColor="#173B63"
/>
```

Use `palette` quando quiser centralizar a combinação de cores.

```tsx
import { RioGeometricPattern, rioDefaultPalette } from '@subg-dev/rio-geometric-pattern'

<RioGeometricPattern
  className="absolute inset-0"
  palette={{
    ...rioDefaultPalette,
    primary: '#36C5F0',
  }}
/>
```

## Presets disponíveis

```tsx
import {
  RioGeometricPattern,
  rioDefaultPalette,
  rioNightPalette,
  rioSoftPalette,
} from '@subg-dev/rio-geometric-pattern'

<RioGeometricPattern palette={rioDefaultPalette} />
<RioGeometricPattern palette={rioNightPalette} />
<RioGeometricPattern palette={rioSoftPalette} />
```

## Variações de layout

### Fundo completo

```tsx
<RioGeometricPattern className="absolute inset-0" variant="full" />
```

### Faixa lateral

```tsx
<RioGeometricPattern
  className="absolute inset-0"
  variant="strip"
  align="right"
  fade="left"
/>
```

### Detalhe de canto

```tsx
<RioGeometricPattern
  className="absolute inset-0"
  variant="corner"
  opacity={0.8}
/>
```

## Props principais

```ts
type RioGeometricPatternProps = {
  className?: string
  style?: React.CSSProperties
  palette?: Partial<RioGeometricPatternPalette>
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  opacity?: number
  fit?: 'cover' | 'contain'
  align?: 'left' | 'center' | 'right'
  fade?: 'none' | 'left' | 'right' | 'both'
  variant?: 'full' | 'strip' | 'corner'
  decorative?: boolean
  ariaLabel?: string
}
```

## Acessibilidade

Por padrão, o componente é decorativo:

```tsx
<RioGeometricPattern />
```

Isso aplica `aria-hidden`.

Se o padrão fizer parte do conteúdo visual relevante da tela, use:

```tsx
<RioGeometricPattern
  decorative={false}
  ariaLabel="Padrão geométrico institucional da Prefeitura do Rio"
/>
```

## Regra de Tailwind

O componente usa Tailwind diretamente na marcação e estilos inline apenas para valores que precisam ser dinâmicos, como cores e gradientes.

Não criar CSS dedicado para este componente.

Evite classes Tailwind dinâmicas:

```tsx
// Evitar
const className = `bg-${color}-600`
```

Prefira mapas com classes completas:

```tsx
const variantClasses = {
  full: 'absolute inset-0 h-full w-full',
  strip: 'absolute inset-y-0 right-0 h-full w-1/2 min-w-64',
  corner: 'absolute bottom-0 right-0 h-2/3 min-h-40 w-2/3 min-w-56',
}
```

## Recomendações de uso

Use como detalhe visual, não como elemento dominante em telas operacionais densas.

Para cards administrativos, prefira `variant="corner"` ou `variant="strip"` com `opacity` reduzida.

Para headers, capas e páginas institucionais, `variant="full"` funciona melhor quando há contraste suficiente entre texto e fundo.
