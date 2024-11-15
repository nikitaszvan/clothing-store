import React, { useRef } from "react";
import {useHover, useSubHover} from "./useHover.jsx";
import buttonData from "./buttonData.jsx";

const HomeNavbar = () => {
  const {hoverStates, handleMouseEnter, handleMouseLeave} = useHover();
  const {subHoverStates, subHandleMouseEnter, subHandleMouseLeave} = useSubHover();
  const searchBarRef = useRef(null);

  const handleSubmit = (event) => {
    console.log(searchBarRef.current.value);
    event.preventDefault();
  };

  const buttons = buttonData.map((data, index) => (
    <div key={index} className={`button-${index+1}-container`}>
      {(hoverStates[index] && data.title==="SEARCH") ?
      (<form onSubmit={handleSubmit} className="search-form">
      <input ref={searchBarRef} type="search" placeholder="Search" className="search-bar"/>
      <button
        type="submit"
        href={data.href && data.href}
        className={'nav-links'}
        title={data.title && data.title}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        style={{
          backgroundColor: 'transparent',
          color: '#424242',
          cursor: hoverStates[index] ? 'pointer' : null,
          padding: '0 0 0 5px'
        }}
        > {data.icon}
          </button>
          </form>) : 
            (<a
              type="submit"
              href={data.href && data.href}
              className={'nav-links'}
              title={data.title && data.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                backgroundColor: hoverStates[index] ? '#424242' : 'transparent',
                color: hoverStates[index] ? '#F1EDE4' : '#424242',
                cursor: hoverStates[index] ? 'pointer' : null,
                display: hoverStates[index] ? 'block' : 'inline'
              }}
              >
              {data.label && data.label}
              {data.icon && data.icon}
        {(data.subItems && (data.subItems.length > 0) && hoverStates[index]) && (
          <div className="dropdown-content">
            {data.subItems.map((subItem, subIndex) => (
              <a
                key={subIndex}
                href={subItem.href}
                onMouseEnter={() => subHandleMouseEnter(subIndex)}
                onMouseLeave={() => subHandleMouseLeave(subIndex)}
                style={{
                  backgroundColor: subHoverStates[subIndex] ? '#424242' : '#F1EDE4',
                  color: subHoverStates[subIndex] ? '#F1EDE4' : '#424242',
                  cursor: subHoverStates[subIndex] ? 'pointer' : null,
                }}
              >
                {subItem.label}
              </a>
            ))}
          </div>
        )}
      </a>
            )}
    </div>
  ));

  return <div className="navbar">{buttons}</div>;
};

export default HomeNavbar;