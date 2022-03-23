import PropTypes from 'prop-types'
import { Img, Picture, Article } from './styles'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { FavButton } from '../FavButton'
import { useLikeMutation } from '../../hooks/useLikeMutation'
import { Link } from 'react-router-dom'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'



export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {

  const [elementContainer, isIntersected] = useIntersectionObserver()
  const [toggleLike] = useLikeMutation()

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={elementContainer}>
      {isIntersected && (
        <>
          <Link to={`/detail/${id}`}>
            <Picture>
              <Img src={src} />
            </Picture>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  likes: function(props, propName){
    const propValue = props[propName]
    if(propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }
    if(propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  },
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
}
