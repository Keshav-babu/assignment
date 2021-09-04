import {React,useState} from "react";
import axios from "axios";

export default function Post(){
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    



    return (<>
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("for,m")
        let payload={
            email:email,
            first_name:fname,
            last_name:lname,
            pwd:password,
            username:fname+" "+lname
        }
        console.log(payload)
        axios.post("http://15.207.229.231:8000/machstatz/add_new_user",
            payload)
            .then((res)=>{
                console.log(res)
                console.log("kllllllllll")
            })
            .catch((err)=>{
                window.alert("User with provided email or username is already exist.")
                console.log(err)
                
            })
    }}>
        <label>First Name</label><br/>
        <input type="text" onChange={(e)=>{
            setfname(e.target.value)
        }} /><br/>
        <label>Last Name</label><br/>
        <input type="text" onChange={(e)=>{
            setlname(e.target.value)
        }} /><br/>
        <label>Email</label><br/>
        <input type="text" onChange={(e)=>{
            setemail(e.target.value)
        }} /><br/>
        <label>Passwoord</label><br/>
        <input type="text" onChange={(e)=>{
            setpassword(e.target.value)
        }} /><br/> 
        
        <input type="submit" value="Submit" />
        </form>
        
        
    
    </>)

}