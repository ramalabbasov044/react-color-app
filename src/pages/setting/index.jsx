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
        [name]: value
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
        setColorsData((prev) => [...prev,obj])
        navigate("/")
    }

    let arr = Object.values(colorData)
    let isDisabled = arr.every(item => item !== "")

    const removeImage = (index) => {
      setData(data.filter((item,i) => i !== index));
    }

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
                          title={"Save Colors"} 
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
                        data.map((item,index) => (
                          <Card style={{background: item.code}}>
                            {
                              item.name
                            }
                            <DeleteButton onClick={() => removeImage(index)}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#FF4F4F"/>
                                    <path d="M15 9L9 15" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 15L9 9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                            </DeleteButton>
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
    border-radius: 10px;
    padding: 20px;
    color: darkgray;
    border: 1px solid darkgray;
    position: relative;
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

const DeleteButton = styled.button`
    position: absolute;
    border: 0;
    background: transparent;
    width: 24px;
    height: 24px;
    top: -10px;
    right: -10px;
    cursor: pointer;
`