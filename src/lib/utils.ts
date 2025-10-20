import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utilitário para merge de classes TailwindCSS
 * Combina clsx com tailwind-merge para evitar conflitos de classes
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
