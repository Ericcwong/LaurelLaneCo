import manOnMat from "~/assets/images/tony.jpg";
import nonSkidBottom from "~/assets/images/non-skid-bottom.png";
import waterDroplets from "~/assets/images/waterdroplets.png";
export const SupportiveComfort = () => {
  return (
    <div className="py-4">
      {/* Top Supportive Comfort */}
      <div className="grid grid-flow-row grid-cols-2 text-center text-white gap-y-4 justify-center items-center  ">
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <h2 className="text-5xl">Supportive Comfort</h2>
          <p>
            Transform your space with the luxurious comfort of our 3/4 inch
            thick mat that adds captivating beauty and functionality.
          </p>
        </div>
        <div className="p-8">
          <img src={manOnMat} alt="" />
        </div>
      </div>

      {/* Non-side bottom */}
      <div className="grid grid-flow-row grid-cols-2 text-center text-white gap-y-4 justify-center items-center  ">
        <div className="p-8">
          <img src={nonSkidBottom} alt="" />
        </div>
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <h2 className="text-5xl">Non-Skid Bottom</h2>
          <p>
            Specially crafted with beveled non-curl edge & anti-skid grooves at
            the bottom of the mat to ensure that it stays in place even in
            high-traffic areas.
          </p>
          <p>The perfect combination of functionality, comfort, and style.</p>
        </div>
      </div>

      {/* Water Resistant & Easy to clean */}
      <div className="grid grid-flow-row grid-cols-2 text-center text-white gap-y-4 justify-center items-center  ">
        <div className="bg-warm-gray h-full flex flex-col items-center justify-center ">
          <h2 className="text-5xl">Water Resistant & Easy to Clean</h2>
          <p>
            Easily wipe away spills and messes with mild dish soap followed by a
            dry cloth.
          </p>
        </div>
        <div className="p-8">
          <img src={waterDroplets} alt="" />
        </div>
      </div>
    </div>
  );
};
