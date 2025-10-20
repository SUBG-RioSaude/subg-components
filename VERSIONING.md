# Guia de Versionamento

Este guia explica como configurar e usar o sistema de versionamento automático incluído no pacote `@subg-riosaide/subg-components`.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Configuração Básica](#configuração-básica)
- [Integração com CI/CD](#integração-com-cicd)
- [Funções Disponíveis](#funções-disponíveis)
- [Exemplos de Uso](#exemplos-de-uso)

## 🎯 Visão Geral

O sistema de versionamento fornece:

- **Versão semântica** (MAJOR.MINOR.PATCH)
- **Commit SHA** do build
- **Número do build** do CI/CD
- **Timestamp** do build
- **Ambiente** (production, staging, development)
- **Formatação automática** baseada no ambiente

### Formatos de Versão

| Ambiente | Formato | Exemplo |
|----------|---------|---------|
| **Production** | `MAJOR.MINOR.PATCH` | `1.0.0` |
| **Staging** | `MAJOR.MINOR.PATCH-staging.BUILD` | `1.0.0-staging.42` |
| **Development** | `MAJOR.MINOR.PATCH-dev` | `1.0.0-dev` |

## ⚙️ Configuração Básica

### 1. Declarar Variáveis Globais

Crie ou edite o arquivo `vite-env.d.ts` na raiz do seu projeto:

```typescript
/// <reference types="vite/client" />

// Variáveis injetadas em build time
declare const __APP_VERSION__: string
declare const __COMMIT_SHA__: string
declare const __BUILD_NUMBER__: string
declare const __BUILD_TIMESTAMP__: string
declare const __APP_ENVIRONMENT__: string
```

### 2. Configurar Vite

Edite seu `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    // Versão do package.json
    __APP_VERSION__: JSON.stringify(
      process.env.npm_package_version || '0.0.0'
    ),

    // Commit SHA (curto - 7 caracteres)
    __COMMIT_SHA__: JSON.stringify(
      process.env.VITE_COMMIT_SHA ||
      process.env.GITHUB_SHA?.substring(0, 7) ||
      'dev'
    ),

    // Número do build do CI
    __BUILD_NUMBER__: JSON.stringify(
      process.env.VITE_BUILD_NUMBER ||
      process.env.GITHUB_RUN_NUMBER ||
      '0'
    ),

    // Timestamp do build (YYYY-MM-DD)
    __BUILD_TIMESTAMP__: JSON.stringify(
      new Date().toISOString().split('T')[0]
    ),

    // Ambiente (production, staging, development)
    __APP_ENVIRONMENT__: JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
  },
})
```

### 3. Usar no Código

```typescript
import {
  obterVersaoApp,
  obterMetadataVersao,
  obterVersaoCompleta,
} from '@subg-riosaide/subg-components'

// Versão formatada
console.log(obterVersaoApp())
// Produção: "1.0.0"
// Staging: "1.0.0-staging.42"
// Dev: "1.0.0-dev"

// Versão completa com metadata
console.log(obterVersaoCompleta())
// "1.0.0+a1b2c3d (Build #42, 2025-10-20)"

// Todos os metadados
const metadata = obterMetadataVersao()
console.log(metadata)
// {
//   versao: "1.0.0",
//   commitSha: "a1b2c3d",
//   buildNumber: "42",
//   buildTimestamp: "2025-10-20",
//   ambiente: "production"
// }
```

## 🚀 Integração com CI/CD

### GitHub Actions

Crie `.github/workflows/build.yml`:

```yaml
name: Build e Deploy

on:
  push:
    branches: [main, staging, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build
        env:
          # Injeta variáveis de ambiente do GitHub
          VITE_COMMIT_SHA: ${{ github.sha }}
          VITE_BUILD_NUMBER: ${{ github.run_number }}
          NODE_ENV: ${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}

      - name: Deploy
        run: |
          # Seus comandos de deploy aqui
          echo "Deploy para ${{ github.ref == 'refs/heads/main' && 'produção' || 'staging' }}"
```

### GitLab CI

Crie `.gitlab-ci.yml`:

```yaml
stages:
  - build
  - deploy

variables:
  NODE_VERSION: "20"

build:
  stage: build
  image: node:${NODE_VERSION}
  before_script:
    - npm install -g pnpm
    - pnpm install
  script:
    - export VITE_COMMIT_SHA="${CI_COMMIT_SHORT_SHA}"
    - export VITE_BUILD_NUMBER="${CI_PIPELINE_IID}"
    - export NODE_ENV="${CI_COMMIT_BRANCH == 'main' ? 'production' : 'staging'}"
    - pnpm build
  artifacts:
    paths:
      - dist/
    expire_in: 1 week

deploy_production:
  stage: deploy
  only:
    - main
  script:
    - echo "Deploy para produção"
    # Seus comandos de deploy aqui

deploy_staging:
  stage: deploy
  only:
    - staging
  script:
    - echo "Deploy para staging"
    # Seus comandos de deploy aqui
```

### Jenkins

Crie `Jenkinsfile`:

```groovy
pipeline {
  agent any

  environment {
    NODE_VERSION = '20'
    VITE_COMMIT_SHA = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
    VITE_BUILD_NUMBER = "${env.BUILD_NUMBER}"
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install -g pnpm'
        sh 'pnpm install'
      }
    }

    stage('Build') {
      steps {
        script {
          def nodeEnv = env.BRANCH_NAME == 'main' ? 'production' : 'staging'
          sh "NODE_ENV=${nodeEnv} pnpm build"
        }
      }
    }

    stage('Deploy') {
      when {
        anyOf {
          branch 'main'
          branch 'staging'
        }
      }
      steps {
        echo "Deploy para ${env.BRANCH_NAME}"
        // Seus comandos de deploy aqui
      }
    }
  }
}
```

## 📖 Funções Disponíveis

### `obterVersaoBase()`

Retorna a versão base do `package.json`.

```typescript
const versao = obterVersaoBase()
// "1.0.0"
```

### `obterCommitSha()`

Retorna o SHA curto do commit (7 caracteres).

```typescript
const sha = obterCommitSha()
// "a1b2c3d" ou "dev" em desenvolvimento
```

### `obterBuildNumber()`

Retorna o número do build do CI/CD.

```typescript
const buildNum = obterBuildNumber()
// "42" ou "0" em desenvolvimento
```

### `obterBuildTimestamp()`

Retorna a data do build no formato `YYYY-MM-DD`.

```typescript
const timestamp = obterBuildTimestamp()
// "2025-10-20"
```

### `obterAmbiente()`

Retorna o ambiente atual.

```typescript
const ambiente = obterAmbiente()
// "production", "staging" ou "development"
```

### `obterVersaoApp()`

Retorna a versão formatada baseada no ambiente.

```typescript
const versao = obterVersaoApp()
// Produção: "1.0.0"
// Staging: "1.0.0-staging.42"
// Dev: "1.0.0-dev"
```

### `obterVersaoCompleta()`

Retorna a versão completa com todos os metadados.

```typescript
const versaoCompleta = obterVersaoCompleta()
// "1.0.0+a1b2c3d (Build #42, 2025-10-20)"
```

### `obterMetadataVersao()`

Retorna objeto com todos os metadados.

```typescript
const metadata = obterMetadataVersao()
// {
//   versao: "1.0.0",
//   commitSha: "a1b2c3d",
//   buildNumber: "42",
//   buildTimestamp: "2025-10-20",
//   ambiente: "production"
// }
```

### `obterAnoAtual()`

Retorna o ano atual para copyright.

```typescript
const ano = obterAnoAtual()
// 2025
```

## 💡 Exemplos de Uso

### Exibir Versão no Footer

```tsx
import { obterVersaoApp } from '@subg-riosaide/subg-components'

function Footer() {
  return (
    <footer>
      <p>© 2025 Minha Empresa - v{obterVersaoApp()}</p>
    </footer>
  )
}
```

### Página "Sobre" com Build Info

```tsx
import { obterMetadataVersao } from '@subg-riosaide/subg-components'

function AboutPage() {
  const metadata = obterMetadataVersao()

  return (
    <div>
      <h1>Sobre o Sistema</h1>
      <dl>
        <dt>Versão:</dt>
        <dd>{metadata.versao}</dd>

        <dt>Ambiente:</dt>
        <dd>{metadata.ambiente}</dd>

        <dt>Build:</dt>
        <dd>#{metadata.buildNumber}</dd>

        <dt>Commit:</dt>
        <dd>{metadata.commitSha}</dd>

        <dt>Data do Build:</dt>
        <dd>{metadata.buildTimestamp}</dd>
      </dl>
    </div>
  )
}
```

### Tooltip com Build Info

```tsx
import { obterMetadataVersao, obterVersaoApp } from '@subg-riosaide/subg-components'
import { Tooltip } from '@subg-riosaide/subg-components'

function VersionBadge() {
  const versao = obterVersaoApp()
  const metadata = obterMetadataVersao()

  return (
    <Tooltip
      content={
        <div>
          <p>Build #{metadata.buildNumber}</p>
          <p>Commit: {metadata.commitSha}</p>
          <p>Data: {metadata.buildTimestamp}</p>
        </div>
      }
    >
      <span>v{versao}</span>
    </Tooltip>
  )
}
```

### Logging de Deploy

```typescript
import { obterMetadataVersao } from '@subg-riosaide/subg-components'

// No início da aplicação
const metadata = obterMetadataVersao()

console.log('='.repeat(50))
console.log('🚀 Aplicação Iniciada')
console.log('='.repeat(50))
console.log(`Versão: ${metadata.versao}`)
console.log(`Ambiente: ${metadata.ambiente}`)
console.log(`Build: #${metadata.buildNumber}`)
console.log(`Commit: ${metadata.commitSha}`)
console.log(`Data: ${metadata.buildTimestamp}`)
console.log('='.repeat(50))
```

## 🔧 Configurações Avançadas

### Múltiplos Ambientes

```typescript
// vite.config.ts
const getEnvironment = () => {
  if (process.env.NODE_ENV === 'production') return 'production'
  if (process.env.VITE_ENVIRONMENT === 'staging') return 'staging'
  if (process.env.VITE_ENVIRONMENT === 'qa') return 'qa'
  return 'development'
}

export default defineConfig({
  define: {
    __APP_ENVIRONMENT__: JSON.stringify(getEnvironment()),
    // ... outras variáveis
  },
})
```

### Build Local com Metadata Fake

Para testar localmente com metadata:

```bash
# Bash/Linux/Mac
VITE_COMMIT_SHA=abc1234 VITE_BUILD_NUMBER=999 pnpm build

# PowerShell (Windows)
$env:VITE_COMMIT_SHA="abc1234"; $env:VITE_BUILD_NUMBER="999"; pnpm build
```

### Scripts no package.json

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "build:staging": "NODE_ENV=staging vite build",
    "build:prod": "NODE_ENV=production vite build",
    "build:local": "VITE_COMMIT_SHA=local VITE_BUILD_NUMBER=0 vite build"
  }
}
```

## 📝 Notas

- As variáveis são injetadas em **build time**, não runtime
- Em desenvolvimento, valores padrão são usados (`dev`, `0`, etc.)
- O SHA do commit deve ter 7 caracteres (use `.substring(0, 7)`)
- O timestamp é sempre no formato ISO `YYYY-MM-DD`

## 🐛 Troubleshooting

### Variáveis retornam valores padrão

Certifique-se de:
1. Declarar as variáveis em `vite-env.d.ts`
2. Configurar `define` no `vite.config.ts`
3. Fazer build (não funciona com `vite dev`)

### Erro "Cannot find name '__APP_VERSION__'"

Execute:
```bash
pnpm build
```

As variáveis só existem após o build.

### CI/CD não injeta variáveis

Verifique se as variáveis de ambiente estão corretas:
- GitHub Actions: `${{ github.sha }}`, `${{ github.run_number }}`
- GitLab CI: `${CI_COMMIT_SHORT_SHA}`, `${CI_PIPELINE_IID}`
- Jenkins: `${env.GIT_COMMIT}`, `${env.BUILD_NUMBER}`

## 📚 Recursos Adicionais

- [Semantic Versioning](https://semver.org/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub Actions Context](https://docs.github.com/en/actions/learn-github-actions/contexts)
- [GitLab CI Variables](https://docs.gitlab.com/ee/ci/variables/)
