import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function Alert({ alert, onClose }) {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (alert) {
      setShowAlert(true)
      const timeout = setTimeout(() => setShowAlert(false), 5000) // Auto close after 5 seconds
      return () => clearTimeout(timeout)
    }
  }, [alert])

  return (
    <Transition
      show={showAlert}
      enter='transition-opacity duration-500'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-500'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='fixed rounded-lg inset-0 flex items-center justify-center z-50'>
        <div className='fixed inset-0 bg-black opacity-50'></div>
        <div className='rounded-lg shadow-lg p-6 relative'>
          <button
            className='absolute top-0 right-0 rounded-full hover:bg-red-200 focus:outline-none focus:bg-red-200'
            onClick={onClose}
          >
            <svg className='fill-current h-6 w-6 text-red-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <title>Close</title>
              <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
            </svg>
          </button>
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
            <strong className='font-bold'>{alert.type} | </strong>
            <span className='block sm:inline'>{alert.message}</span>
          </div>
        </div>
      </div>
    </Transition>
  )
}
