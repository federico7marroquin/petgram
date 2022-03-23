import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { useParams } from 'react-router'
import { Layout } from '../components/Layout'

const Detail = () => {
    const params = useParams();
    return <Layout title={`Fotografía ${params.id}`}>
        <PhotoCardWithQuery id={params.id} />
    </Layout>
}

export default Detail