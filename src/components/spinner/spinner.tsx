import React from 'react'

const Spinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-7 h-7 rounded-full border-2 border-zinc-600/50 border-t-white animate-spin" />
    </div>
  )
}

export default Spinner
