import React, {useState, useEffect} from 'react'

 function UsersTest() {
     const [users, setUsers] = useState([]);

     useEffect(() => {
         fetch("/api/user/").then(res => {
             if(res.ok)
             return res.json()
             
         }).then(jsonRes => console.log(jsonRes))})

  return (
    <div>
      <p></p>
    </div>
  )
}

export default UsersTest;