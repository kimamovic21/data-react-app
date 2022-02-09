import React from 'react';
import './CloudStyles.css';

const Cloud = () => {
  return (
        <div className='cloud'>

            <div className="container">

                <div className="content">

                    <h2><span>Cloud</span> security</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur
                         adipisicing elit. Omnis in, ad commodi 
                         eaque fuga amet magni? Alias natus 
                         laborum sint provident aliquid unde
                          minus placeat quis! Est omnis 
                          accusantium mollitia?</p>
                    <div>
                        <button>Sign up</button>
                    </div>

                </div> {/* className="content" */}

            </div>  {/* className="container" */}

        </div>  // className='cloud'
    );
};

export default Cloud;
