'use client'

import { FieldError, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Input, PrimaryButton, Section } from '@/main/ui'
import { setNotification } from '@/modules/core'
import { skillService } from '@/modules/skills'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Skill () {
  const methods = useForm<SkillForm>()
  const router = useRouter()

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = methods
  const allErrors: FieldError | undefined = errors.title || errors.imageUrl || errors.level

  const createSkill: SubmitHandler<SkillForm> = async formSkill => {
    try {
      const message = await skillService.createSkill(formSkill)
      setNotification(message, 'success')
      reset()
      router.refresh()
    } catch (error) {
      setNotification((error as any).message)
    }
  }
  return (
    <FormProvider {...methods}>
      <Section col animation="section-1">
        <h1 className="text-4xl font-alt mb-10">Adicionar Skill</h1>
        <form
          onSubmit={handleSubmit(createSkill)}
          className="w-full max-w-2xl flex flex-col gap-2 items-center justify-center"
        >
          <div className="w-full flex justify-center items-center gap-2">
            <Input field="title" placeholder="Título da skill" />
            <Input field="imageUrl" placeholder="Link da imagem" />
          </div>
          <Input field="level" placeholder="Indique o seu nível de conhecimento" type="number" max={100} min={0} />
          <PrimaryButton type="submit" errors={allErrors}>
            Adicionar
          </PrimaryButton>
        </form>
      </Section>
    </FormProvider>
  )
}
