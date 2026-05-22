import { BrandPanel } from './BrandPanel'
import { LoginCard } from './LoginCard'
import { defaultLoginBrand, defaultLoginCopy } from '../config/defaultBrand'
import type { LoginBrandConfig, LoginCopyConfig, LoginScreenProps } from '../types'

function mergeBrand(brand?: LoginScreenProps['brand']): LoginBrandConfig {
  return {
    ...defaultLoginBrand,
    ...brand,
    logos: brand?.logos ?? defaultLoginBrand.logos,
    metrics: brand?.metrics ?? defaultLoginBrand.metrics,
  }
}

function mergeCopy(copy?: LoginScreenProps['copy']): LoginCopyConfig {
  return {
    ...defaultLoginCopy,
    ...copy,
  }
}

export function LoginScreen({
  status,
  actions,
  brand,
  copy,
  errorMessage,
  signingIn = false,
  checkingApproval = false,
  className,
}: LoginScreenProps) {
  const resolvedBrand = mergeBrand(brand)
  const resolvedCopy = mergeCopy(copy)
  const rootClassName = [
    'grid min-h-screen w-full bg-slate-50 lg:grid-cols-2',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={rootClassName}>
      <BrandPanel brand={resolvedBrand} />
      <LoginCard
        status={status}
        actions={actions}
        copy={resolvedCopy}
        errorMessage={errorMessage}
        signingIn={signingIn}
        checkingApproval={checkingApproval}
      />
    </main>
  )
}
