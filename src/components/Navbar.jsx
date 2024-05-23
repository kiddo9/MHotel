import { useState } from "react"


function Navbar() {
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open)
  }

  return (
    <div>
      <div className="bg-[#2BAE66] py-2">
        <h2 className="text-xs text-[#FCF6F5] font-montserrat text-center font-bold">Horem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      <div className="flex justify-between px-5 py-5 lg:items-center lg:justify-evenly">
        <div className="flex">
            <img src="images/Frame 5.svg" alt="" />
            <h3 className="text-xl font-bold font-montserrat">OTEL</h3>
        </div>

        <div className=" lg:hidden">
            <div className="flex items-center lg:hidden">
                <h3 className="text-lg font-semibold font-montserrat">{open ? '':'Menu'  }</h3>
                {open ?(<svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  )  : (<svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>) }
                

            </div>

           {open && 
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white submenu top-24">
              
            <ul className="flex flex-col gap-5 px-4 pt-3 text-lg font-medium font-montserrat">
              <li className="border-b-2 border-b-[#2BAE66] text-[#2BAE66]">Home</li>
              <li>Dinning</li>
              <li>Gallary</li>
              <li>Meeting & Banquet</li>
              <li>Events</li>
            </ul>

            <p className="mt-5 text-lg text-center font-montserrat font-medium px-3 py-2 mx-3 bg-[#2BAE66] text-white">Book Now</p>
          </div>
           } 
        </div>

              
                <ul className="hidden gap-5 text-lg font-medium lg:flex font-montserrat">
                <li className="border-b-2 border-b-[#2BAE66] text-[#2BAE66]">Home</li>
                <li>Dinning</li>
                <li>Gallary</li>
                <li>Meeting & Banquet</li>
                <li>Events</li>
                </ul>
              
              
  
              <p className="mt-5 text-lg text-center font-montserrat font-medium px-3 py-2 mx-3 bg-[#2BAE66] text-white hidden lg:block">Book Now</p>
            
      </div>
    </div>
  )
}

export default Navbar
