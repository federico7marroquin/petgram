import { useQuery, gql } from '@apollo/client';

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

/**
 * hook que devuelve las fotos filtradas por id de categoría
 * @param { categoryId } id de la categoría
 * @returns { data, error, loading }
 */
 export const useGetPhotos =  categoryId  => {
    return useQuery(GET_PHOTOS, { variables: { categoryId } })
 }
 