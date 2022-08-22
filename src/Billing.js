import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Button from './Button'

const Billing = () => {
  return (
    <div className='home'>
        <Header>Complete your Purchase</Header>
        <Navbar/>
        <hr></hr>
        <form>
            <label>
                Name on Card
                <input type="text" placeholder="Enter the name on your card" name='card-name' required></input>
            </label>
            <br></br>
            <label>
                Card Type
                <select value="card-type" required>
                    <option value="Visa">Visa</option>
                    <option value="Verve">Verve</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
            </label>
            <br></br>
            <div className='row'>
                <label>
                    Card details
                    <input type="number" name='card' placeholder='xxxx xxxx xxxx xxxx' required></input>
                </label>
                <label className='date'>
                    Expiry date
                    <input name='date' type="date" required></input>
                </label>
                <label className='cvv'>
                    CVV
                    <input className='card-cvv' name='cvv' type="text" placeholder="123" required></input>
                </label>
            </div>
            
        <div className='buttons'>
          <Button type="submit">Next</Button>
          <Button type="reset">Cancel Payment</Button>
        </div>

        </form>
    </div>
  )
}

export default Billing