"use client";

import { Pencil, Trash } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FC } from "react"

const ActionButton: FC<{ id: string }> = ({ id }) => {
    const router = useRouter();
    const handleDeleteClick = () => {
        fetch(`/api/posts/${id}`, {
            method: "DELETE"
        }).then(response => response.json()).then(data => {
            console.log(data);
            router.refresh();
        })
    }
    return <div className="flex gap-4">
        <Link href={`/posts/${id}`}>
            <Pencil size={15} />
        </Link>
        <button onClick={handleDeleteClick}>
            <Trash size={15} />
        </button>
    </div>
}

export default ActionButton