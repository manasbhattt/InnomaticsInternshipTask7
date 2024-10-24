// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// function Services() {
//   return (
//     <div>
//       <h1>Our Services</h1>
//       <p>Explore our wide range of services designed to meet your business needs.</p>

//       <nav>
//         <NavLink to="design" className="service-link">
//           Design
//         </NavLink>
//         <NavLink to="development" className="service-link">
//           Development
//         </NavLink>
//       </nav>

//       {/* This will render the nested routes (Design, Development) */}
//       <Outlet />
//     </div>
//   );
// }

// export default Services;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <nav>
        <NavLink to="internship">Internship</NavLink>
        <NavLink to="courses">Courses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Services;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Services() {
//   return (
//     <div className="services">
//       <h2>Our Services</h2>
//       <div className="services-links">
//         <NavLink to="internship" className="services-link">
//           Internship
//         </NavLink>
//         <NavLink to="courses" className="services-link">
//           Courses
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Services;
