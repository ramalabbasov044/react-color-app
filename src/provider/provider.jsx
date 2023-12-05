import { createContext , useContext , useState } from 'react'

export const globalContext = createContext()


export const useGlobalStore = () => {
    const value = useContext(globalContext)
    return value
}

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [colorsData,setColorsData] = useState([])
    const Component = globalContext.Provider
    
    const values = {
        colorsData,
        setColorsData,
    }

    return (
        <Component value={values}>
            {
                children
            }
        </Component>
    )
}

export default Provider