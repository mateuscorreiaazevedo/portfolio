'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { containerSlideUp, itemSlideUp } from '@/main/animations'
import { contactService } from '../service/contact-service'
import { Input, PrimaryButton, Textarea } from '@/main/ui'
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
  const methods = useForm<Inputs>()

  const { formState: { errors } } = methods

  const onSubmit: SubmitHandler<Inputs> = async formData => {
    try {
      const message = await contactService.sendMessage(formData)
      setNotification(message, 'success')
      methods.reset()
      router.push('/')
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  const allErrors = errors.name || errors.email || errors.subject || errors.message

  return (
    <FormProvider {...methods}>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={containerSlideUp}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex-1 flex flex-col gap-2"
      >
        <div className="flex flex-col lg:flex-row gap-2 w-full text-sm">
          <motion.div variants={itemSlideUp}>
            <Input field="name" placeholder="Name" />
          </motion.div>
          <motion.div variants={itemSlideUp}>
            <Input field="email" placeholder="Email" />
          </motion.div>
        </div>
        <motion.div variants={itemSlideUp}>
          <Input field="subject" placeholder="Subject" />
        </motion.div>
        <motion.div variants={itemSlideUp}>
          <Textarea field="message" placeholder="Message" />
        </motion.div>
        <motion.div className='-mt-1.5' variants={itemSlideUp}>
          <PrimaryButton errors={allErrors} type="submit">Submit</PrimaryButton>
        </motion.div>
      </motion.form>
    </FormProvider>
  )
}
