import Image from 'next/image';
import heroPic from '../../../../public/assets/images/heroPic.jpg'

const RentLenses = () => {
  return (
    <section className="bg-base-200 mb-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-125">
        
        {/* Left Side: Content */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Why RentLenses?
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
            We are photographers and videographers just like you. 
            Whether you know exactly what you want, need advice 
            on putting together your rig or just want to talk trade, 
            our Gear heads are here for you.
          </p>
          
          {/* Custom Button - DaisyUI logic with Tailwind styling */}
          <button className="btn btn-outline btn-primary shadow-none w-1/2 uppercase">
            Contact Us
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-full min-h-100 md:min-h-full">
          <Image 
            src={heroPic}
            alt="Photographer with gimbal"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default RentLenses;