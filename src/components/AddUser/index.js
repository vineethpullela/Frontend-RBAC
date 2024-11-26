import { useNavigate } from "react-router-dom"
import "./index.css"
import { useContext, useState } from "react"
import { UserContext } from "../../App"


const AddUser = () => {
    const navigate=useNavigate()
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [role,setRole]=useState("admin");
    const {Data,addNewUser}=useContext(UserContext)
    
   


    const addUser=(e)=>{
        e.preventDefault()
        
        const data={
           id:Data.length+1,
           
            name,email,phone,role
        }
        console.log(data)
        addNewUser(data)
        setName("")
        setEmail("")
        setPhone("")
        setRole("")
        
        
    }




    const goback=()=>{
        navigate("/users")
    }
  return (
    <div className="adduser-container">
    
        <h1 className="heading">Add User</h1>
    <form className="form-fields-container" onSubmit={addUser}>
        <div className="input-container">
            <label htmlFor="name" className="label">Name</label>
            <input id="name"  type="text" className="input" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="input-container">
            <label htmlFor="email" className="label">Email</label>
            <input id="email"  type="text" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className="input-container">
            <label htmlFor="phone" className="label">Phone</label>
            <input id="phone"  type="text" className="input" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
        </div>
        <div className="input-container">
            <label htmlFor="role" className="label">Role</label>
            <select id="role" className="input"value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="Staff" selected>Staff</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
                <option value="Guest">Guest</option>
            </select>
        </div>
        <div className="btn-container">
            <button type="submit" className="submit">Submit</button>
            <button type="button" className="back" onClick={goback}>Back</button>
        </div>
    </form>
    </div>
  )
}



export default AddUser