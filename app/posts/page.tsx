
import React, { Suspense } from 'react';
import PostTable from './components/PostTable';


const PostsPage = () => {
    return (
        <div className='pt-20'>
            <h1 className='text-center text-xl'>PostsPage</h1>
            <Suspense fallback={<p className='text-center animate-pulse'>Loading...</p>}>
                <PostTable />
            </Suspense>
        </div>
    )
}


export default PostsPage