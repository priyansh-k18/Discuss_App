import { fetchCommentByPostId } from '@/lib/query/comment';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react'

type CommentShowProps = {
    postId:string;
    commentId:string;
}

export const CommentShow:React.FC<CommentShowProps> = async ({postId,commentId}) => {
    const comments = await fetchCommentByPostId(postId);

    const comment = comments.find((c) => c.id === commentId);
    if(!comment) return null;

    const childern = comments.filter((c) => c.parentId === commentId);

  return (
    <div>
        <div className='flex gap-3'>
            <Avatar>
                <AvatarImage src={comment.user.image || ""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex-1 space-y-3'>
                <p className='text-gray-500 text-sm font-medium'>
                    {comment.user.name}
                </p>
                <p className='text-gray-800'>
                    {comment.content}
                </p>
            </div>
        </div>
      {
        childern.map((comment,index) => (
            <CommentShow key={index} postId={comment.postId} commentId={comment.id}/>
        ))
      }
    </div>
  )
}

export default CommentShow
