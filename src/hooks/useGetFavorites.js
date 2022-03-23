import { gql, useQuery } from '@apollo/client'

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }

`
/**
 * hook que devuelve las fotos filtradas por id de categoría
 * @returns { data, error, loading }
 */
export const useGetFavorites = () => {
    return useQuery(GET_FAVS, { fetchPolicy: 'network-only' })
}