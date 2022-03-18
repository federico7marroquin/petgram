import { useGetPhotos } from '../hooks/useGetPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards';
import PropTypes from 'prop-types'

export const ListOfPhotoCards = ({ categoryId }) => {
    const photos = useGetPhotos(categoryId)

    return <ListOfPhotoCardsComponent {...photos} />

}

ListOfPhotoCards.propTypes = {
    categoryId: PropTypes.number
}