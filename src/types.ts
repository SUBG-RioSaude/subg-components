export type LoginStatus =
  | 'signedOut'
  | 'loading'
  | 'pending'
  | 'inactive'
  | 'error'
  | 'authenticated'

export interface LoginLogo {
  src: string
  alt: string
}

export interface LoginMetric {
  label: string
  description: string
}

export interface LoginBrandConfig {
  eyebrow: string
  productName: string
  organizationName: string
  description: string
  onlineLabel: string
  logos: LoginLogo[]
  metrics: LoginMetric[]
}

export type LoginBrandInput = Partial<LoginBrandConfig>

export interface LoginCopyConfig {
  signInTitle: string
  signInDescription: string
  securityNote: string
  googleButtonLabel: string
  signingInLabel: string
  loadingTitle: string
  loadingDescription: string
  pendingTitle: string
  pendingDescription: string
  inactiveTitle: string
  inactiveFallbackDescription: string
  errorTitle: string
  errorFallbackDescription: string
  checkApprovalLabel: string
  checkingApprovalLabel: string
  signOutLabel: string
  retryLabel: string
}

export interface LoginScreenActions {
  signInWithGoogle: () => Promise<void> | void
  signOut?: () => Promise<void> | void
  checkApproval?: () => Promise<void> | void
}

export interface LoginScreenProps {
  status: LoginStatus
  actions: LoginScreenActions
  brand?: LoginBrandInput
  copy?: Partial<LoginCopyConfig>
  errorMessage?: string | null
  signingIn?: boolean
  checkingApproval?: boolean
  className?: string
}
