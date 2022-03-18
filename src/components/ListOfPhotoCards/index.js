import { PhotoCard } from '../PhotoCard'
import PropTypes from 'prop-types'

export const ListOfPhotoCardsComponent = ({data, error, loading }) => {

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id}
          {...photo}
        />
      ))}
    </ul>
  )
}

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool
}




