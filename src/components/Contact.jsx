import React from 'react';
import './ContactStyles.css';

const Contact = () => {
  return (
        <div className='contact'>

            <div className="container">

                <div className="form-container">

                    <form>
                        <h1><span>Contact</span> us</h1>
                        <div>
                            <label>Name</label>
                            <input type='text'
                                   placeholder='Enter you name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='text'
                                   placeholder='Enter you email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='5' cols='10'
                                      placeholder='Enter your message'>
                            </textarea>                                   
                        </div>
                        <button>Submit</button>
                    </form>

                </div>  {/* className="form-container" */}

            </div>  {/* className="container" */}

        </div> // className='contact'
    );
};

export default Contact;
