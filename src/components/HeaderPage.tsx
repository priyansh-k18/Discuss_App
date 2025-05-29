
import React from 'react'
import AuthHeader from './Auth-header'
import SearchInput from './search-input'



const HeaderPage =  () => {
  return (
    <div className='grid grid-cols-3 mt-5 items-center'>
      <div className='flex justify-start'>
        <h1 className='font-bold text-xl'>Discuss</h1>
      </div>
      <div className='flex justify-center'>
        <SearchInput/>
      </div>
      <div className='flex justify-end gap-2'>
       
      <AuthHeader/>
       
      </div>
    </div>
  )
}

export default HeaderPage
