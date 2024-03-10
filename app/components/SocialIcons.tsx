import facebookSVG from "../assets/svg/facebook.svg";
import instagramSVG from "../assets/svg/instagram.svg";
import tiktokSVG from "../assets/svg/tiktok.svg";

export const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4">
      <a
        href="https://www.instagram.com/Laurel.lane.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramSVG} alt="Instagram" className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/people/Laurel-Lane-Co/100093106743726/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookSVG} alt="Facebook" className="w-6 h-6" />
      </a>

      <a
        href="https://www.tiktok.com/@laurellaneco?_t=8izDX9XKDvO&_r=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={tiktokSVG} alt="TikTok" className="w-6 h-6" />
      </a>
    </div>
  );
};
