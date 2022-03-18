import PropTypes from 'prop-types'
import { Img, Picture, Article, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  
  const key = `like-${id}`
  const [liked, setLocalStorage] = useLocalStorage(key, false)
  const [elementContainer, isIntersected] = useIntersectionObserver()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={elementContainer}>
      {isIntersected && (
        <>
          <a href={`/?detail=${id}`}>
            <Picture>
              <Img src={src} />
            </Picture>
          </a>
          <Button onClick={setLocalStorage}>
            <Icon size="25px" />
            {likes} likes!
          </Button>
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
