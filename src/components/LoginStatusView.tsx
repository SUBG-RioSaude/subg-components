import { GoogleButton } from './GoogleButton'
import type {
  LoginCopyConfig,
  LoginScreenActions,
  LoginStatus,
} from '../types'

interface LoginStatusViewProps {
  status: LoginStatus
  actions: LoginScreenActions
  copy: LoginCopyConfig
  errorMessage?: string | null
  signingIn: boolean
  checkingApproval: boolean
}

const iconToneClasses = {
  loading: 'bg-[#113052]/[0.06] text-[#113052]',
  pending: 'bg-amber-500/10 text-amber-700',
  inactive: 'bg-red-500/[0.08] text-red-700',
  error: 'bg-red-500/[0.08] text-red-700',
}

function SpinnerIcon() {
  return (
    <svg
      className="h-7 w-7 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-15"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-85"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function XCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function StatusShell({
  tone,
  icon,
  title,
  description,
  children,
}: {
  tone: keyof typeof iconToneClasses
  icon: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center pb-2 pt-4 text-center">
      <div
        className={[
          'mb-5 flex h-14 w-14 items-center justify-center rounded-2xl',
          iconToneClasses[tone],
        ].join(' ')}
      >
        {icon}
      </div>
      <p className="mb-2 text-xl font-black tracking-normal text-[#0d1f2d]">
        {title}
      </p>
      <p className="max-w-[320px] text-sm leading-relaxed text-[#63706d]">
        {description}
      </p>
      {children}
    </div>
  )
}

export function LoginStatusView({
  status,
  actions,
  copy,
  errorMessage,
  signingIn,
  checkingApproval,
}: LoginStatusViewProps) {
  if (status === 'loading') {
    return (
      <StatusShell
        tone="loading"
        icon={<SpinnerIcon />}
        title={copy.loadingTitle}
        description={copy.loadingDescription}
      />
    )
  }

  if (status === 'pending') {
    return (
      <StatusShell
        tone="pending"
        icon={<ClockIcon />}
        title={copy.pendingTitle}
        description={copy.pendingDescription}
      >
        {actions.checkApproval && (
          <button
            type="button"
            onClick={actions.checkApproval}
            disabled={checkingApproval}
            className="mt-6 cursor-pointer rounded-xl border border-[#113052]/[0.14] bg-[#113052]/[0.06] px-5 py-2.5 text-sm font-semibold text-[#113052] transition-colors hover:bg-[#113052]/[0.11] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {checkingApproval ? copy.checkingApprovalLabel : copy.checkApprovalLabel}
          </button>
        )}
        {actions.signOut && (
          <button
            type="button"
            onClick={actions.signOut}
            className="mt-3 cursor-pointer text-sm text-[#63706d] underline-offset-2 hover:text-[#113052] hover:underline"
          >
            {copy.signOutLabel}
          </button>
        )}
      </StatusShell>
    )
  }

  if (status === 'inactive') {
    return (
      <StatusShell
        tone="inactive"
        icon={<XCircleIcon />}
        title={copy.inactiveTitle}
        description={errorMessage ?? copy.inactiveFallbackDescription}
      >
        {actions.signOut && (
          <button
            type="button"
            onClick={actions.signOut}
            className="mt-6 cursor-pointer text-sm text-[#63706d] underline-offset-2 hover:text-[#113052] hover:underline"
          >
            {copy.signOutLabel}
          </button>
        )}
      </StatusShell>
    )
  }

  if (status === 'error') {
    return (
      <StatusShell
        tone="error"
        icon={<AlertIcon />}
        title={copy.errorTitle}
        description={errorMessage ?? copy.errorFallbackDescription}
      >
        <button
          type="button"
          onClick={actions.signInWithGoogle}
          className="mt-6 cursor-pointer rounded-xl border border-[#113052]/[0.14] bg-[#113052]/[0.06] px-5 py-2.5 text-sm font-semibold text-[#113052] transition-colors hover:bg-[#113052]/[0.11]"
        >
          {copy.retryLabel}
        </button>
      </StatusShell>
    )
  }

  if (status === 'authenticated') {
    return null
  }

  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full bg-[#113052]/[0.08] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.05em] text-[#0a2a48]">
        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#41b7e6]" />
        Conta institucional
      </span>

      <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-normal text-[#071715]">
        {copy.signInTitle}
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#63706d]">
        {copy.signInDescription}
      </p>

      <div className="mt-8">
        <GoogleButton
          onClick={actions.signInWithGoogle}
          loading={signingIn}
          disabled={signingIn}
          label={copy.googleButtonLabel}
          loadingLabel={copy.signingInLabel}
        />
      </div>

      {errorMessage && (
        <div className="mt-5 rounded-2xl border border-red-600/15 bg-red-500/10 p-4 text-sm font-semibold leading-6 text-red-800">
          {errorMessage}
        </div>
      )}

      <p className="mt-[18px] text-center text-xs text-gray-400">
        {copy.securityNote}
      </p>
    </>
  )
}
