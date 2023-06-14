import { useFormContext } from 'react-hook-form'
import React from 'react'

type Props = {
  field: string
  placeholder?: string
}

export const Input: React.FC<Props> = ({ field, placeholder }) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <input
      {...register(field, { required: true })}
      className={`outline-none border w-full focus:border-b-violet-500 transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
        errors[field] ? 'border-red-500' : 'border-transparent'
      }`}
      placeholder={placeholder}
    />
  )
}
