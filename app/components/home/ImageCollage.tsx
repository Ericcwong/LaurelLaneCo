import ovenMat from "../../assets/images/collage-1.webp";
import topDownCheckerPattern from "../../assets/images/collage-2.webp";
import bathroomMat from "../../assets/images/collage-3.webp";
import blueDress from "../../assets/images/collage-4.webp";
import laundryRoomMat from "../../assets/images/collage-5.webp";
import pinkDress from "../../assets/images/collage-6.webp";
import topDownLeafPattern from "../../assets/images/collage-7.webp";

export const ImageCollage = () => {
  return (
    <div className="image-collage">
      {/* Left side */}
      <p className="font-cmu-serif uppercase text-xl font-light flex items-center ">
        The upgrade every home deserves
      </p>
      {/* Fade in animation*/}
      <img src={topDownLeafPattern} alt="" className="" />
      <img src={laundryRoomMat} alt="" /> {/* Fade in animation*/}
      <img src={pinkDress} alt="" /> {/* Left to right animation*/}
      <img src={bathroomMat} alt="" /> {/* Grow in animation*/}
      <img src={topDownCheckerPattern} alt="" /> {/* Bottom up animation*/}
      <img src={ovenMat} alt="" /> {/* Fade in animation*/}
      <img src={blueDress} alt="" />
      {/* Bottom up animation*/}
    </div>
  );
};
