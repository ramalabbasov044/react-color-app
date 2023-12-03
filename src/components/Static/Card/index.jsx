/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components'

const CardComponent = ({ colorsData }) => {

  return (
    <>
        {
            colorsData?.map((item) => (
                <Card style={{background: item.code}}>
                    {
                        item.name
                    }
                </Card>
            ))
        }
        
    </>
  )
}

export default CardComponent

const Card = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 20px;
    padding: 20px;
    color: darkgray;
    border: 1px solid darkgray;
`