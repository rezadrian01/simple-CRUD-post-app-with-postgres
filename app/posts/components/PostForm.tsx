"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Post } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'

interface PostFormProps {
    type: "ADD" | "UPDATE",
    post?: Post
}

const PostForm: FC<PostFormProps> = ({ type, post }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        try {
            setIsLoading(true);
            e.preventDefault();

            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());

            // Validation

            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ ...data })
            });
            router.push('/posts');
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='max-w-[25rem] mx-auto mt-20 space-y-4'>
                <h1 className='text-center text-xl'>{type === "ADD" ? 'Create' : 'Update'} a post.</h1>
                <div className='space-y-4'>
                    <Input defaultValue={post?.title} type='text' name='title' placeholder='Post title...' />
                    <Textarea defaultValue={post?.content} className='min-h-[10rem]' name='content' placeholder='Post content...' />
                </div>
                <Button disabled={isLoading} className='w-full'>Submit</Button>
            </form>
        </>
    )
}

export default PostForm