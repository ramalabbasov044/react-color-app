import { setColorDetail , deleteColor } from '../../store/setColor'
import PageTitle from '../../components/Static/PageTitle/index'
import Header from '../../components/Static/Header/index'
import styled from 'styled-components'
import Card from '../../components/Static/Card/index'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const colorsData = useSelector((state) => state.colors.colors)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setColorDetailF = (item) => {
        dispatch(setColorDetail(item))
        navigate("/product")
    }

    let removeCard = (index) => {
        let a = colorsData.filter((item,i) => i !== index)
        dispatch(deleteColor(a));
    }
    
    return (
      <Wrapper>
          <Header />

          <Container>
              <PageTitle title={"Home Page"} />

              <PageTitle title={colorsData ? "" : "Hec bir dataniz yoxdur"} />

              <AllCardBody>
                    {
                        colorsData.map((item,index) => (
                            <CardItemBody key={item.name}>
                                <CardBody onClick={() => setColorDetailF(item)} >
                                    <Card colorsData={item.colors} />
                                </CardBody>
                                <CardName>
                                    {
                                    item.name
                                    }
                                </CardName>

                                <DeleteCardButton onClick={() => removeCard(index)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#FF4F4F"></path>
                                        <path d="M15 9L9 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M15 15L9 9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </DeleteCardButton>
                            </CardItemBody>
                        ))
                    }
              </AllCardBody>
          </Container>
      </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    padding: 48px 70px;
    display: flex;
    flex-direction: column;
    background: blue;
`

const CardName = styled.span`
    color: #000;
    font-weight: 500;
    font-size: 14px;
`

const CardBody = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    border-radius: 4px;
`

const CardItemBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    width: fit-content;
    cursor: pointer;
`

const AllCardBody = styled.div`
    display: flex;
    gap: 30px;
`

const DeleteCardButton = styled.button`
    border: 0;
    position: absolute;
    background: transparent;
    top: -10px;
    right: -10px;
    cursor: pointer;
`