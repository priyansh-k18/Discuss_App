"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const CommentCreateForm = () => {
    const [open,setOpen] = useState(true);
  return (
    <div>
      <Button size={'sm'} variant={'link'} onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
         <form action="" className='space-y-2'>
         <Textarea name='content'
           placeholder='write a comment...' className='bg-gray-100 focus-visible:ring-0'/>
          <Button size={'sm'} variant={'secondary'}>Save</Button>
      </form>
      )}
    
    </div>
  )
}

export default CommentCreateForm
