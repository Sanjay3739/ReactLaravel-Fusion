// import React, { useState } from 'react';
import '../css/sidebar.css'; // Import the CSS file

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleExpandClick = () => {
//     setCollapsed(!collapsed);
//   };

//   const handleLinkClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <nav className={collapsed ? 'collapsed' : ''}>
//       <div className="sidebar-top">
//         <span className="expand-btn" onClick={handleExpandClick}>
//         <img src={`/Images/logo512.png`} alt="Logo" style={{ width:"30px" }} />
//         </span>
//         <img src={`/Images/logo192.png`} alt="Logo" style={{ width:"30px" }} />
//         {/* <img src="/assets/logo192.png" className="logo" alt="Laplace Logo" /> */}
//         <h3 className="hide">Laplace</h3>
//       </div>
//       <div className="sidebar-links">
//         <ul>
//           <li>
//             <a
//               href="#portfolio"
//               className={activeIndex === 0 ? 'active' : ''}
//               title="Portfolio link"
//               onClick={() => handleLinkClick(0)}
//             >
//               <div className="icon">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='white' d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-18.055c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256zm-6.023 5.02l-.495 3.473c.373.112.772.215 1.192.308l.505-3.535c-.414-.073-.816-.155-1.202-.246zm8.564.54l-.527 3.706c.429-.03.845-.071 1.251-.12l.529-3.722c-.409.054-.827.099-1.253.136zm2.197-.28l-.53 3.732c.439-.071.862-.153 1.266-.246l.532-3.743c-.407.097-.831.182-1.268.257zm-4.37.384l-.521 3.672c.428 0 .721 0 1.235-.02l.525-3.691c-.408.021-.822.034-1.239.039zm8.353 1.892c.813-.505 1.279-1.087 1.279-1.707v-2.439c-.23.16-.482.313-.755.458l-.524 3.688zm-16.819-3.168l-.468 3.26c.337.195.725.377 1.162.544l.487-3.407c-.395-.114-.804-.249-1.181-.397zm6.314 1.226l-.517 3.629c.399.033.808.057 1.224.073l.521-3.655c-.414-.007-.824-.023-1.228-.047zm-8.216-2.204v2.439c0 .415.21.813.592 1.183l.436-3.024c-.381-.187-.723-.386-1.028-.598zm6.085 1.997l-.51 3.569c.391.067.794.126 1.211.175l.514-3.605c-.413-.038-.819-.084-1.215-.139zm10.88-.636l-.533 3.748c.471-.138.904-.291 1.296-.457l.531-3.737c-.427.17-.808.303-1.294.446z" /></svg>
  
//               </div>
//               <span className="link hide">Portfolio</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#analytics"
//               className={activeIndex === 1 ? 'active' : ''}
//               title="Analytics link"
//               onClick={() => handleLinkClick(1)}
//             >
//               <div className="icon">
//               {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-18.055c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256zm-6.023 5.02l-.495 3.473c.373.112.772.215 1.192.308l.505-3.535c-.414-.073-.816-.155-1.202-.246zm8.564.54l-.527 3.706c.429-.03.845-.071 1.251-.12l.529-3.722c-.409.054-.827.099-1.253.136zm2.197-.28l-.53 3.732c.439-.071.862-.153 1.266-.246l.532-3.743c-.407.097-.831.182-1.268.257zm-4.37.384l-.521 3.672c.428 0 .721 0 1.235-.02l.525-3.691c-.408.021-.822.034-1.239.039zm8.353 1.892c.813-.505 1.279-1.087 1.279-1.707v-2.439c-.23.16-.482.313-.755.458l-.524 3.688zm-16.819-3.168l-.468 3.26c.337.195.725.377 1.162.544l.487-3.407c-.395-.114-.804-.249-1.181-.397zm6.314 1.226l-.517 3.629c.399.033.808.057 1.224.073l.521-3.655c-.414-.007-.824-.023-1.228-.047zm-8.216-2.204v2.439c0 .415.21.813.592 1.183l.436-3.024c-.381-.187-.723-.386-1.028-.598zm6.085 1.997l-.51 3.569c.391.067.794.126 1.211.175l.514-3.605c-.413-.038-.819-.084-1.215-.139zm10.88-.636l-.533 3.748c.471-.138.904-.291 1.296-.457l.531-3.737c-.427.17-.808.303-1.294.446z" /></svg> */}
//               <img src={`/Images/hell.png`} alt="Logo" />
  
//               </div>
//               <span className="link hide">Analytics</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#dashboard"
//               className={activeIndex === 2 ? 'active' : ''}
//               title="Performance link"
//               onClick={() => handleLinkClick(2)}
//             >
//               <div className="icon">
//                 <img src="/dashboard.svg" title="Performance Icon" />
//               </div>
//               <span className="link hide">Performance</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#reports"
//               className={activeIndex === 3 ? 'active' : ''}
//               title="Reports Link"
//               onClick={() => handleLinkClick(3)}
//             >
//               <div className="icon">
//                 <img src="assets/reports.svg" title="Reports Icon" />
//               </div>
//               <span className="link hide">Reports</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Sidebar;
import React, { useState } from 'react';
// import { ReactComponent as San } from '../Images/san.svg';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const handleLinkClick = (event) => {
    const allLinks = document.querySelectorAll('.sidebar-links a');
    const targetLink = event.target.closest('a');
    allLinks.forEach((link) => {
      if (link === targetLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  return (
    <nav className={collapsed ? 'collapsed' : ''}>
      <div className="sidebar-top">
        <span className="expand-btn" onClick={handleToggleCollapse}>
        <img src="/images/san.svg" alt="Icon" />
        </span>
        <img src="/images/san.svg" alt="Icon" />
        <h2 className="hide">Laplace</h2>
      </div>
      <div className="sidebar-links">
        <ul>
          <li>
            <a
              href="#portfolio"
              className="active"
              title="Portfolio link"
              onClick={handleLinkClick}
            >
              <div className="icon">
              <img src="/images/san.svg" alt="Icon" />
              </div>
              <span className="link hide">Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="#analytics"
              title="Analytics link"
              onClick={handleLinkClick}
            >
              <div className="icon">
              <img src="/images/san.svg" alt="Icon" />
              </div>
              <span className="link hide">Analytics</span>
            </a>
          </li>
          <li>
            <a
              href="#dashboard"
              title="Performance link"
              onClick={handleLinkClick}
            >
              <div className="icon">
                <img src="assets/dashboard.svg" title="Performance Icon" />
              </div>
              <span className="link hide">Performance</span>
            </a>
          </li>
          <li>
            <a
              href="#reports"
              title="Reports Link"
              onClick={handleLinkClick}
            >
              <div className="icon">
                <img src="assets/reports.svg" title="Reports Icon" />
              </div>
              <span className="link hide">Reports</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
