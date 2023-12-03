import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ title, disabled , callFormData }) => {

  let handleButton = () => {
    callFormData()
  }

  return (
    <>
        <Button onClick={handleButton} disabled={disabled}>
            {
                title
            }
        </Button>
    </>
  )
}

export default ButtonComponent

const Button = styled.button`
    width: 100%;
    padding: 7px 0px;
    border-radius: 4px;
    background:#433798;
    border: 0;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    height: 37px;
    transition: .7s;
    
    &:disabled{
      height: 30px;
      background: #a399e7;
    }
`