import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-xl font-bold text-[#FF3811]">About us </h3>
          <h1 className="text-5xl font-bold text-black">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 text-[#737373] ">
            With our seasoned expertise and qualifications, we excel in the
            realm of car servicing. Our dedicated team brings forth a wealth of
            experience, ensuring each vehicle receives meticulous attention and
            top-notch care. From routine maintenance to complex repairs, trust
            us to keep your car running smoothly and reliably for years to come.
          </p>
          <p className="py-6 text-[#737373] ">
           
From our transparent communication to our efficient turnaround times, we aim to make the car servicing experience as seamless and stress-free as possible for our valued clients. 
          </p>
          <button className='btn bg-[#FF3811] text-white  border-none text-lg font-normal'>Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
