import PageTitle from '../../components/Static/PageTitle/index'
import { useGlobalStore } from '../../provider/provider'
import Header from '../../components/Static/Header/index'
import styled from 'styled-components'
import Card from '../../components/Static/Card/index'

const Home = () => {
  const { colorsData } = useGlobalStore()

  return (
    <Wrapper>
        <Header />

        <Container>
            <PageTitle title={"Home Page"} />

            <PageTitle title={colorsData ? "" : "Hec bir dataniz yoxdur"} />

            <CardName>
              {
                colorsData?.name
              }
            </CardName>
            <CardBody>
              <Card colorsData={colorsData?.colors} />
            </CardBody>
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
`

const CardName = styled.p`
    margin-bottom: 20px;
    margin-top: 20px;  
`

const CardBody = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
`