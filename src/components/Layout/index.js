import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { Main, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                {title && <title>{title} | Petgram 🐶</title>}
                {subtitle && <meta name="description" content={subtitle} />}
            </Helmet>
            <Main>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
}