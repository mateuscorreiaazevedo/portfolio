import { FieldError, FieldErrors } from 'react-hook-form'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  errors?: FieldErrors | FieldError
}

export const PrimaryButton: React.FC<Props> = ({ children, errors, ...rest }) => {
  return (
    <button
      className={`w-full rounded-sm  px-4 py-2 font-alt text-xl uppercase transition-colors ${
        errors
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-violet-500 text-black hover:bg-violet-600'
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}
