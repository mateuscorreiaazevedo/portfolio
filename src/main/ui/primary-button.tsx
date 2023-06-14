import { FieldError, FieldErrors } from 'react-hook-form'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  errors?: FieldErrors | FieldError
}

export const PrimaryButton: React.FC<Props> = ({ children, errors, ...rest }) => {
  return (
    <button
      className={`font-alt transition-colors  uppercase text-xl rounded-sm w-full py-2 px-4 ${errors ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-violet-500 hover:bg-violet-600 text-black'}`}
      {...rest}
    >
      {children}
    </button>
  )
}
