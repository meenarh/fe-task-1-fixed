import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Card from 'react-bootstrap/Card'
import Button from './Button'
import { Link } from 'react-router-dom'

const Confirm = () => {
  return (
    <div className='home'>
        <Header>Complete your Purchase</Header>
        <Navbar/>
        <hr></hr>
        <Card>
            <Card.Header>
                <p className='p1'>Item Name</p>
                <p>₦ Price</p>
            </Card.Header>
            <Card.Body>
                <div className='body'>
                    <p>Data science and usability</p>
                    <p className='price'>50,000.00</p>
                </div>
                <div className='body'>
                    <p>Shipping</p>
                    <p className='price2'>0.00</p>
                </div>
                <hr></hr>
                <div className='total'>
                    <p>Total</p>
                    <p className='price'>50,000.00</p>
                </div>
                                
            </Card.Body>
        </Card>

        <form>
            <div className='buttons'>
                <Button type="submit"><Link className='link' to="/success">Pay</Link></Button>
                <Button type="reset">Cancel Payment</Button>
            </div>
        </form>
        

    </div>
  )
}

export default Confirm