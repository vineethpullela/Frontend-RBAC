import { useContext, useState } from "react";
import "./index.css"
import { useNavigate} from "react-router-dom"
import { UserContext } from "../../App";



// const data=[{
//     "id":1,
//     "code":"Admin User",
//     "name":"vineeth",
//     "email":"vineeth123@",
//     "phone":9550174358,
//     "action":"active"},
//     {
//         "id":2,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
//     {
//         "id":3,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
//     {
//         "id":4,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
//     {
//         "id":5,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
//     {
//         "id":6,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
//     {
//         "id":7,
//         "code":"Admin User",
//         "name":"vineeth",
//         "email":"vineeth123@",
//         "phone":9550174358,
//         "action":"active"
//     },
// ]


const UsersList = () => {
    const navigate=useNavigate();
    const {Data,changeEditId,deleteUser}=useContext(UserContext);
    // const [userData,setUserData]=useState(Data)
   

const addUser=()=>{
    navigate("/adduser")

}

const editUser=(id)=>{
    changeEditId(id)
    navigate("/update")
}

  return (
    <div>
<div class="user-listing">
<div className="user-listing-headers">
    <h2>User Listing</h2>
    <button type="button" className="add-btn" onClick={addUser}>Add User[+]</button>
</div>
    <div class="table-header">
      <p class="table-cell">Code</p>
      <p class="table-cell">Name</p>
      <p class="table-cell">Email</p>
      <p class="table-cell">Phone</p>
      <p class="table-cell">Role</p>
      <p class="table-cell">Action</p>
    </div>
    {Data.map((each)=>{
        return ( <div key={each.id} class="table-row">
        <p className="table-cell">{each.id}</p>
      <p class="table-cell">{each.name}</p>
      <p class="table-cell">{each.email}</p>
      <p class="table-cell">{each.phone}</p>
      <p class="table-cell">{each.role}</p>
      <div class="table-cell">
        <button class="edit-button" onClick={()=>editUser(each.id)} >Edit</button>
        <button class="delete-button" onClick={()=>deleteUser(each.id)}>Delete</button>
      </div>
      
    </div>)
    })}
   
  </div>

    </div>
  )
}



export default UsersList