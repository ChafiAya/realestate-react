import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
  FaShare,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { getAuth } from "firebase/auth";

export default function Listing() {
  const auth = getAuth();
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  const handleShareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    const options = "width=550,height=400,left=100,top=100";
    window.open(url, "", options);
    copyToClipboard(window.location.href);
  };

  const handleShareOnWhatsApp = () => {
    const message = encodeURIComponent(
      `Check out this property listing: ${window.location.href}`
    );
    const url = `https://api.whatsapp.com/send?text=${message}`;
    const options = "width=550,height=400,left=100,top=100";
    window.open(url, "", options);
    copyToClipboard(window.location.href);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShareLinkCopied(true);
    setTimeout(() => {
      setShareLinkCopied(false);
    }, 3000);
  };

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[700px]"
              style={{
                background: `url(${listing.imgUrls[index]}) left no-repeat`,
                backgroundSize: "100% 110%",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>


     

      <div className="fixed top-[13%] right-[3%] z-10 bg-transparent cursor-pointer border-2 border-transparent rounded-full w-12 h-12 flex justify-center items-center">
      <span className="mr-4 cursor-pointer text-blue-700 mt-1 bg-white rounded-full " onClick={handleShareOnFacebook}>
  <FaFacebook size={45} />
</span>
<span className="mr-4 cursor-pointer text-green-500 bg-white rounded-full " onClick={handleShareOnWhatsApp}>
  <FaWhatsapp size={45} />
</span>

</div>






      {shareLinkCopied && (
        <p className="fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">
          Link Copied
        </p>
      )}
        
      </main>
    );
  }
  


