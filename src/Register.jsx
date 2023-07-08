
import './Register.css';

const Register = () => {
  

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form >
        <input
          type="text"
          placeholder="Name"
         
        />
        <input
          type="email"
          placeholder="Email"
          
        />
        <input
          type="number"
          placeholder="Age"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
