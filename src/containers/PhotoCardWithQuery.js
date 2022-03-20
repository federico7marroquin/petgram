import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'
import PropTypes from 'prop-types'

export const PhotoCardWithQuery = ({ id }) => {

    const { data = { photo: {} }, error, loading } = useGetSinglePhoto(id)
    const { photo = {}} = data
    
    if (error) {
        return <h2>Internal Server Error</h2>
    }
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <PhotoCard {...photo} /> 
    )

}

PhotoCardWithQuery.propTypes = {
    id: PropTypes.string
}