import PostCreateForm from '@/components/posts/PostCreateForm';

import React from 'react'

type TopicShowPageProps = {
  params:Promise<{slug:string}>
}

const TopicShowPage:React.FC<TopicShowPageProps> = async({params}) => {
  const slug = (await params).slug;
  return (
    <div className='flex justify-between mt-8 mx-8'>
      <div>
        <h1>{slug}</h1>
      </div>
      <div>
        <PostCreateForm slug = {slug}/>
      </div>
    </div>
  )
}

export default TopicShowPage
