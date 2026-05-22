# Login institucional SUBG

Branch experimental para o componente de login institucional reutilizável da SUBG.

Esta branch não replica o conteúdo da `main`. Ela isola a proposta do login com os arquivos necessários para implementação, revisão e evolução do componente.

## Objetivo

Criar uma tela de login reutilizável em React com Tailwind, organizada em componentes pequenos e sem acoplamento com autenticação específica.

O componente cuida de:

- layout institucional;
- painel de marca;
- card de autenticação;
- botão de entrada com Google;
- estados de sessão;
- textos e marca configuráveis.

O componente não cuida de:

- Firebase;
- backend;
- React Router;
- permissões;
- chamadas HTTP;
- redirecionamento após login.

Cada sistema consumidor cria um adapter local para conectar seu fluxo real de autenticação.

## Estrutura

```txt
src/
  index.ts
  components/
    LoginScreen.tsx
    BrandPanel.tsx
    LoginCard.tsx
    LoginStatusView.tsx
    GoogleButton.tsx
  config/
    defaultBrand.ts
  types.ts
```

## Função de cada arquivo

### `src/index.ts`

Exporta a API pública do pacote.

É por aqui que outros sistemas importam o componente, os tipos e a configuração padrão.

### `src/types.ts`

Define o contrato público do login.

Contém os tipos de status, ações, marca, textos e props.

### `src/config/defaultBrand.ts`

Guarda a marca e os textos padrão.

Pode ser sobrescrito pelo sistema consumidor usando as props `brand` e `copy`.

### `src/components/LoginScreen.tsx`

Componente principal.

Monta a tela completa e combina o painel institucional com o card de login.

### `src/components/BrandPanel.tsx`

Painel institucional da esquerda.

Renderiza título, descrição, métricas, logos e status visual do sistema.

### `src/components/LoginCard.tsx`

Card da direita.

Organiza a superfície visual de autenticação e delega os estados para `LoginStatusView`.

### `src/components/LoginStatusView.tsx`

Renderiza os estados do fluxo:

- `signedOut`;
- `loading`;
- `pending`;
- `inactive`;
- `error`;
- `authenticated`.

O estado `authenticated` retorna `null`, porque o redirecionamento pertence ao sistema consumidor.

### `src/components/GoogleButton.tsx`

Botão de entrada com Google.

Mantém ícone, loading, disabled e texto isolados.

## Instalação local

```bash
pnpm install
pnpm build
```

## Uso básico

```tsx
import { LoginScreen } from '@subg-dev/subg-components'

export function LoginPage() {
  return (
    <LoginScreen
      status="signedOut"
      actions={{
        signInWithGoogle: () => {
          console.log('Entrar com Google')
        },
      }}
    />
  )
}
```

## Uso com adapter de autenticação

Exemplo adaptando um fluxo com Firebase e React Router:

```tsx
import { Navigate, useLocation } from 'react-router-dom'
import { LoginScreen, type LoginStatus } from '@subg-dev/subg-components'
import { entrarComGoogle, sair } from '@/lib/firebase/firebase-auth'
import { useAuth } from '@/features/auth/auth-hooks'

function mapAuthStatus(status: string): LoginStatus {
  const statusMap: Record<string, LoginStatus> = {
    deslogado: 'signedOut',
    carregando: 'loading',
    pendente: 'pending',
    inativo: 'inactive',
    erro: 'error',
    ativo: 'authenticated',
  }

  return statusMap[status] ?? 'loading'
}

export function LoginPage() {
  const auth = useAuth()
  const location = useLocation()
  const origem = (location.state as { from?: { pathname: string } } | null)?.from
  const destino = origem?.pathname ?? '/agenda'
  const status = mapAuthStatus(auth.status)

  if (status === 'authenticated') {
    return <Navigate to={destino} replace />
  }

  return (
    <LoginScreen
      status={status}
      errorMessage={auth.erro}
      signingIn={auth.status === 'carregando'}
      actions={{
        signInWithGoogle: entrarComGoogle,
        signOut: sair,
        checkApproval: () => auth.revalidarSessao(auth.usuario, { silencioso: true }),
      }}
    />
  )
}
```

## Customização de marca

```tsx
import { LoginScreen } from '@subg-dev/subg-components'

export function LoginPage() {
  return (
    <LoginScreen
      status="signedOut"
      brand={{
        eyebrow: 'Sistema Interno',
        productName: 'Portal de Gestão',
        organizationName: 'SUBG',
        description: 'Acesso institucional para sistemas internos.',
        logos: [
          { src: '/logo-prefeitura.png', alt: 'Prefeitura do Rio' },
        ],
        metrics: [
          { label: 'Serviços', description: 'Operação integrada' },
          { label: 'Usuários', description: 'Acesso institucional' },
          { label: 'Gestão', description: 'Fluxos centralizados' },
        ],
      }}
      actions={{
        signInWithGoogle: () => Promise.resolve(),
      }}
    />
  )
}
```

## Customização de textos

```tsx
<LoginScreen
  status="pending"
  copy={{
    pendingTitle: 'Cadastro em análise',
    pendingDescription:
      'Seu acesso foi solicitado e aguarda liberação da administração.',
    checkApprovalLabel: 'Atualizar situação',
  }}
  actions={{
    signInWithGoogle: entrarComGoogle,
    checkApproval: verificarAprovacao,
  }}
/>
```

## Regra de Tailwind

O componente usa Tailwind diretamente nos componentes.

Não criar CSS dedicado para o login.

Evite classes dinâmicas:

```tsx
// Evitar
const className = `bg-${color}-600`
```

Use mapas com classes completas:

```tsx
const toneClasses = {
  default: 'bg-[#113052] text-white',
  warning: 'bg-amber-50 text-amber-800',
  danger: 'bg-red-50 text-red-800',
}
```

## Checklist para implementação no SMSAgenda

1. Instalar ou copiar os arquivos desta branch.
2. Substituir a página atual de login por um adapter fino.
3. Mapear os status do `useAuth` para `LoginStatus`.
4. Passar `entrarComGoogle`, `sair` e `revalidarSessao` via `actions`.
5. Manter redirecionamento no sistema consumidor.
6. Validar com build e teste visual da tela.

## Scripts

```bash
pnpm typecheck
pnpm build
```
