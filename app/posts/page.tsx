
import React, { Suspense } from 'react';
import PostTable from './components/PostTable';
import Link from 'next/link';


const PostsPage = () => {
    return (
        <div className='pt-20 flex flex-col gap-4 items-center'>
            <h1 className='text-center text-xl'>PostsPage</h1>
            <Link className='' href={'/posts/create'}>Add Post</Link>
            <Suspense fallback={<p className='text-center animate-pulse'>Loading...</p>}>
                <PostTable />
            </Suspense>
        </div>
    )
}


export default PostsPage