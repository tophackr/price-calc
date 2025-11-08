import type { JSX } from 'react'

export function Loader(): JSX.Element {
  return (
    <div className='flex py-32 items-center justify-center'>
      <img
        src='/images/Duck-Loading.webp'
        alt='Loading...'
        width={144}
        height={144}
        loading='lazy'
        decoding='async'
      />
    </div>
  )
}
