import { useGetFavorites } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';


export const GetFavoritesWithQuery = () => {
    const favorites = useGetFavorites();

    return <ListOfFavs {...favorites} />

}