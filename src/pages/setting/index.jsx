/* eslint-disable react/jsx-key */
import Header from '../../components/Static/Header/index'
import PageTitle from '../../components/Static/PageTitle/index'
import Button from '../../components/Static/Button/index'
import Input from '../../components/Static/Input/index'
import { useGlobalStore } from '../../provider/provider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const Setting = () => {
    const navigate = useNavigate()
    const { setColorsData } = useGlobalStore()

    // states
    const [data,setData] = useState([])
    const [colorData, setColorData] = useState({ name: '' , code: '' });
    const [groupName, setGroupName] = useState("")
    const [name,setName] = useState("")

    const handleInputChange = (name, value) => {
      setColorData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const callFormData = () => {
      if (data.length < 6) {
          setData((prevData) => [...prevData, colorData]);
          setColorData({ name: '', code: '' });
      }else{
         toast("Maksimum reng sayi 6-ya beraber ola bilər")
         setColorData({ name: '', code: '' });
      }
    }

    const saveInputChange = (e) => {
      setName(e.target.value)
    }

    const callInputColor = () => {
      setGroupName(name)
    }

    const saveAllData = () => {
        const obj = {
            name: groupName,
            colors: data
        }
        setColorsData(obj)
        navigate("/")
    }

    let arr = Object.values(colorData)
    let isDisabled = arr.every(item => item !== "")
    
    return (
        <Wrapper>
          <Header />

          <Container>
            <PageTitle title={"Setting Page"} />


            <Bottom>
                <CreateColorForm>

                  <InputsBody>
                      <Input
                          type={"text"} 
                          name={"name"} 
                          placeholder={"Color Name"} 
                          value={colorData.name} 
                          onInputChange={handleInputChange} 
                      />

                      <Input
                          type={"text"} 
                          name={"code"} 
                          placeholder={"Color Code"} 
                          value={colorData.code} 
                          onInputChange={handleInputChange} 
                      />
                  </InputsBody>

                  <ButtonBody>
                      <Button 
                          disabled={ !isDisabled }
                          title={"Log in"} 
                          callFormData={callFormData}
                      />
                  </ButtonBody>

                  <GroupNameForm>
                      <GroupNameInput
                            type="text"
                            value={name} 
                            placeholder={"Group Name"} 
                            onChange={saveInputChange} 
                      />
                      <SaveButton disabled={!name} onClick={callInputColor}>
                          Save
                      </SaveButton>
                  </GroupNameForm>
                </CreateColorForm>

                <ShowColorForm>
                    Group Name : {
                      groupName
                    }

                    <ColorsCardBody>
                      {
                        data.map((item) => (
                          <Card style={{background: "#" + item.code}}>
                            {
                              item.name
                            }
                          </Card>
                        ))
                      }
                    </ColorsCardBody>

                    <SaveAllDataButton onClick={saveAllData} disabled={ (data.length < 6 || groupName == "") }>
                        Save All Data
                    </SaveAllDataButton>
                </ShowColorForm>
            </Bottom>
          </Container>

          <ToastContainer />
        </Wrapper>
    )
}

export default Setting

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 70px;
`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 35px;
`

const CreateColorForm = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
`

const InputsBody= styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ButtonBody = styled.div`
    margin-top: 20px;
`

const ShowColorForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 65%;
`

const ColorsCardBody = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3,1fr)
`

const Card = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 20px;
    padding: 20px;
    color: darkgray;
    border: 1px solid darkgray;
`

const GroupNameInput = styled.input`
    width: 100%;
    padding: 12px 13px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    background: #fff;
    color: #959595;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    
    &::placeholder{
      color: #959595;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
`

const SaveButton = styled.button`
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

const GroupNameForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
`

const SaveAllDataButton = styled.button`
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