import { StarIcon } from "@heroicons/react/16/solid";

const DestinationCard = ({ destination }) => {
  return (
    <div className="flex flex-col h-full w-full min-w-[300px] max-w-[600px] rounded-[40px] overflow-hidden">
      <div className="relative w-full pt-[100%]">
        <img
          src={destination.img}
          alt={destination.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex flex-row justify-between items-center mb-2">
          <h1 className="font-bold md:text-2xl text-xl truncate flex-1 mr-2">
            {destination.title}
          </h1>
          <h1 className="text-secondary  md:text-2xl text-xl font-bold whitespace-nowrap">
            {destination.price}
          </h1>
        </div>
        <p className="text-gray-600 mb-2  md:text-xl text-lg truncate">
          {destination.place}
        </p>
        <div className="flex flex-row gap-2 items-center mt-auto">
          <h1 className="font-bold md:text-xl text-lg text-tertiary">
            {destination.rating}
          </h1>
          <StarIcon className="w-6 h-6 text-tertiary" />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
