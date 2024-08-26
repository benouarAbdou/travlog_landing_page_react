import { StarIcon } from "@heroicons/react/16/solid";

const DestinationCard = ({ destination }) => {
  return (
    <div className="flex flex-col justify-start items-start h-[600px] shadow-md rounded-[40px] overflow-hidden">
      <img
        src={destination.img}
        alt={destination.title}
        className="w-[400px] h-[400px] object-cover"
      />
      <div className="flex flex-col p-6 w-full">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-poppins font-bold text-start">
            {destination.title}
          </h1>
          <h1 className="text-secondary font-poppins font-bold">
            {destination.price}
          </h1>
        </div>
        <p className="text-gray-600">{destination.place}</p>
        <div className="flex flex-row gap-2 items-center">
          <h1 className="font-poppins font-bold text-start text-tertiary">
            {destination.rating}
          </h1>
          <StarIcon className="w-6 h-6 text-tertiary" />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
