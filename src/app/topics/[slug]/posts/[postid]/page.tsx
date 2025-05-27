import React from 'react'
import PostShow from '@/components/posts/post-show';
import CommentCreateForm from '@/components/comments/comment-create-form';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CommentList from '@/components/comments/comment-list';

type PostShowPageProps = {
     params:Promise<{slug:string; postId:string}>
}


const PostShowPage : React.FC<PostShowPageProps> = async ({params}) => {
  const {slug,postId} = (await params);
  return (
    <div className='space-y-3'>
      <Link href={`/topics/${slug}`}>
      <Button variant={'link'}><ChevronLeft/></Button>
      Back to {slug}
      </Link>
      <PostShow postId = {postId}/>
      <CommentCreateForm postId={postId} parentId={postId} startOpen/>
      <CommentList postId={postId}/>
    </div>
  )
}

export default PostShowPage
