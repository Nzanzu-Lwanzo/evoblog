import { useQuery } from "@tanstack/react-query";
import { getSamples } from "../../backend/queries/sample";

export function useGetSamples() {

    const { data, isFetching } = useQuery({
        queryKey: ['order'],
        queryFn: getSamples
    })

    return { data, isFetching }

}