import { Post } from "@prisma/client";
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

const PostTable = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/posts`);
    const data = await response.json();
    const posts: Post[] = data.posts;

    return <Table className='max-w-[50rem] mx-auto'>
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
}

export default PostTable