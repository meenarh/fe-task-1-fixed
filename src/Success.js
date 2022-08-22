import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import {FcCheckmark} from 'react-icons/fc'

const Success = () => {
  return (
    <div className='home'>
        <Card className="success-card"> 
            <Card.Body>
                <FcCheckmark style={{width: '50px', height:'50px', marginTop:'15px'}}/>
                <h2>Purchase Completed</h2>
                <p className='info'>Please check your email for details concerning this transaction</p>
                <Link to="\" className='back'>Return Home</Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Success