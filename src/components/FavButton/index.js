import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick}) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    return (
        <Button onClick={onClick}>
            <Icon size="25px" />
            {likes} likes!
        </Button>
    )
}

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}