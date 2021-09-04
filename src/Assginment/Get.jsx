import React from "react";
import axios from 'axios'
import { useEffect,useState } from "react";

export default function Get(){
    const [getdata,setgetdata]=useState([])

    const handleonClick=(el)=>{
        if(window.confirm("Are you sure to delete  "+el.username))
        axios.delete(`http://15.207.229.231:8000/machstatz/delete_existing_user?email=${el.email}`)
        .then((res)=>{
            return res
        })
        .then((res)=>{
            console.log(res.data)
            alert(el.username+" is deleted sucessfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        async  function get(){
            let res=await axios.get("http://15.207.229.231:8000/machstatz/get_all_users")
            //console.log(res.data)
            setgetdata(res.data)
        }
        get()
        
    }, [getdata])
   
   
    

     
    
    return (<>
    
        
        {getdata.map((el)=>{

            return  <div style={{marginTop:"5px", border:"1px solid red", width:"100px"}} key={el.email}>
                <p style={{textAlign:"center"}}>{el.username}</p><br/>
                <button onClick={  ()=>{
                    handleonClick(el)
                }  
                    
                    //()=>{
                
                    // console.log(el.email)
                    // const em=el.email
                    // if(window.confirm("Are you sure to delete  "+el.username))
                    // axios.delete(`http://15.207.229.231:8000/machstatz/delete_existing_user?email=${em}`
                    // )
                    // .then((res)=>{
                    //     return res
                    // })
                    // .then((res)=>{
                    //     console.log(res.data)
                    //     alert(el.username+" is deleted sucessfully")
                    // })
                    // .catch((err)=>{
                    //     console.log(err)
                    // })
                //}
                } >Delete</button>    
            </div>
            
            
            
        })}
        
     
    </>)
    
   
}