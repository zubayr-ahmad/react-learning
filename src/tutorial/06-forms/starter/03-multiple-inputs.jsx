import { useState } from 'react';
const MultipleInputs = () => {
  const [user, userState] = useState({name: '', email: '', password: ''});
  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    // Just like dict[key] = value in python
    userState({...user, [key]: value});
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user);
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name="name" onChange={changeHandler}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name="email" onChange={changeHandler} />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' name="password" onChange={changeHandler} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
