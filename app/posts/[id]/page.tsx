import React, { FC } from 'react'
import PostForm from '../components/PostForm';
import { Post } from '@prisma/client';

interface IdPost {
    id: string
}
interface DetailPostProps {
    params: Promise<IdPost>
}

const DetailPostPage: FC<DetailPostProps> = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`${process.env.BASE_URL}/api/posts/${id}`);
    const data = await response.json();
    const post: Post = data.post;
    return (
        <div>
            <PostForm type='UPDATE' post={post} />
        </div>
    )
}

export default DetailPostPage