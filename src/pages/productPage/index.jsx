/* eslint-disable react/jsx-key */
import Header from '../../components/Static/Header/index'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const ProductPage = () => {
    const navigate = useNavigate()
    const colorDetail = useSelector((state) => state.colors.colorDetail)
    console.log(colorDetail);
    // useEffect(() => {
    //     if(activeItem.length == 0){
    //         navigate("/setting")
    //         console.log("a");
    //     }else{
    //         navigate("/product")
    //     }
    // },[activeItem])

    const copyColorCodeF = (code) => {
        navigator.clipboard.writeText(code);
        toast.success("Copied to Clipboard: " + code);
    }
    return (
        <>      
            <ToastContainer />

            <Header />

            <GoBackButton onClick={() => navigate(-1)} >
                Go Back
            </GoBackButton>   

            <CardBody>
                {
                    colorDetail.colors.map((item) => (
                        <CardItem>
                            <Card style={{background: item.code}}>
                                <CardTitle>
                                    {
                                        item.name
                                    }
                                </CardTitle>
                                <CopiedTitle onClick={() => copyColorCodeF(item.code)}>
                                    Copy Color
                                </CopiedTitle>
                            </Card>
                        </CardItem>
                    ))
                }
            </CardBody>
        </>
    )
}

export default ProductPage

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
`

const Card = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    width: 100%;
    height: 400px;
    color: #fff;
`

const CardTitle = styled.p`
    font-weight: 500;
    font-size: 28px;
`

const CardBody = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 100px;
    gap: 20px;
`

const GoBackButton = styled.div`
    padding: 20px;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    background: blue;
`

const CopiedTitle = styled.p`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    cursor: pointer;
`