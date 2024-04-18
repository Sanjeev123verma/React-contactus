import styles from "./Navigation.module.css";

const Navigation = () => {

  return (
   <nav className= {`${styles.Navigation}`}>
    
      <div>
          <img src="/images/Wing.com.png" alt="service logo"/>          
      </div>

      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  
   </nav>                 
    
  )
}

export default Navigation