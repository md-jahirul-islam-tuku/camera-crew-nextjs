import Banner from "./components/HomeComponents/Banner";
import CameraServicing from "./components/HomeComponents/CameraServicing";
import Categories from "./components/HomeComponents/Categories";
import Contact from "./components/HomeComponents/Contact";
import Partners from "./components/HomeComponents/Partners";
import RentLenses from "./components/HomeComponents/RentLenses";
import Sample from "./components/HomeComponents/Sample";

export default function Home() {
  return (
    <div>
      <Banner />
      <Sample />
      <Partners />
      <Categories />
      <RentLenses />
      <CameraServicing />
      <Contact />
    </div>
  );
}
