import styled from "styled-components"
import Logo from '../../Icons/Logo/index'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
      <Wrapper>
          <Left>
            <Logo />
          </Left>

          <Right>
              <Navbar>
                  <ListBody>
                    <ListItem onClick={() => navigate("/")}>
                        Home
                    </ListItem>
                    <ListItem onClick={() => navigate("/setting")}>
                        Setting
                    </ListItem>
                  </ListBody>
              </Navbar>
          </Right>
      </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    padding: 24px 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #221c50;
`

const Left = styled.div``

const Right = styled.div`
    display:flex;
`
const Navbar = styled.nav`
    display: flex;
`

const ListBody = styled.ul`
    display:flex;
    gap: 26px;
`

const ListItem = styled.li`
    list-style-type: none;
    color: #221c50;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`