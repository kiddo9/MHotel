import {motion} from 'framer-motion'
import { useEffect, useState } from "react"

function Load() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <div className="fixed inset-0 z-40 bg-white">
      <img src="images/jason-leung-poI7DelFiVA-unsplash 1.png" alt="" className={`z-20 w-full h-screen title ${visible ? 'visible' : ''}`}/>
      <div className={`absolute inset-0 bg-white bg-opacity-65`}></div>
      <div  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <motion.svg
      width="64" height="31" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
         d="M15.2821 30.25H16.2465L16.0089 29.3153L10.9266 9.31549L20.4721 17.9236L20.9744 18.3766L21.4766 17.9236L31.0221 9.31549L25.9398 29.3153L25.7022 30.25H26.6667H39H39.75V29.5V1.5V0.75H39H2H1.25V1.5V29.5V30.25H2H15.2821Z" stroke="black" stroke-width="1.5"
        //  d="M44.25 29.5V30.25H45H47.8333H49.7222H50.4722V29.5V16.7016H56.5278V29.5V30.25H57.2778H62H62.75V29.5V1.5V0.75H62H57.2778H56.5278V1.5V9.78226H50.4722V1.5V0.75H49.7222H45H44.25V1.5V29.5Z" stroke="black" stroke-width="1.5"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />

      <motion.path
         d="M44.25 29.5V30.25H45H47.8333H49.7222H50.4722V29.5V16.7016H56.5278V29.5V30.25H57.2778H62H62.75V29.5V1.5V0.75H62H57.2778H56.5278V1.5V9.78226H50.4722V1.5V0.75H49.7222H45H44.25V1.5V29.5Z" stroke="black" stroke-width="1.5"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />

    </motion.svg>
      </div>
      <h2 className={`title ${visible ? 'visible' : ''} text-center font-montserrat font-extrabold text-xl absolute top-[55%] text-[#2bae66] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>Marina Haven</h2>
      <div className={`absolute top-[62%] left-[50%] translate-x-[-50%] translate-y-[-50%] load ${visible ? 'visible' : ''}`}>
       <div className="loader"></div> 
      </div>
      
    </div>
  )
}

export default Load
