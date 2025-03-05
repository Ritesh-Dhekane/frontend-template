import { ButtonHTMLAttributes, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  loading?: boolean
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  loading,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all'
  
  const variants = {
    primary: 'bg-ravion-primary text-white hover:bg-ravion-primary/90',
    secondary: 'bg-ravion-gray-100 text-ravion-gray-900 hover:bg-ravion-gray-200',
    outline: 'border-2 border-ravion-primary text-ravion-primary hover:bg-ravion-primary/10',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <LoadingSpinner size="sm" />
      ) : (
        <>
          {Icon && <Icon className="mr-2 h-5 w-5" />}
          {children}
        </>
      )}
    </button>
  )
} 