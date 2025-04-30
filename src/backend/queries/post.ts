import { Post } from "../../lib/@type"
import client from "../client"

export const getPosts = async () => {
    const posts = await client.fetch(`
        *[_type=="post"] {
            _id,
            title,
            slug,
            description,
            author->{
                _id,
                name,
                image
            },
            _updatedAt
        }
    `)
    return posts as Post[]
}

export const getPost = async (slug: string) => {
    const post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            image,
            description,
            content,
            author->{
                _id,
                name,
                image
            },
            _updatedAt,
            _createdAt
        }`,
        { slug }
    )

    return post
}