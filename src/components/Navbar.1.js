// import React from "react"
// import Scrollspy from "react-scrollspy"
// import { Navbar, Nav } from "react-bootstrap"
// import Link from 'gatsby'
// import Scroller from './scroller'
// import logoblack from '../images/first-take-logo-black.png'
// import logowhite from '../images/first-take-logo-white.png'
// export default class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
//   }

//   render() {
//     return (
//       <>
 
  
//         <Navbar className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav" expand="lg"
//                 collapseOnSelect={true}>
//           <div className="container">
//             <a className="navbar-brand js-scroll-trigger " href="#page-top" onClick={Scroller.handleAnchorScroll}>
//             <div  className="logo-img-white logo-img-black navbar-scrolled img-fluid"/>
          
            
//             </a>
//             <Navbar.Toggle aria-controls="navbarResponsive"/>
//             <Navbar.Collapse id="navbarResponsive">
//               <Nav className="navbar-nav ml-auto my-2 my-lg-0">
//                 <Scrollspy className="navbar-nav"
//                            items={["about", "education","films", "blog", "signup",  ]}
//                            currentClassName="active" rootEl={"#mainNav"} offset={-75}>
//                   <li className="nav-item">
//                     <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
//                   </li>
//                   <li className="nav-item">
//                     <Nav.Link className={"js-scroll-trigger"} href="#education" onClick={Scroller.handleAnchorScroll}>Education</Nav.Link>
//                   </li>
//                   <li className="nav-item">
//                     <Nav.Link className={"js-scroll-trigger"} href="#films" onClick={Scroller.handleAnchorScroll}>Films</Nav.Link>
//                   </li>
               
                
//                   <li className="nav-item">
//                     <Nav.Link className={"js-scroll-trigger"} href="#blog" onClick={Scroller.handleAnchorScroll}>Blog</Nav.Link>
//                   </li>
                
//                   <li className="nav-item">
//                     <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
//                   </li>
//                   <li className="nav-item">
//                     <Nav.Link className="btn-outline-donate" href="#gallery" onClick={Scroller.handleAnchorScroll}>Donate</Nav.Link>
//                   </li>
             
//                 </Scrollspy>
//                 <li className="nav-item-sign">
//                     <Link to="/"  className="btn-outline-sign" >Sign Up!</Link>
//                   </li>
//               </Nav>
//             </Navbar.Collapse>
//           </div>
//         </Navbar>
  
//       </>
//     );
//   }
// }

