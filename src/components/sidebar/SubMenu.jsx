import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
  
// const Link = styled(Link)`
//   label: flex;
//   color: 'slate';
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   list-style: none;
//   height: 60px;
//   text-decoration: none;
//   font-size: 16px;
  
  
//   &:hover {
//     background: #252831;
//     border-left: 4px solid ivory;
//     cursor: pointer;
//   }

//   &.active {
//     background: #252831;
//     border-left: 4px solid ivory;
//     cursor: pointer;
//   }
// `;
  
// const div = styled.span`
//   margin-left: 16px;
//   align-items: center;
//   text-decoration: none;
//   color: rgb(240, 240, 255);
// `;
  
// const Link = styled(Link)`
//   background: #252831;
//   height: 60px;
//   padding-left: 3rem;
//   label: flex;
//   align-items: center;
//   text-decoration: none;
//   color: ivory;
//   font-size: 14px;
  
//   &:hover {
//     background: rgb(240, 240, 255);
//     cursor: pointer;
//     text-decoration: none;
//     border-left: 4px solid ivory;
//   }

//   &.active {
//     background: #252831;
//     border-left: 4px solid ivory;
//     cursor: pointer;
//   }
// `;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <Link to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div className='row text-slate-400'>
          <div className='col'>{item.icon}</div>
          <div className='col'><div >{item.label}</div></div>
          
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} >
              {item.icon}
              <div>{item.label}</div>
            </Link>
          );
        })}
    </>
  );
}

export default SubMenu