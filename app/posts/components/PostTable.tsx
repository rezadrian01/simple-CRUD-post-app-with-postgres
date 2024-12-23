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
import ActionButton from "./ActionButton";

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
            {posts.map((post) => (
                <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.content}</TableCell>
                    <TableCell>
                        <ActionButton id={post.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">{posts.length}</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
}


export default PostTable