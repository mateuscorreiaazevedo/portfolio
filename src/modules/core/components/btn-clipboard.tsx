'use client'

import { setNotification } from '../utils/set-notification'
import React from 'react'

type Props = {
  button: React.ButtonHTMLAttributes<HTMLButtonElement>
  input: React.InputHTMLAttributes<HTMLInputElement>
}

export const ButtonClipboard: React.FC<Props> = props => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select()

      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() =>
          setNotification('Copiado para a área de transferencia', 'success')
        )
        .catch(() => setNotification('Erro ao copiar o texto.'))
    }
  }

  return (
    <button className={props.button.className} onClick={copyToClipboard}>
      <input
        className="bg-transparent w-full cursor-pointer"
        disabled
        ref={inputRef}
        value={props.input.value}
      />
    </button>
  )
}
