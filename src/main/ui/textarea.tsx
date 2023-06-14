import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  field: string
  placeholder?: string
}

export const Textarea: React.FC<Props> = ({ field, placeholder }) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <textarea
          {...register(field, { required: true })}
          placeholder={placeholder}
          className={`outline-none border w-full focus:border-b-violet-500 resize-none transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
            errors[field] ? 'border-red-500' : 'border-transparent'
          }`}
        />
  )
}
