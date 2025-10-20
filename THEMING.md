# Guia de Temas - @subg-riosaude/subg-components

Este documento explica como usar e customizar os temas dos componentes.

## 📦 Importação Básica

### Opção 1: Tema Padrão (Recomendado)

Importe o CSS no arquivo principal da sua aplicação (`src/main.tsx`):

```typescript
import '@subg-riosaude/subg-components/styles'
```

Este tema usa cores neutras que funcionam bem em qualquer aplicação.

### Opção 2: Tema Blue (CAC)

Para usar o tema azul customizado do sistema CAC:

```typescript
import '@subg-riosaude/subg-components/themes/blue'
```

**Características:**
- Fundo da sidebar: Cinza escuro (#666 / `oklch(0.404 0.017 264.376)`)
- Cor de destaque: Azul vibrante (#43B9EB / `oklch(0.709 0.142 213.68)`)
- Efeito hover: Glass transparente

## 🎨 Customização de Cores

### Método 1: Sobrescrever Variáveis CSS

Importe o tema base e sobrescreva as variáveis no seu `index.css`:

```css
/* src/index.css */
@import "tailwindcss";
@import "@subg-riosaude/subg-components/styles";

/* Customizações */
:root {
  --sidebar-background: 0 0% 40%;           /* Fundo cinza */
  --sidebar-foreground: 0 0% 100%;          /* Texto branco */
  --sidebar-primary: 199 79% 59%;           /* Azul #43B9EB */
  --sidebar-primary-foreground: 0 0% 100%;  /* Texto branco em itens ativos */
  --sidebar-accent: 0 0% 100% / 0.1;        /* Hover transparente */
  --sidebar-accent-foreground: 199 79% 59%; /* Texto azul em hover */
  --sidebar-border: 0 0% 50%;               /* Borda escura */
  --sidebar-ring: 199 79% 59%;              /* Anel de foco azul */
}
```

### Método 2: Criar Tema Customizado

Crie um arquivo de tema no seu projeto:

```css
/* src/themes/meu-tema.css */
:root {
  /* Suas variáveis customizadas aqui */
  --sidebar-background: 220 30% 20%;  /* Azul escuro */
  --sidebar-primary: 340 80% 50%;     /* Rosa */
  /* ... */
}
```

E importe no lugar do tema padrão:

```typescript
// src/main.tsx
import './themes/meu-tema.css'
```

## 📐 Variáveis Disponíveis

Todas as variáveis usam formato **HSL** (Hue Saturation Lightness):

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `--sidebar-background` | Cor de fundo da sidebar | `0 0% 98%` |
| `--sidebar-foreground` | Cor do texto principal | `240 5.3% 26.1%` |
| `--sidebar-primary` | Cor primária (itens ativos) | `240 5.9% 10%` |
| `--sidebar-primary-foreground` | Texto em itens ativos | `0 0% 98%` |
| `--sidebar-accent` | Cor de hover/foco | `240 4.8% 95.9%` |
| `--sidebar-accent-foreground` | Texto em hover | `240 5.9% 10%` |
| `--sidebar-border` | Cor das bordas | `220 13% 91%` |
| `--sidebar-ring` | Anel de foco (acessibilidade) | `217.2 91.2% 59.8%` |

### Como funcionam os valores HSL

Os valores são escritos sem o `hsl()` wrapper, apenas os números:

```css
/* ❌ Errado */
--sidebar-primary: hsl(199deg 79% 59%);

/* ✅ Correto */
--sidebar-primary: 199 79% 59%;
```

**Formato:** `[Hue] [Saturation%] [Lightness%] [/ Opacity]`

- **Hue (Matiz)**: 0-360 (vermelho=0, verde=120, azul=240)
- **Saturation (Saturação)**: 0-100% (0%=cinza, 100%=cor vibrante)
- **Lightness (Luminosidade)**: 0-100% (0%=preto, 50%=cor pura, 100%=branco)
- **Opacity (Opacidade)**: Opcional, 0-1 (ex: `/ 0.5` para 50% transparente)

### Exemplos de Cores

```css
/* Cinza neutro */
--sidebar-background: 0 0% 50%;

/* Azul vibrante (#43B9EB) */
--sidebar-primary: 199 79% 59%;

/* Verde escuro */
--sidebar-background: 120 40% 30%;

/* Roxo com transparência */
--sidebar-accent: 270 60% 50% / 0.2;
```

## 🌗 Suporte a Dark Mode

Ambos os temas (default e blue) incluem variantes para dark mode:

```css
:root {
  /* Tema claro */
  --sidebar-background: 0 0% 98%;
}

.dark {
  /* Tema escuro */
  --sidebar-background: 240 5.9% 10%;
}
```

Para ativar o dark mode, adicione a classe `.dark` ao elemento raiz:

```typescript
// Com next-themes ou similar
<html className={theme === 'dark' ? 'dark' : ''}>
```

## 🎯 Exemplos Práticos

### Tema Corporativo Azul

```css
:root {
  --sidebar-background: 210 40% 25%;      /* Azul escuro corporativo */
  --sidebar-foreground: 0 0% 100%;        /* Texto branco */
  --sidebar-primary: 210 80% 60%;         /* Azul médio */
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 0 0% 100% / 0.1;
  --sidebar-accent-foreground: 210 80% 70%;
  --sidebar-border: 210 40% 35%;
  --sidebar-ring: 210 80% 60%;
}
```

### Tema Minimalista Claro

```css
:root {
  --sidebar-background: 0 0% 100%;        /* Branco puro */
  --sidebar-foreground: 0 0% 20%;         /* Cinza escuro */
  --sidebar-primary: 0 0% 10%;            /* Preto quase */
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 0 0% 95%;             /* Cinza clarinho */
  --sidebar-accent-foreground: 0 0% 10%;
  --sidebar-border: 0 0% 90%;
  --sidebar-ring: 0 0% 50%;
}
```

### Tema Verde Saúde

```css
:root {
  --sidebar-background: 150 30% 25%;      /* Verde escuro */
  --sidebar-foreground: 0 0% 100%;
  --sidebar-primary: 150 60% 50%;         /* Verde vibrante */
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 0 0% 100% / 0.15;
  --sidebar-accent-foreground: 150 60% 60%;
  --sidebar-border: 150 30% 35%;
  --sidebar-ring: 150 60% 50%;
}
```

## 🔧 Converter Cores HEX para HSL

Para usar cores hexadecimais, converta para HSL primeiro:

**Ferramentas:**
- https://oklch.com/ (converte para OKLCH, mais moderno)
- https://www.cssportal.com/hex-to-hsl/ (converte para HSL)

**Exemplo:** #43B9EB (azul CAC)
- HEX: `#43B9EB`
- HSL: `hsl(199deg 79% 59%)`
- Variável CSS: `199 79% 59%`

## 📝 Notas Importantes

1. **TailwindCSS v4**: Se você usa TailwindCSS v4, as cores já são mapeadas automaticamente via `@theme inline`
2. **TailwindCSS v3**: Configure as cores no `tailwind.config.js` (veja README principal)
3. **Consistência**: Use o mesmo formato de cor em todo o tema (não misture HSL com OKLCH)
4. **Acessibilidade**: Mantenha contraste suficiente entre `background` e `foreground` (mínimo 4.5:1)

## 🆘 Problemas Comuns

### Cores não aparecem

**Solução:** Certifique-se de importar o CSS:
```typescript
import '@subg-riosaude/subg-components/styles'
```

### Cores erradas no dark mode

**Solução:** Verifique se a classe `.dark` está sendo aplicada ao elemento HTML:
```html
<html class="dark">
```

### Variáveis não funcionam

**Solução:** Use o formato correto sem `hsl()`:
```css
/* ❌ Errado */
--sidebar-primary: hsl(199, 79%, 59%);

/* ✅ Correto */
--sidebar-primary: 199 79% 59%;
```

## 📚 Recursos

- [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [CSS HSL Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)
- [OKLCH Color Picker](https://oklch.com/)
