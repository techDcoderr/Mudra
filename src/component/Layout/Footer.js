import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer fixed-bottom py-3 text-light" style={{backgroundColor:"black"}}>
      <div className="container text-center " >
        <p className="text" >&copy;MudRa. All rights reserved.</p>
<b>Contact Us on +919589871973  &nbsp;&nbsp;&nbsp; Gmail: himanithakur0909@gmail.com </b><x className="mx-3"></x>
<br/>
<b>Contact Us on +919009608232  &nbsp;&nbsp;&nbsp; Gmail: nitconquer2020@gmail.com </b><x className="mx-3"></x>
{/* <Link to="/about" className='text-light'><b>About Us</b></Link> */}
      </div>
    </footer>
  );
};

export default Footer;










// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer mt-auto py-3 bg-light w-100 h-100 object-fit-cover">
//       <div className="container text-center bg-light w-100 h-100 object-fit-cover">
//         <span className="text-muted"><p>&copy; 2023 Your Website. All rights reserved.</p></span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;