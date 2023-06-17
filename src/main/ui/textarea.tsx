import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  field: string
}

export const Textarea: React.FC<Props> = ({ field, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <textarea
      {...rest}
      {...register(field, { required: true })}
      className={`outline-none border w-full focus:border-b-violet-500 resize-none transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
        errors[field] ? 'border-red-500' : 'border-transparent'
      }`}
    />
  )
}
