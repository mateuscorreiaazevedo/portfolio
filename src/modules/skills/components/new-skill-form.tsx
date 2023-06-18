'use client'

import { FieldError, FormProvider, useForm } from 'react-hook-form'
import { Input, PrimaryButton } from '@/main/ui'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components'
import { skillService } from '..'
import { useState } from 'react'

const NewSkillForm = () => {
  const [loading, setLoading] = useState(false)
  const methods = useForm<SkillForm>()
  const router = useRouter()

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  async function createSkill(formSkill: SkillForm) {
    setLoading(true)
    try {
      const message = await skillService.createSkill(formSkill)
      setNotification(message, 'success')
      router.refresh()
      router.push('/?tab=skills')
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const allErrors = (errors.imageUrl || errors.level || errors.title) as FieldError

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(createSkill)}
        className="w-full max-w-2xl flex flex-col gap-2 items-center justify-center"
      >
        <div className="w-full flex justify-center items-center gap-2">
          <Input field="title" placeholder="Título da skill" />
          <Input field="imageUrl" placeholder="Link da imagem" />
        </div>
        <Input
          field="level"
          placeholder="Indique o seu nível de conhecimento"
          type="number"
          max={100}
          min={0}
        />
        <PrimaryButton type="submit" errors={allErrors}>
          {loading ? <Spinner /> : 'Adicionar'}
        </PrimaryButton>
      </form>
    </FormProvider>
  )
}

export default NewSkillForm
