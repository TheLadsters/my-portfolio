import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    console.error(error);

  return (
    <div className='h-screen flex-col text-center pt-52'>
        <h1 className='text-6xl mb-5'>Oops!</h1>
        <p className='text-2xl mb-3'>Sorry, an unexpected error has occured.</p>
        <p>
          Status: <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default Error