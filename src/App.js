import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
    <div className="box">
      <div className='form'>
        <h2>Sign in</h2>
        <div className='inputbox'>
<input type="text" required="required"/>
<span>Username</span>
<i></i>
        </div>
        <div className='inputbox'>
<input type="password" required="required"/>
<span>Password</span>
<i></i>
        </div>
        <div className='links'>
<a href='#'>Forgot Password</a>
<a href='#'>SignUp</a>
        </div>
        <input type="submit" value="Login"/>
      </div>
     </div>
     </div>
  );
}

export default App;
