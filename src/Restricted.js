import {react} from 'react'

export const  Restricted = ({history})=>{
    
    return <div>
      <h1>
          Access Is restricted. 
      </h1>
      <button onClick = {()=>history.replace('/')}>
          Go to Main Page
      </button>
        
    </div>

}

export default Restricted