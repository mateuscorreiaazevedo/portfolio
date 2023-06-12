'use client'

import { containerSlideUp, itemSlideUp } from '@/main/animations'
import { contactService } from '../service/contact-service'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export const FormContact = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async formData => {
    try {
      const message = await contactService.sendMessage(formData)
      setNotification(message, 'success')
      reset()
      router.push('/')
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={containerSlideUp}
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col gap-2"
    >
      <div className="flex flex-col lg:flex-row gap-2 w-full text-sm">
        <motion.input
          variants={itemSlideUp}
          {...register('name', { required: true })}
          className={`outline-none border w-full focus:border-b-violet-500 transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
            errors?.name ? 'border-red-500' : 'border-transparent'
          }`}
          placeholder="Name"
        />
        <motion.input
          variants={itemSlideUp}
          {...register('email', { required: true })}
          className={`outline-none border w-full focus:border-b-violet-500 transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
            errors?.email ? 'border-red-500' : 'border-transparent'
          }`}
          placeholder="Email"
        />
      </div>
      <motion.input
        variants={itemSlideUp}
        {...register('subject', { required: true })}
        className={`outline-none border w-full focus:border-b-violet-500 transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
          errors?.subject ? 'border-red-500' : 'border-transparent'
        }`}
        placeholder="Subject"
      />
      <motion.textarea
        variants={itemSlideUp}
        {...register('message', { required: true })}
        placeholder="Message"
        className={`outline-none border w-full focus:border-b-violet-500 resize-none transition-colors hover:border-b-primary bg-zinc-800 py-2 px-4 placeholder:text-zinc-300 font-light ${
          errors?.message ? 'border-red-500' : 'border-transparent'
        }`}
      />
      <motion.button
        variants={itemSlideUp}
        className='font-alt hover:bg-violet-600 transition-colors  uppercase text-xl rounded-sm w-full py-2 px-4 text-black bg-violet-500'
        type="submit"
      >
        Subimt
      </motion.button>
    </motion.form>
  )
}
