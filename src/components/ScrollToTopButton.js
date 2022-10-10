import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
  
const ScrollToTopButton = () =>{
    
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <button className='scroll-top-btn' onClick={scrollToTop}>
      <FontAwesomeIcon icon={faCircleArrowUp} />
      Scroll to top
    </button>
  );
}
  
export default ScrollToTopButton;