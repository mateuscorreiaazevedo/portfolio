import { useFormContext } from 'react-hook-form'
import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  field: string
  placeholder?: string
}

export const Input: React.FC<Props> = ({ field, placeholder, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <input
      {...rest}
      {...register(field, { required: true })}
      className={`w-full border bg-zinc-800 px-4 py-2 font-light outline-none transition-colors placeholder:text-zinc-300 hover:border-b-primary focus:border-b-violet-500 ${
        errors[field] ? 'border-red-500' : 'border-transparent'
      }`}
      placeholder={placeholder}
    />
  )
}
