import Banner from "./components/HomeComponents/Banner";
import CameraServicing from "./components/HomeComponents/CameraServicing";
import Categories from "./components/HomeComponents/RentalCategories";
import Contact from "./components/HomeComponents/Contact";
import Partners from "./components/HomeComponents/Partners";
import RentLenses from "./components/HomeComponents/RentLenses";
import Sample from "./components/HomeComponents/Sample";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Banner />
      <Sample />
      <Categories />
      <RentLenses />
      <CameraServicing />
      <Partners />
      <Contact />
    </div>
  );
}
