import { useEffect, useState } from "react";

function HotelInfo({interval = 5000}) {

  const slides = [
    'images/unsplash__Ei9f33bQ1A.svg',
    'images/andrew-ruiz-fmz-B9At9iQ-unsplash.png',
    'images/bar.png',
    'images/big-tiny-belly-XtnNrQYC7ts-unsplash 1.png',
    'images/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash 1.png',
    'images/palm-trees-at-night-258154 1.png'
  ]

  //const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval =  setInterval(() => {
        setCurrentSlide((prevslide) => (prevslide + 1) % slides.length);
      }, interval);

      return () => clearInterval(slideInterval);
    }, [slides.length, interval])
 // }

    const [currentDate, setCurrentDate] = useState(new Date());

    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Function to display the current month name
     const dayNames = [
         "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"
       ];
    
      // Function to display the current month name
      const displayMonth = () => {
        const monthIndex = currentDate.getMonth();
        return monthNames[monthIndex];
      };
    
      // Function to get the last day of the current month
      const getLastDayOfMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
      };
    
      // Function to generate an array of dates for the current month
      const getDatesInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const lastDay = getLastDayOfMonth(year, month);
        const dates = Array.from({ length: lastDay }, (_, i) => i + 1);
        return dates;
      };
      // Function to move to the next month
      const nextMonth = () => {
        const nextDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
        setCurrentDate(nextDate);
      };
    
      // Function to move to the previous month
      const prevMonth = () => {
        const prevDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        setCurrentDate(prevDate);
      };

      const getStartingDayOfWeek = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        return new Date(year, month, 1).getDay();
      };
    
      const datesInMonth = getDatesInMonth();
      const startingDayOfWeek = getStartingDayOfWeek();
  

  return (
    <div>
      <div className="px-5 mt-20 xl:mx-4">
        <div className="md:flex md:gap-6 md:items-center md:justify-between xl:gap-11 2xl:gap-40" data-aos="fade-down">
            <img src="images/unsplash_8sKTHeGgrUM.svg" className="w-full md:w-[160rem] xl:w-[100rem] 2xl:w-[70rem]" alt="" />
            <div className="mt-5">
                <h2 className="text-xl font-bold font-montserrat">
                welcome to the best hotel in west African
                </h2>
                <p className="mt-3 text-lg font-[400px]">
                welcome to the best hotel in west African
                    Welcome to marina Haven, your serene escape nestled in the heart of natural beauty. Here, we believe that every moment should be a harmonious blend of comfort, elegance, and adventure. Let us introduce ourselves. 
                    more info
                </p>
                <button className="bg-[#2BAE66] text-white px-7 text-lg font-montserrat font-semibold mt-8 py-3">More info</button>
            </div>
        </div>

        <div className="mt-10 md:flex md:gap-6 md:items-center md:flex-row-reverse md:justify-between xl:gap-11 2xl:gap-40" data-aos="fade-up">
            <img src="images/unsplash_rlwE8f8anOc.svg" alt="" className="w-full md:w-[160rem] xl:w-[100rem] 2xl:w-[70rem]" />
            <div className="mt-5">
                <h2 className="text-xl font-bold font-montserrat">
               our story
                </h2>
                <p className="mt-3 text-lg font-[400px]">
                our story
                At marina Haven, we’ve crafted an oasis where relaxation and excitement coexist. Our journey began with a vision: to create a haven where weary travelers find solace, families create cherished memories, and explorers embark on unforgettable adventures.
                more info
                </p>
                <button className="bg-[#2BAE66] text-white px-7 text-lg font-montserrat font-semibold mt-8 py-3">More info</button>
            </div>
        </div>
      </div>

      <div className="h-3 bg-[#2BAE66] mt-6"></div>

      <div>
        <div className="mx-4 lg:mx-6 xl:mx-10 2xl:mx-14">
            <h1 className="py-10 text-xl font-bold font-montserrat">Book Your Space</h1>

        <div className="md:flex md:items-center md:gap-5 md:justify-between">
            <div>
                <img src="images/unsplash_xc4oxgAbDmw.svg" alt="" className="w-full" data-aos="zoom-in" />
            </div>

            <div className="w-full mt-7 border-[5px] border-[#2BAE66] rounded-xl px-4 md:w-[32rem]" data-aos="zoom-out">
                <h1 className="py-10 text-xl font-bold font-montserrat">Schedul Today!</h1>

                <div className="">
                    <div className="flex justify-between">
                    <svg onClick={prevMonth} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#2BAE66] border-[3px] rounded-full border-[#2BAE66] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                    <h3 className="text-lg font-semibold font-montserrat">{displayMonth()}</h3>

                    <svg onClick={nextMonth} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#2BAE66] border-[3px] rounded-full border-[#2BAE66] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    </div>

                    <ul  className="flex justify-between mt-8 mb-2">
                        {dayNames.map((days) => (
                            <li key={days} className="text-sm">{days}</li>
                        ))}
                    </ul>
                    <hr className="border-[#2BAE66]" />
                    <ul className="grid grid-cols-7 gap-3 pb-6 mt-10 text-center gap-y-6">
                    {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                        <div key={`empty-${index}`} className="date empty"></div>
                    ))}
                    {datesInMonth.map(date => (
                        <li
                        key={date}
                        className="text-[#2BAE66] font-semibold font-montserrat border-[2px] border-[#2BAE66] rounded-md text-sm"
                        style={date === currentDate.getDate() ? { color: 'white', fontWeight: 'bold', background: '#2BAE66' } : {}}
                        >
                        {date}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            </div>
            <div className="mt-7">
                    <div className="lg:hidden">
                        <h2 className="pb-8 text-xl font-bold font-montserrat">Gallary</h2>
                        <div className="relative w-full sm:h-96 ">
      {slides.map((slide, index) => (
        // <div key={index} className={`absolute w-full transition-opacity ease-in-out ${index === currentSlide ? 'active' : ''}`}  style={{ display: index === currentSlide ? 'block' : 'none' }}>
        
          <img  key={index}  src={slide} alt="" className={`absolute w-full h-64 sm:h-[50rem] md:h-[53rem] lg:h-[42rem] ${index === currentSlide ? 'active' : ''}`}  style={{ display: index === currentSlide ? 'block' : 'none' }} />
        
        // </div>
        ))}
      </div>
                        <div className="opacity-0" style={{ visibility: 'none' }}>
                            <img src="images/unsplash__Ei9f33bQ1A.svg" alt="" className="w-full opacity-0" />
                        </div>
                        <div className="bg-[#f3efee] h-1 mt-10 md:mt-5 mx-2 flex rounded-lg mb-7">
                            <div className="bg-[#2BAE66] w-20 h-1"></div>
                            <div className="w-20 h-1 rounded-lg"></div>
                            <div className="w-20 h-1 "></div>
                            <div className="w-20 h-1 "></div>
                            <div className="w-20 h-1 rounded-lg"></div>
                        </div> 
                    </div>

                    <h2 className="hidden pb-8 text-xl font-bold lg:block font-montserrat">Gallary</h2>
                    
                    <div className="hidden lg:w-full lg:grid lg:grid-cols-3 lg:mb-10">
                      
                      <img src="images/unsplash_8sKTHeGgrUM.svg" alt="" />
                      <img src="images/unsplash_xc4oxgAbDmw.svg" alt="" />
                      <img src="images/unsplash_rlwE8f8anOc.svg" alt="" />
                      <img src="images/unsplash__Ei9f33bQ1A.svg" alt="" />
                      <img src="images/andrew-ruiz-fmz-B9At9iQ-unsplash.png" alt="" />
                      <img src="images/bar.png" alt="" />
                      <img src="images/big-tiny-belly-XtnNrQYC7ts-unsplash 1.png" alt="" />
                      <img src="images/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash 1.png" alt="" />
                      <img src="images/palm-trees-at-night-258154 1.png" alt="" />
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default HotelInfo
