import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="relative bg-red-400 mt-32 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-black">ご気軽にご連絡ください!</h4>
            <h5 className="text-lg mt-2 mb-2 text-black">
              24時間以内にご返信します！！
            </h5>
            <div className="mt-6 lg:mb-0 mb-6  flex items-center">
              <button className="font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-3" type="button">
              <FontAwesomeIcon icon={faTwitter} className='text-sky-400 h-12'/>
              <Link href="/"/>
              </button>
              <button className="font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-3" type="button">
              <FontAwesomeIcon icon={faInstagram}  className='text-purple-200 h-12'/>
              <Link href="/"/>
              </button>
              <button className="font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-3" type="button">
              <FontAwesomeIcon icon={faTiktok}  className='text-black h-12'/>
              <Link href="/"/>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span>Principal<Link href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;