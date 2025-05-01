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
    artists: string[]
}