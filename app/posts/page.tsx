import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Post } from '@prisma/client';

const PostsPage = async () => {
    // const response = await fetch('/api/posts');
    // const posts: Post[] = await response.json();
    const posts: Post[] = [{ id: "1", title: "Testing Post", content: "This post using dummy data" }]

    return (
        <div className='pt-20'>
            <h1 className='text-center text-xl'>PostsPage</h1>
            <Table className='max-w-[50rem] mx-auto'>
                <TableCaption>A list of posts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Content</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((posts) => (
                        <TableRow key={posts.id}>
                            <TableCell className="font-medium">{posts.title}</TableCell>
                            <TableCell>{posts.content}</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">{posts.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default PostsPage