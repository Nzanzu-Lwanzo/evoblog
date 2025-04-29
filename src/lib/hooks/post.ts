import { getPosts } from "../../backend/queries/post"
import { useQuery } from "@tanstack/react-query"

export function useGetPosts() {

    const { data, isFetching, isError } = useQuery({
        queryKey: ['post'],
        queryFn: getPosts,
        initialData: []
    })

    return {
        data,
        isFetching,
        isError
    }

}