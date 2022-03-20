import PropTypes from 'prop-types'
import { Img, Picture, Article } from './styles'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { FavButton } from '../FavButton'
import { useLikeMutation } from '../../hooks/useLikeMutation'
import { Link } from 'react-router-dom'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

  const key = `like-${id}`
  const [liked, setLocalStorage] = useLocalStorage(key, false)
  const [elementContainer, isIntersected] = useIntersectionObserver()
  const [toggleLike] = useLikeMutation()

  const handleFavClick = () => {
    !liked && toggleLike({
      variables: {
        input: { id }
      }
    })
    setLocalStorage(!liked)
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
  likes: PropTypes.number,
  src: PropTypes.string,
  id: PropTypes.string,
}
