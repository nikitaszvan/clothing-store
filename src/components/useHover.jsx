import {useState} from "react";

const useHover = () => {
    const [hoverStates, setHoverStates] = useState([]);
  
    const handleMouseEnter = (index) => {
      setHoverStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = true;
        return newStates;
      });
    };
  
    const handleMouseLeave = (index) => {
      setHoverStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      });
    };
  
    return { hoverStates, handleMouseEnter, handleMouseLeave };
  };

  const useSubHover = () => {
    const [subHoverStates, setSubHoverStates] = useState([]);
  
    const subHandleMouseEnter = (index) => {
      setSubHoverStates((prevStates) => {
        const newSubStates = [...prevStates];
        newSubStates[index] = true;
        return newSubStates;
      });
    };
  
    const subHandleMouseLeave = (index) => {
      setSubHoverStates((prevStates) => {
        const newSubStates = [...prevStates];
        newSubStates[index] = false;
        return newSubStates;
      });
    };
  
    return { subHoverStates, subHandleMouseEnter, subHandleMouseLeave };
  };

export {useHover, useSubHover};