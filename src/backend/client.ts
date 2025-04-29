import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
    projectId: 'mlav5sx0',
    useCdn: true,
    apiVersion: "2025-02-06",
    dataset: "production"
})

const builder = imageUrlBuilder(client)

export const buildImage = (source: SanityImageSource | undefined) => {
    if (!source) return
    return builder.image(source).url()
}


export default client
