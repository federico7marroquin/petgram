import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export const Home = () => {
    const params = useParams()
    return (
        <>
            <Helmet>
                <title>Petgram- your pets pics </title>
                <meta name='description' content="with petgram you can find photos of beautiful pets" />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id} />
        </>)
}