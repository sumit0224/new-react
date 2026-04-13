import { useState } from 'react';

const useDropdown = (initialOpenState = false) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return [isOpen, setIsOpen, toggleDropdown];
};

export default useDropdown;
