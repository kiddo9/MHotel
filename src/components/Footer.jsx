

function Footer() {
  return (
    <div>
      <div className="mb-10 lg:mx-6 xl:mx-9">
         <div className="bg-[#2BAE66] py-10">
                    <h2 className="text-xl font-semibold text-center text-white font-montserrat">Sign To Newsletter</h2>
                    <input type="text" placeholder="Hotel@gmail.com" className="flex py-2 px-2 rounded-md mx-auto mt-5 w-72 border-[6px] border-[#1b6e41]" />
         </div>
      </div>

      <div className="bg-[#2BAE66] py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
            <h3 className="mt-4 text-2xl font-semibold text-white font-montserrat">Contact Us</h3>
            <ul className="flex flex-col gap-3 mt-5 text-white text-md font-montserrat">
                <li>Address: 123 Hotel Drive, Anytown, USA 12345</li>
                <li>Phone: 555-555-5555</li>
                <li>Email: Maitro:info@Hotelname.com</li>
                <li>Fax: 555-555-5555</li>
            </ul>
        </div>

        <div>
          <h3 className="mt-4 text-2xl font-semibold text-white font-montserrat">Social Media</h3>
            <ul className="flex flex-col gap-3 mt-5 text-white text-md font-montserrat">
                <li>Facebook: @Hotelname</li>
                <li>Twitter: @Hotelname</li>
                <li>Instagram: @Hotelname</li>
                <li>LinkedIn: @Hotelname</li>
            </ul>
        </div>

        <div>
          <h3 className="mt-4 text-2xl font-semibold text-white font-montserrat">Legal</h3>
            <ul className="flex flex-col gap-3 mt-5 text-white text-md font-montserrat">
                <li>Privacy Policy</li>
                <li>Accessibility Statement</li>
                <li>Terms And Condition</li>
            </ul>
        </div>

        <div>
        <h3 className="mt-4 text-2xl font-semibold text-white font-montserrat">Helpful Links</h3>
            <ul className="flex flex-col gap-3 mt-5 text-white text-md font-montserrat">
                <li>FAQs</li>
                <li>Sitemap</li>
            </ul>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold text-left text-white font-montserrat"> Newsletter</h2>
            <input type="text" placeholder="Hotel@gmail.com" className="flex py-2 px-2 rounded-md mx-auto mt-5 w-72 border-[6px] border-[#1b6e41]" />
         </div>
      </div>
    </div>
  )
}

export default Footer
