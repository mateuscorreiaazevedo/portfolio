'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { useFormContext } from 'react-hook-form'
import { BiImageAdd } from 'react-icons/bi'
import { FC, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  field: string
}

export const ImageUpload: FC<Props> = ({ field }) => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext()
  const value = watch(field)

  const handleUpload = useCallback(
    (result: any) => {
      setValue(field, result.info.secure_url)
    },
    [field, setValue]
  )
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="xrakcdn1"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open()}
            className={`relative flex aspect-video w-full cursor-pointer items-center justify-center border bg-zinc-800 px-4 py-2 transition-all hover:border-b-primary ${
              errors.imageUrl ? 'border-red-500' : 'border-transparent'
            }`}
          >
            {value ? (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="Upload"
                  fill
                  className="aspect-auto w-full object-cover"
                  src={value}
                />
              </div>
            ) : (
              <span className="flex flex-col items-center justify-center text-lg text-zinc-300 transition hover:text-zinc-400">
                <BiImageAdd className="h-10 w-10" />
                Clique aqui para inserir uma foto.
              </span>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}
