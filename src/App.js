import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div classname="input_button">
        <button classname="button_91">+91</div>
        <input type="text" maxLength="10" id="mobile" placeholder="Enter the mobile number"></input>
        </div>
        
        <div className="continue_button" onClick={()=>{
          let m=document.getElementById("mobile").value;
          const option = {
            method: 'POST',
            header: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
            "token":"717dc2d82d86be210bef206cf512dba9",
              "mobile":{m},
              "action": "Signin_or_Signup",
              "timestamp": 1652446231059
            })
          };
          fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
            .then(response => console.log(response.json()))
            .then(data => console.log(data));
          }}>Continue</div>




        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
