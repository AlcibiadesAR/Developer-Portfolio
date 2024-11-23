import { useState } from "react";
import { scrollToSection } from '../Utils/Scroll'; 

export default function useMenu() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenuAndScroll = (sectionId) => {
  scrollToSection(sectionId);  
  setIsMenuOpen(false);       
};

return {isMenuOpen, toggleMenu, closeMenuAndScroll}
}