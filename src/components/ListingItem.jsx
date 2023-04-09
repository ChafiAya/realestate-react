
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link className="contents" to={`/category/${listing.type}/${id}`}>
      <img
         className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
         loading="lazy"
         src={listing.imgUrls[0]}
         style={{ borderTopRightRadius: '50%', borderBottomLeftRadius: '50%' }}
      />

        <Moment
          className="absolute top-2 left-2 bg-[#98801f] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {listing.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
          <p className="text-[#98801f] mt-2 font-bold">
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.5 16.5v-6h-1v6h-6v-1h5v-4h-4v-1h4.5v-4h-7v12h-2v-7h-2l-1.5 7h-1l1.5-7h-2v-1h2v-6h12v6h2v1h-2v4h5v1h-6zM4.5 9.5h11v-3h-11v3z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-xs">{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
            </div>
            <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.5 5.5v5h-1v-5h-5v-1h5v-4h-4v-1h4.5v6h-2v1h2.5zM3.5 9.5h11v-3h-11v3z" clipRule="evenodd" />
                </svg>
                <p className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
            </div>
            </div>

        </div>
      </Link>
      {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(listing.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer "
          onClick={() => onEdit(listing.id)}
        />
      )}
    </li>
  );
}
