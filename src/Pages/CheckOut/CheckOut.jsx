import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authproviders";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price, img } = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking={
        customerName: name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price: price
    }
    //  console.log(booking);

     fetch('https://car-doctor-server-roan-psi.vercel.app/bookings',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
     })
     .then(res => res.json())
     .then(() => {
        alert('booked successfully')
        // console.log(data);
     })
  } 

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-black"><span className="text-[#FF3811]">Service: </span>{title}</h2>
      <form onSubmit={handleCheckOut} className="card-body p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full">
            <label className="label-text font-semibold ">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text font-semibold ">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name='date'
              className="input input-bordered"
              
            />
            
          </div>
          <div className="form-control w-full">
            <label className="label-text font-semibold ">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text font-semibold ">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$ ' + price}
              className="input input-bordered"
              required
            />
            
          </div>
        </div>
        
        <div className="form-control mt-6">
          <input className="btn btn-block bg-[#FF3811] text-white text-xl font-semibold" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
