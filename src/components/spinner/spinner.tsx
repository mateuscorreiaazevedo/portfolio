import React from 'react'

const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-zinc-600/50 border-t-white" />
    </div>
  )
}

export default Spinner
