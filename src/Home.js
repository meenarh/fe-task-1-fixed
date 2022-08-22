import './App.css';
import Button from './Button';
import Header from './Header';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="home">
      <Header>Complete your Purchase</Header>
      <Navbar/>

      <hr></hr>
      <form>
        <label>
          Name
          <input type="text" name='name' placeholder="Enter your name"></input>
        </label>
        <br></br>
        <label>
          Email
          <p>The purchase receipt would be sent to this address</p>
          <input type="email" name="email" placeholder="Enter your email address" required></input>
        </label>
        <br></br>
        <label>
          Address 1
          <input type="text" name="address" placeholder='The address of the user goes here'></input>
        </label>
        <br></br>
        <label>
          Address2
          <input type="text" name="address" placeholder='and here'></input>
        </label>
        <br></br>
        <div className='row'>
          <label>
          Local Government
          <input type="text" name="lga" placeholder="Enter your local government area"></input>
          </label>
          <label className='state'>
            State
          <select value="state">
            <option value="State">State</option>
            <option value="Lagos">Lagos</option>
            <option value="Ibadan">Ibadan</option>
            <option value="portharcourt">Port Harcourt</option>
          </select>
          </label>
        </div>

        <div className='buttons'>
          <Button type="submit">Next</Button>
          <Button type="reset">Cancel Payment</Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
