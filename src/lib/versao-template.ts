/**
 * Template de Sistema de Versionamento
 *
 * Este arquivo fornece um template para implementar versionamento dinâmico
 * no seu projeto. As variáveis são injetadas em build time via vite.config.ts.
 *
 * COMO USAR:
 *
 * 1. No seu vite.config.ts, adicione:
 *
 * ```typescript
 * import { defineConfig } from 'vite'
 *
 * export default defineConfig({
 *   define: {
 *     __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '0.0.0'),
 *     __COMMIT_SHA__: JSON.stringify(process.env.VITE_COMMIT_SHA || 'dev'),
 *     __BUILD_NUMBER__: JSON.stringify(process.env.VITE_BUILD_NUMBER || '0'),
 *     __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString().split('T')[0]),
 *     __APP_ENVIRONMENT__: JSON.stringify(process.env.NODE_ENV || 'development'),
 *   }
 * })
 * ```
 *
 * 2. No seu vite-env.d.ts, adicione as declarações:
 *
 * ```typescript
 * declare const __APP_VERSION__: string
 * declare const __COMMIT_SHA__: string
 * declare const __BUILD_NUMBER__: string
 * declare const __BUILD_TIMESTAMP__: string
 * declare const __APP_ENVIRONMENT__: string
 * ```
 *
 * 3. Para CI/CD (GitHub Actions exemplo):
 *
 * ```yaml
 * - name: Build
 *   run: pnpm build
 *   env:
 *     VITE_COMMIT_SHA: ${{ github.sha }}
 *     VITE_BUILD_NUMBER: ${{ github.run_number }}
 * ```
 */

export interface VersaoMetadata {
  versao: string
  commitSha: string
  buildNumber: string
  buildTimestamp: string
  ambiente: string
}

/**
 * Retorna a versão base (semver) da aplicação.
 * Exemplo: "1.0.0"
 */
export const obterVersaoBase = (): string => {
  // Fallback para desenvolvimento local
  try {
    return typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.0-dev'
  } catch {
    return '0.0.0-dev'
  }
}

/**
 * Retorna o commit SHA do build.
 * Exemplo: "abc1234" ou "dev" em desenvolvimento local
 */
export const obterCommitSha = (): string => {
  try {
    return typeof __COMMIT_SHA__ !== 'undefined' ? __COMMIT_SHA__ : 'dev'
  } catch {
    return 'dev'
  }
}

/**
 * Retorna o número do build do CI/CD.
 * Exemplo: "123" ou "0" em desenvolvimento local
 */
export const obterBuildNumber = (): string => {
  try {
    return typeof __BUILD_NUMBER__ !== 'undefined' ? __BUILD_NUMBER__ : '0'
  } catch {
    return '0'
  }
}

/**
 * Retorna o timestamp do build.
 * Exemplo: "2025-10-01"
 */
export const obterBuildTimestamp = (): string => {
  try {
    return typeof __BUILD_TIMESTAMP__ !== 'undefined'
      ? __BUILD_TIMESTAMP__
      : new Date().toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

/**
 * Retorna o ambiente da aplicação.
 * Exemplo: "production", "staging", "development"
 */
export const obterAmbiente = (): string => {
  try {
    return typeof __APP_ENVIRONMENT__ !== 'undefined'
      ? __APP_ENVIRONMENT__
      : 'development'
  } catch {
    return 'development'
  }
}

/**
 * Retorna a versão formatada baseado no ambiente.
 *
 * Formatos:
 * - Produção: "1.0.0"
 * - Staging: "1.0.0-staging.123"
 * - Development: "1.0.0-dev"
 *
 * @returns Versão formatada da aplicação
 */
export const obterVersaoApp = (): string => {
  const versaoBase = obterVersaoBase()
  const ambiente = obterAmbiente()
  const buildNumber = obterBuildNumber()

  // Produção: apenas versão semântica
  if (ambiente === 'production') {
    return versaoBase
  }

  // Staging: versão + staging + build number
  if (ambiente === 'staging') {
    return `${versaoBase}-staging.${buildNumber}`
  }

  // Development: versão + dev
  return `${versaoBase}-dev`
}

/**
 * Retorna a versão completa com metadata para tooltips/debug.
 *
 * Formato: "1.0.0-dev+abc1234 (Build #0, 2025-10-01)"
 *
 * @returns Versão completa com metadados
 */
export const obterVersaoCompleta = (): string => {
  const versao = obterVersaoApp()
  const commitSha = obterCommitSha()
  const buildNumber = obterBuildNumber()
  const buildTimestamp = obterBuildTimestamp()

  return `${versao}+${commitSha} (Build #${buildNumber}, ${buildTimestamp})`
}

/**
 * Retorna todos os metadados da versão.
 *
 * @returns Objeto com todos os metadados
 */
export const obterMetadataVersao = (): VersaoMetadata => {
  return {
    versao: obterVersaoApp(),
    commitSha: obterCommitSha(),
    buildNumber: obterBuildNumber(),
    buildTimestamp: obterBuildTimestamp(),
    ambiente: obterAmbiente(),
  }
}

/**
 * Retorna o ano atual para uso no copyright.
 */
export const obterAnoAtual = (): number => {
  return new Date().getFullYear()
}
