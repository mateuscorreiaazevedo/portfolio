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
      className={`w-full resize-none border bg-zinc-800 px-4 py-2 font-light outline-none transition-colors placeholder:text-zinc-300 hover:border-b-primary focus:border-b-violet-500 ${
        errors[field] ? 'border-red-500' : 'border-transparent'
      }`}
    />
  )
}
