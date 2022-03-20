import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const Home = () => {
    const params = useParams()
    return (
        <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id} />
        </>)
}