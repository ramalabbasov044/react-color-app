import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title }) => {
  return (
    <>
        <Title>
            {
                title
            }
        </Title>
    </>
  )
}

export default PageTitle

const Title = styled.p` 
    color: #221c50;
    font-weight: 500;
    font-size: 38px;
    margin-bottom: 15px;
`