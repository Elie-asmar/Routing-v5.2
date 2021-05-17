import {react,useState} from 'react'
import { Switch } from 'react-router'

export const  Login = ({history})=>{

    const [key,setKey] = useState(null)

    if (sessionStorage.getItem("key")){
        history.push('Full')
        return <>
        </>
    }
    else{
        return <>
        <div>
            <button onClick = {()=>{
                sessionStorage.setItem("key","1")
                setKey('1')
            }}>
                Set Login Auth
            </button>
            <button onClick = {()=>{
                sessionStorage.clear()
                setKey(null)
            }}>
                Delete Login Auth
            </button>
            
        </div>
    </>
    }
  
}

export default Login