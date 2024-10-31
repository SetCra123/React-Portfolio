import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




// const Logo = () => {
//     return (
//             <DotLottieReact
//               src="path/to/animation.lottie"
//               loop="true"
//               autoplay="true"
//             />
//           );   
// };       

// export default Logo;


// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Logo = () => {
  return (
    <DotLottieReact
      src="/animation.json" // Path relative to the public folder
      loop
      autoplay
      style={{ width: '500px', height: '500px', marginTop: '-95px' }}
    />
  );
};

export default Logo;