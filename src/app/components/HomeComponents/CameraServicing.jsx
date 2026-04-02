import Image from 'next/image';
import serviceImage from '../../../../public/assets/images/camera_servicing.png'

const CameraServicing = () => {
  return (
    <section className="bg-base-200 mb-20 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-primary text-center text-2xl font-bold mb-8">
          Camera Servicing
        </h2>

        {/* Top Text Content */}
        <div className="text-center mb-8">
          <p className="text-primary italic font-medium mb-4">
            Look after your camera, service it regularly
          </p>
          <p className="text-blue-100 text-start leading-relaxed">
            <span className="font-bold text-primary">Camera Crew</span> are the Authorised Service Centre for Canon and Nikon branded cameras providing Under warranty Repairs and Out of Warranty Repairs.
          </p>
        </div>

        {/* Featured Image with Logos */}
        <div className="relative w-full rounded-lg overflow-hidden group">
          <Image 
            src={serviceImage}
            alt="Camera Servicing"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom Text Content */}
        <div className="mt-8 text-blue-100 leading-relaxed">
          <p>
            Regular servicing of your camera and lens will help to ensure that your photographic equipment works perfectly for you for every photographic shoot. <span className="font-bold text-primary">Camera Crew</span> support camera equipment for some of the best known photographers and photo journalists in the country - the same experience is available to you as a keen photographer. 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 font-semibold transition-colors">
              CONTACT WITH US.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CameraServicing;