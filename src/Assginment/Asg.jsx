import React from 'react'
import Get from './Get'
import Post from './Post'

export default function Asg(){
    return(<>
        <div style={{display:"grid",border:"5px solid green",width:"400px",margin:"auto",gridTemplateColumns:"repeat(3,auto)",gap:"auto"}}>
      <Get/>
      
    </div>
    <div style={{width:"400px",margin:"50px auto",border:"1px solid green",display:"grid"}} >< Post/></div>
    </>)
}
    
