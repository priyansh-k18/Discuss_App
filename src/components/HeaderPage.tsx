
import React from 'react'
import { Input } from './ui/input'
import AuthHeader from './Auth-header'



const HeaderPage =  () => {
  return (
    <div className='grid grid-cols-3 mt-5 items-center'>
      <div className='flex justify-start'>
        <h1 className='font-bold text-xl'>Discuss</h1>
      </div>
      <div className='flex justify-center'>
        <Input type="text" placeholder="search post..."/>
      </div>
      <div className='flex justify-end gap-2'>
       
      <AuthHeader/>
       
      </div>
    </div>
  )
}

export default HeaderPage
