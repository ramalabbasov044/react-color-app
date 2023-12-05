/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { useGlobalStore } from '../../../provider/provider'
import { useNavigate } from 'react-router-dom'
import Router from '../../../constants/router/index'
const CardComponent = ({ colorsData }) => {
    let navigate = useNavigate()
    const { setActiveItem } = useGlobalStore()
    const showItem = (item) => {
        setActiveItem(item)
        navigate(Router.product)
    }
    return (
        <>
            {
                colorsData?.map((item) => (
                    <Card onClick={() => showItem(item)} style={{background:item.code}}>
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
    border: 1px solid darkgray;cursor: pointer;
`