import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { type PortableTextBlock } from "@portabletext/react";

type Slug = {
    _type: "slug";
    current: string;
};

export interface Post {
    _id: string
    title: string
    slug: Slug
    image?: SanityImageSource
    description: string
    content: PortableTextBlock;
    category: Category
    morePosts: Post[]
    tags: Tag[]
    shortUrl?: string;
    author: Author
    comments: CommentType[]
    _updatedAt: string
    _createdAt: string
}

export interface Tag {
    _id: string
    name: string

}

export interface Category {
    _id: string
    name: string
    description?: string
}

export interface Author {
    _id: string
    name: string
    image?: SanityImageSource
}

export interface Artist {
    _id: string
    name: string
}

export interface Song {
    _id: string
    title: string
    videoId: string;
    releaseYear: string;
    artists: Artist[]
    _updatedAt: string
    _createdAt: string
}

export interface Sample {
    context: PortableTextBlock;
    original: Song;
    samplers: Song[]
}

export interface ForListSamples {
    _id: string;
    description: string
    artists: string[]
}

export interface CreateAccountType {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export type LoginType = Omit<CreateAccountType, 'confirmPassword' | 'name'>

export interface AuthenticatedUserType {
    id: string
    authId: string;
    name: string | null
    email: string | null
    picture: string | null
    phoneNumber: string | null;
    newsletter: boolean
}

export interface CommentType {
    id: string
    content: string;
    user: AuthenticatedUserType
    postId: string
    createdAt: string
}

export interface CreateCommentType {
    content: string;
    user: string
    postId: string
}