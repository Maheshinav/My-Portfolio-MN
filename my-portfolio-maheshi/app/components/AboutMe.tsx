import React from 'react';

const AboutMe = () => {
  return (
    <div id="about-me" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          {/* The button here can lead to a detailed section, a CV download, or any other call to action */}
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
