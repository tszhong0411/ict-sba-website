'use client'

import { Toaster as ReactHotToast } from 'react-hot-toast'

const Toaster = () => {
  return (
    <ReactHotToast
      position='top-right'
      toastOptions={{
        className: '!bg-accent-1 !text-accent-fg !border !border-accent-2'
      }}
    />
  )
}

export default Toaster
