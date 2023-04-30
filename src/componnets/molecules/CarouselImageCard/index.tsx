import React from "react";

interface carouselImgProp {
  imgUrl: string;
  movieTitle: string;
  release: string;
  onClick: (x: any) => void;
}
const CarouselImageCard: React.FC<carouselImgProp> = ({
  imgUrl,
  release,
  onClick,
  movieTitle,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div
      onClick={onClick}
      className=" h-1/2 bg-white rounded-xl shadow-xl cursor-pointer border border-light-grey"
    >
      <img
        src={`${API_IMG}${imgUrl}`}
        alt="image"
        width={150}
        height={150}
        className="h-full object-cover rounded-t-xl "
      />
      <div>
        <h3 className="font-semibold p-2 w-[163px]">{movieTitle}</h3>
        {/* <div>{release}</div> */}
      </div>
    </div>
  );
};

export default CarouselImageCard;
