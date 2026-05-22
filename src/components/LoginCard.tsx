import { LoginStatusView } from './LoginStatusView'
import type {
  LoginCopyConfig,
  LoginScreenActions,
  LoginStatus,
} from '../types'

interface LoginCardProps {
  status: LoginStatus
  actions: LoginScreenActions
  copy: LoginCopyConfig
  errorMessage?: string | null
  signingIn: boolean
  checkingApproval: boolean
}

export function LoginCard({
  status,
  actions,
  copy,
  errorMessage,
  signingIn,
  checkingApproval,
}: LoginCardProps) {
  return (
    <section className="flex min-h-[620px] items-center justify-center bg-[radial-gradient(circle_at_18%_12%,rgba(65,183,230,0.13),transparent_36%),#f2f8fb] px-5 py-10 sm:px-8 lg:px-12">
      <div className="w-full max-w-[460px] rounded-[28px] border border-white/80 bg-white/[0.78] p-7 shadow-[0_24px_80px_rgba(5,31,28,0.16)] backdrop-blur-2xl sm:p-9">
        <LoginStatusView
          status={status}
          actions={actions}
          copy={copy}
          errorMessage={errorMessage}
          signingIn={signingIn}
          checkingApproval={checkingApproval}
        />
      </div>
    </section>
  )
}
