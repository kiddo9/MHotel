

function Detail() {
  return (
    <div className="lg:mx-6 xl:mx-9 2xl:mx-12">
        <h1 className="py-5 text-xl font-bold text-center font-montserrat">Marina Haven</h1>
      <div className="bg-[#2bae66c1] mt-6 py-3 px-1 grid grid-cols-2 gap-6 gap-x-12 md:grid-cols-4 sm:grid-cols-3 md:px-4 lg:px-16">
        <div className="flex justify-between w-40 h-20 px-1 py-3 my-auto border-[4px] rounded-lg">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M38.5 16.3333C38.5 15.2104 37.6 14.2917 36.5 14.2917H28.5C27.4 14.2917 26.5 15.2104 26.5 16.3333V20.4167H38.5V16.3333ZM22.5 16.3333C22.5 15.2104 21.6 14.2917 20.5 14.2917H12.5C11.4 14.2917 10.5 15.2104 10.5 16.3333V20.4167H22.5V16.3333ZM38.5 24.5H10.5C9.4 24.5 8.5 25.4187 8.5 26.5417V30.625H40.5V26.5417C40.5 25.4187 39.6 24.5 38.5 24.5Z" fill="#2BAE66" fillOpacity="0.36"/>
                <path d="M42.5 22.0092V16.3333C42.5 12.9646 39.8 10.2083 36.5 10.2083H28.5C26.96 10.2083 25.56 10.8208 24.5 11.8008C23.44 10.8208 22.04 10.2083 20.5 10.2083H12.5C9.2 10.2083 6.5 12.9646 6.5 16.3333V22.0092C5.28 23.1321 4.5 24.745 4.5 26.5417V38.7917H8.5V34.7083H40.5V38.7917H44.5V26.5417C44.5 24.745 43.72 23.1321 42.5 22.0092ZM26.5 16.3333C26.5 15.2104 27.4 14.2917 28.5 14.2917H36.5C37.6 14.2917 38.5 15.2104 38.5 16.3333V20.4167H26.5V16.3333ZM10.5 16.3333C10.5 15.2104 11.4 14.2917 12.5 14.2917H20.5C21.6 14.2917 22.5 15.2104 22.5 16.3333V20.4167H10.5V16.3333ZM40.5 30.625H8.5V26.5417C8.5 25.4188 9.4 24.5 10.5 24.5H38.5C39.6 24.5 40.5 25.4188 40.5 26.5417V30.625Z" fill="#FCF6F5"/>
            </svg>
            <div className="text-sm font-medium text-white font-montserrat">
                <p>Get comfort</p>
                <p>Get comfort</p>
            </div>
        </div>

        <div className="flex  w-40 h-20 px-1 py-3 my-auto border-[4px] rounded-lg">
       <img src="images/fluent-mdl2_eat-drink.svg" alt="" />

            <div className="flex flex-col text-sm font-medium text-white font-montserrat">
                <p>Dinning </p>
                <p>Get comfort</p>
            </div>
        </div>

        <div className="flex justify-between w-40 h-20 px-1 py-3 my-auto border-[4px] rounded-lg">
        <img src="images/mdi_event-clock.svg" alt="" />

            <div className="text-sm font-medium text-white font-montserrat">
                <p className="text-[12px]">Event Facilities</p>
                <p>Get comfort</p>
            </div>
        </div>

        <div className="flex justify-between w-40 h-20 px-1 py-3 my-auto border-[4px] rounded-lg">
            <img src="images/mdi_gym.svg" alt="" />
            <div className="text-sm font-medium text-white font-montserrat">
                <p>Recreartional</p>
                <p>Get comfort</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
