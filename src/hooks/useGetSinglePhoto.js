import { useQuery, gql } from '@apollo/client';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`

/**
 * hook que devuelve la foto filtrada por id
 * @param { photoId } id de la foto
 * @returns { data, error, loading }
 */
 export const useGetSinglePhoto =  photoId  => {
    return useQuery(GET_SINGLE_PHOTO, { variables: { id: photoId } })
 }
 