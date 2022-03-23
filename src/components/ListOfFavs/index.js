import PropTypes from 'prop-types'
import { Grid, Image, Link } from './styles'


export const ListOfFavs = ({ data, loading, error }) => {


    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

    return (
        <Grid>
            {
                data.favs.map(fav => <Link to={`/detail/${fav.id}`} key={fav.id}>
                    <Image src={fav.src} />
                </Link>)
            }
        </Grid>
    )
}

ListOfFavs.propTypes = {
    data: PropTypes.shape({
        favs: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired
            })
        )
    }),
    loading: PropTypes.bool,
    error: PropTypes.bool
}