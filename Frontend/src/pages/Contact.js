import React from 'react'
// import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import userPlaceholder from '../assets/images/profile-placeholder.png'

const Contact = () => {
  return (
    <div>
      {/* Banner Container */}
      <Container>
        <img alt='' src=''></img>
        <h2>Main Avatar</h2>
      </Container>

      {/* Profile Container */}
      <Container>
        <div>
          <div className='card-group'>
            <div className='card'>
              <img alt='' src={userPlaceholder} className='profile-picture'></img>
            </div>
            <div className='card'>
              <p>
                Make this an input...
              </p>
            </div>
          </div>
          <br></br>
          <div className="card-group">
            {/* <Button className='card profile-btn'>Favorite Recipes</Button>
            <Button className=' card profile-btn'>My Recipes</Button> */}
          </div>
      </div>
      </Container>
      </div>
  )
}

export default Contact