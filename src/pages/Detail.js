import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { useParams } from 'react-router'

export const Detail = () => {
    const params = useParams();
    return <PhotoCardWithQuery id={params.id}/>
}