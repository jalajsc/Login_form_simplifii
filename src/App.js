import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="input_box">
        <button id="buttoni">+91</button>
        <input type="text" maxLength="10" id="mobile" placeholder="Enter the mobile number"></input>
        </div>
        
        <div className="continue_button" onClick={()=>{
          let m=document.getElementById("mobile").value;
          const options = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
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

          <div class="bottom_line">
          <p>By continuing you agree to our</p>
          <p id="TermService">Terms of Servie & Privacy Policies</p> 
          </div>

        <input id="partition" type="text" maxlength="4" />
      </header>
    </div>
  );
}

export default App;
