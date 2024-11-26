import { useNavigate } from "react-router-dom"
import "./index.css"
import { useContext ,useState} from "react"
import { UserContext } from "../../App"


const Update = () => {
const navigate=useNavigate()
const {Data,editId,updateData}=useContext(UserContext)
const data=Data.filter(each=>each.id===editId) 

const [name,setName]=useState(data[0].name);
    const [email,setEmail]=useState(data[0].email);
    const [phone,setPhone]=useState(data[0].phone);
    const [role,setRole]=useState(data[0].role);




const goBack=()=>{
    navigate("/users")

}

const updateUser=(e)=>{
    e.preventDefault()
    const newData={name,email,phone,role}
updateData(newData)
}

  return (
    <div className="update-container">
    <h1 className="heading">update User</h1>
    <form className="form-fields-container" onSubmit={updateUser} >
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
                <option value="Staff" >Staff</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
                <option value="Guest">Guest</option>
            </select>
        </div>
        <div className="btn-container">
            <button type="submit" className="submit">Update</button>
            <button type="button" className="back" onClick={goBack}>Back</button>
        </div>
    </form>
    </div>
  )
}



export default Update