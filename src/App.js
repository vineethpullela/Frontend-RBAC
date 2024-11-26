//import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route, Link} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import UsersList  from './components/UsersList';
import AddUser  from './components/AddUser';
import Update from './components/Update';
import { createContext, useState } from 'react';

export const UserContext=createContext();

const data=[{
  "id":1,
  "role":"Admin",
  "name":"vineeth",
  "email":"vineeth123@",
  "phone":9550174358
  },
  {
      "id":2,
      "role":"Student",
      "name":"Nancy",
      "email":"Nancy@.com",
      "phone":88975486
     
  },
  {
      "id":3,
      "role":"Guest",
      "name":"Preveen",
      "email":"Preveen@123",
      "phone":99988748
  },
  {
      "id":4,
      "role":"Admin",
      "name":"Keerthi",
      "email":"Keerthi@123.com",
      "phone":28385162
  },
  {
      "id":5,
      "role":"Student",
      "name":"Rajesh",
      "email":"Rajesh@gmail.com",
      "phone":91216841
  },
  {
      "id":6,
      "role":"Admin",
      "name":"Vedika",
      "email":"vedika@gmail.com",
      "phone":887799445
  },
  {
      "id":7,
      "role":"Student",
      "name":"priya",
      "email":"priya5867@gmail.com",
      "phone":996655223
  },
]


function App() {
  const [Data,setData]=useState(data);
  const [editId,setID]=useState("");

  const changeEditId=(id)=>{
    setID(id)
  }

const addNewUser=(user)=>{
  console.log(user)
  setData(prevSate=>[...prevSate,{...user}])
}

const deleteUser=(id)=>{
  setData((prevData)=>{
    return prevData.filter((item)=>item.id!==id);
  });
};

const updateData=(data)=>{
  
  setData((prevData)=>{
    if(!prevData){
      console.warn("data is not yet available for update")
        return prevData
    }
    const {name,email,phone,role}=data
    return prevData.map((each)=>(each.id===editId?{...each,name,email,phone,role}:each));
  });
  
}
console.log(data)

  return (<UserContext.Provider value={{Data,addNewUser,editId,changeEditId,updateData,deleteUser}}>
    
    <div className='app-container'>
    <div className='headers'>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/users">Users</Link>
    </div>
   <Routes>
   <Route path="/" Component={Home}/>
    <Route path="/users" Component={UsersList}/>
    <Route path='/adduser' Component={AddUser}/>
    <Route path="/update" Component={Update}/>
   </Routes>
    
   
    
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
/** <Route path="/add" Component={Home}/>
    <Route path="/users" Component={UsersList}/> */