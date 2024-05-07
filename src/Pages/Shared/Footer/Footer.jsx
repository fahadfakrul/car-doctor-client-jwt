import logo from '../../../assets/logo.svg'
import { FaGoogle,FaLinkedin, FaInstagram, FaTwitter  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-36 bg-base-200 text-base-content">
      <aside>
        <img src={logo} alt="" />
        <p className='max-w-64 mb-4'> 
        Your trusted partner in expert car care. From routine maintenance to advanced repairs, Car Doctor ensures your vehicle runs smoothly and safely on the road.
        </p>
        <div>
            <button className='btn rounded-full '><FaGoogle ></FaGoogle></button>
            <button className='btn rounded-full'><FaInstagram></FaInstagram></button>
            <button className='btn rounded-full'><FaLinkedin></FaLinkedin></button>
            <button className='btn rounded-full'><FaTwitter></FaTwitter></button>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Why car doctor?</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
