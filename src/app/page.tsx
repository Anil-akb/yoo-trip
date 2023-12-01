import HotelCard from "@/components/HotelBox/HotelCard";
import Footer from "@/components/ui/Footer";
import HotelPicture from "@/components/ui/HomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <BookingBox/> */}
      <HotelCard />
      <HotelPicture />
      <Footer />
    </div>
  );
}
