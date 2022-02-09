import React from 'react';
import './HeroStyles.css'

const Hero = () => {
  return (
        <div className='hero'>

            <div className="container">

                <div className="content">
                    <h1>Data</h1>
                    <h1 className='blue'>secured</h1>
                    <h1>protection</h1>
                    <div>
                        <button>Learn more</button>
                    </div>
                </div>

            </div>  {/* className="container" */}

        </div>  // className='hero'
    );
};

export default Hero;
