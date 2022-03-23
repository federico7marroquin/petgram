import React from 'react'
import { useGetPhotos } from '../hooks/useGetPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards';
import PropTypes from 'prop-types'

export const ListOfPhotoCardsComponents = ({ categoryId }) => {
    const photos = useGetPhotos(categoryId)

    return <ListOfPhotoCardsComponent {...photos} />

}

ListOfPhotoCardsComponents.propTypes = {
    categoryId: PropTypes.string
}

export const ListOfPhotoCards = React.memo(ListOfPhotoCardsComponents, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})