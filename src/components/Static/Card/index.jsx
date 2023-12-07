/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components'
const CardComponent = ({ colorsData }) => {
    return (
        <>
            {
                colorsData?.map((item) => (
                    <Card style={{background: item.code}}></Card>
                ))
            }
        </>
    )
}

export default CardComponent

const Card = styled.div`
    width: 60px;
    height: 60px;
    color: darkgray;
`