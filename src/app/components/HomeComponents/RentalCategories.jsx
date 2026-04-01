import Image from 'next/image';
import camera from '../../../../public/assets/images/cat-cameras.png'
import lens from '../../../../public/assets/images/cat-lenses.png'
import light from '../../../../public/assets/images/cat-lighting.png'
import gimble from '../../../../public/assets/images/cat-support.png'

const RentalCategories = () => {
  const categories = [
    { id: 1, name: 'Cameras', image: camera },
    { id: 2, name: 'Lenses', image: lens },
    { id: 3, name: 'Lighting', image: light },
    { id: 4, name: 'Production', image: gimble },
  ];

  return (
    <section className="bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-primary text-center text-2xl font-bold mb-12">
          Rental Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Container with shadow effect */}
              <div className="relative w-full aspect-square flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="max-w-[80%] h-56 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-blue-200 font-bold text-lg tracking-wide group-hover:text-white transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalCategories;