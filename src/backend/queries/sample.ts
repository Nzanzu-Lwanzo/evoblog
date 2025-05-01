import { ForListSamples, Sample } from "../../lib/@type";
import client from "../client";

export async function getSamples() {

    const samples = await client.fetch(`
      *[_type == "sample"] {
        _id,
        "artists": [
            ...original->artists[]->name,
            ...samplers[]->artists[]->name
        ]
        }
    `)

    return samples as ForListSamples[]
}

export async function getSample(_id: string) {

    // This returns an array of one element
    const sample = await client.fetch(`
       *[_type == "sample" && _id == "${_id}"]{
            _id,
            context,
            original->{
                ...,
                "artists": artists[]->{
                    _id,
                    name
                }
            },
            samplers[]->{
                ...,
                "artists": artists[]->{
                    _id,
                    name
                }
            }
        }

    `)

    return sample[0] as Sample

}