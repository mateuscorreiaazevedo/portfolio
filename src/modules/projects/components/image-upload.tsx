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
    [setValue]
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
            className={`relative transition-all flex items-center justify-center px-4 py-2 w-full aspect-video cursor-pointer bg-zinc-800 border hover:border-b-primary ${
              errors.imageUrl ? 'border-red-500' : 'border-transparent'
            }`}
          >
            {value ? (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  className="w-full aspect-auto object-cover"
                  src={value}
                />
              </div>
            ) : (
              <span className="text-lg text-zinc-300 flex flex-col justify-center items-center hover:text-zinc-400 transition">
                <BiImageAdd className="w-10 h-10" />
                Clique aqui para inserir uma foto.
              </span>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}
