import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})
const UserList = () => {
     const [users, setUsers] = useState([]);
     useEffect(() => {
         api.get('/').then(res=>{
             setUsers(res.data)
         })
         
     }, [])
     console.log(users)
    return (
        <div>
            <ListGroup variant="flush" className='userList'  >
            {users.map((user)=>{
                return <ListGroup.Item  className='user' key={user.id}><span className='text'>Total Name : </span><span>{user.name} {user.username}</span><br/>
                       <span className='title'> Email :</span> <span>{user.email}</span>
                        </ListGroup.Item>
                        
            
            })
            }
                
            </ListGroup>
        </div>
    )
}

export default UserList
