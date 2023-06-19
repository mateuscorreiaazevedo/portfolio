'use client'

import { FieldError, FormProvider, useForm } from 'react-hook-form'
import { projectService } from '../service/project-service'
import { Input, PrimaryButton, Textarea } from '@/main/ui'
import { setNotification } from '@/modules/core'
import { ImageUpload } from './image-upload'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components'
import { useState } from 'react'

export const NewProjectForm = () => {
  const [loading, setLoading] = useState(false)
  const methods = useForm<ProjectForm>()
  const router = useRouter()

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  async function handlePostProject(formData: ProjectForm) {
    setLoading(true)
    try {
      const message = await projectService.postProject(formData)
      setNotification(message, 'success')
      router.refresh()
      router.push('/admin')
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const allErrors = (errors.title ||
    errors.link ||
    errors.description ||
    errors.imageUrl) as FieldError

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handlePostProject)}
        className="flex w-full max-w-2xl flex-col items-center justify-center gap-2"
      >
        <div className="flex w-full items-center justify-between gap-2">
          <Input field="title" placeholder="Título do projeto" />
          <Input field="link" placeholder="Link do projeto" />
        </div>
        <Textarea
          field="description"
          placeholder="Descrição do projeto"
          style={{
            height: 200
          }}
        />
        <ImageUpload field="imageUrl" />
        <PrimaryButton type="submit" errors={allErrors}>
          {loading ? <Spinner /> : 'Enviar'}
        </PrimaryButton>
      </form>
    </FormProvider>
  )
}
