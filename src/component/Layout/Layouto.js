import React from 'react';
// import background from '';
import Footer from './Footer';
import Navbar from '../Navbar';

const Layouto = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
     
      <header className="fixed-top">
        <Navbar/>
      </header>
      <div className="flex-grow-1 overflow-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layouto;













// import React from 'react';
// import background from '../images/background.jpg';
// import Footer from './Footer';

// const Layouto = () => {
//   return (
//     <div className="d-flex flex-column min-vh-0">
//       <div className="position-fixed w-100 h-100">
//         <img src={background} alt="Background" className="w-100 h-100 object-fit-cover" />
//       </div>
//       <div className="flex-grow-1">
//         {/* Your content here */}
        
//       </div>
//       <Footer />
//     </div>
    
//   );
// };

// export default Layouto;









// import React from 'react';
// import background from '../images/background.jpg'
// import Footer from './Footer';

// const Layouto = () => {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <img src={background}/>
//       <div className="flex-grow-1">
//         {/* Your content here */}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Layouto;









// import React from 'react';
// import './Layout.css';
// import background from '../images/background.jpg';

// const Layout = ({ children }) => {
//   return (
//     <div className="layout-container">
//       <div className="background-image d-flex flex-column min-vh-100"></div>
//       <div className="content">{children}</div>
//       <footer className="footer mt-auto py-3 bg-light">
//         <p>&copy; 2023 Your Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
