import ovenMat from "../../assets/images/collage-1.jpg";
import topDownCheckerPattern from "../../assets/images/collage-2.jpg";
import bathroomMat from "../../assets/images/collage-3.jpg";
import blueDress from "../../assets/images/collage-4.jpg";
import laundryRoomMat from "../../assets/images/collage-5.jpg";
import pinkDress from "../../assets/images/collage-6.jpg";
import topDownLeafPattern from "../../assets/images/collage-7.jpg";

export const ImageCollage = () => {
  const images = [
    { src: ovenMat },
    { src: topDownCheckerPattern },
    { src: bathroomMat },
    { src: blueDress },
    { src: laundryRoomMat },
    { src: pinkDress },
    { src: topDownLeafPattern },
  ];
  const getItemClassName = (index: number) => {
    return index % 2 === 0 ? " object-cover" : "object-cover";
  };

  return (
    <div className="image-collage">
      {/* Left side */}
      <p className="font-cmu-serif uppercase text-2xl font-light flex items-center">
        The upgrade every home deserves
      </p>
      <img src={topDownLeafPattern} alt="" className="" />
      <img src={laundryRoomMat} alt="" />
      <img src={pinkDress} alt="" />
      {/* Right side */}

      <img src={bathroomMat} alt="" />
      <img src={topDownCheckerPattern} alt="" />
      <img src={ovenMat} alt="" />
      <img src={blueDress} alt="" />
    </div>
  );
};
