import { useGlobalStore } from '../../provider/provider'
import Header from '../../components/Static/Header/index'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'   
const ProductPage = () => {
    const { activeItem } = useGlobalStore()
    const navigate = useNavigate()

    useEffect(() => {
        if(activeItem.length == 0){
            navigate("/setting")
            console.log("a");
        }else{
            navigate("/product")
        }
    },[activeItem])
    return (
        <>
            <Header />
            <GoBackButton onClick={() => navigate(-1)} style={{background:activeItem.code}}>
                Go Back
            </GoBackButton>   
            <CardBody>
                
                {
                    <Card style={{background:activeItem.code}}>
                            {
                                activeItem.name
                            }
                    </Card>
                }
            </CardBody>
        </>
    )
}

export default ProductPage

const Card = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    width: 800px;
    height: 400px;
    color: #fff;
    margin-top: 40px;
    font-size: 30px;
`

const CardBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const GoBackButton = styled.div`
    padding: 20px;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
`