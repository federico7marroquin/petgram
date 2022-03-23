import { GetFavoritesWithQuery } from '../containers/GetFavoritesWithQuery'
import { Layout } from '../components/Layout'

const Favs = () => {
    return (
        <>
            <Layout title="your favorites" subtitle="Here you can find your favorite pics">
                <GetFavoritesWithQuery />
            </Layout>
        </>
    )
}

export default Favs;