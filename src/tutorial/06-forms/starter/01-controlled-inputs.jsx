import { useState } from 'react';
const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // do some logic
    console.log(name, email);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" className="form-input" value={name} onChange={handleChange}/>
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type="email" id="email" className="form-input" value={email} onChange={handleChange} />
      </div>
        <button type="submit" className="btn btn-block">Submit</button>
    </form>
  )
};
export default ControlledInputs;
