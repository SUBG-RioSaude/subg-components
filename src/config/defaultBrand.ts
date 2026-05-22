import type { LoginBrandConfig, LoginCopyConfig } from '../types'
import logoPrefeituraUrl from '../assets/logo-prefeitura.png'
import susLogoUrl from '../assets/sus_logo.png'

export const defaultLoginBrand: LoginBrandConfig = {
  eyebrow: 'Gestão de Agendamentos',
  productName: 'Sistema Municipal de Agendamento',
  organizationName: 'Prefeitura do Rio - SMS',
  description:
    'Organize solicitações, gerencie salas e acompanhe aprovações em um ambiente unificado para toda a secretaria.',
  onlineLabel: 'Sistema online',
  logos: [
    { src: logoPrefeituraUrl, alt: 'Prefeitura do Rio' },
    { src: susLogoUrl, alt: 'SUS - Sistema Único de Saúde' },
  ],
  metrics: [
    { label: 'Salas', description: 'Cadastro e gestão' },
    { label: 'Setores', description: 'Solicitantes ativos' },
    { label: 'Agenda', description: 'Em tempo real' },
  ],
}

export const defaultLoginCopy: LoginCopyConfig = {
  signInTitle: 'Acesse com sua conta institucional',
  signInDescription:
    'Use sua conta Google autorizada pela Prefeitura para acessar o sistema.',
  securityNote: 'Acesso restrito a contas institucionais autorizadas',
  googleButtonLabel: 'Entrar com Google',
  signingInLabel: 'Entrando...',
  loadingTitle: 'Validando sessão',
  loadingDescription: 'Aguarde enquanto verificamos seu acesso.',
  pendingTitle: 'Aguardando aprovação',
  pendingDescription:
    'Sua conta foi criada com sucesso. Assim que um administrador liberar o acesso, esta tela será atualizada automaticamente.',
  inactiveTitle: 'Conta inativa',
  inactiveFallbackDescription:
    'Seu acesso está inativo. Procure um administrador para reativar a conta.',
  errorTitle: 'Erro de autenticação',
  errorFallbackDescription:
    'Não foi possível validar sua sessão. Tente novamente.',
  checkApprovalLabel: 'Verificar aprovação',
  checkingApprovalLabel: 'Verificando...',
  signOutLabel: 'Retornar ao login',
  retryLabel: 'Tentar novamente',
}
