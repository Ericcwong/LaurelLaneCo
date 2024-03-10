import matDesign1 from "~/assets/images/mat-design-1.webp";
import matDesign2 from "~/assets/images/mat-design-2.webp";
import matDesign3 from "~/assets/images/mat-design-3.webp";
import matDesign4 from "~/assets/images/mat-design-4.webp";
import matDesign5 from "~/assets/images/mat-design-5.webp";
import matDesign6 from "~/assets/images/mat-design-6.webp";

export function OurCollection() {
  const topLayer = [matDesign1, matDesign2, matDesign3];
  const bottomLayer = [matDesign4, matDesign5, matDesign6];
  return (
    <div className="">
      <div className="">
        <ImageRow images={topLayer} layer={"top"} />
        <h2 className="text-xl lg:text-3xl font-cormorant-garamond flex items-center justify-center">
          <span className="border-2 m-8 px-3 py-2 lg:px-6 lg:py-4 border-black">
            Our Collection
          </span>
        </h2>
        <ImageRow images={bottomLayer} layer={"bottom"} />
      </div>
    </div>
  );
}

const ImageRow = ({ images, layer }: { images: string[]; layer: string }) => {
  return (
    <div className="grid grid-flow-col justify-evenly items-center h-full overflow-hidden">
      {images.map((image, index) => (
        <div className="flex justify-center items-center h-full ">
          {" "}
          {/* Ensure container flexibility */}
          <img
            src={image}
            alt={`Mat design ${index + 1}`}
            className={`transition-all duration-300 object-contain scale-[2] lg:scale-[1.7] ${
              layer === "top"
                ? " rotate-90 -translate-y-[120%] lg:-translate-y-full hover:-translate-y-[95%]"
                : "rotate-90 translate-y-[120%] lg:translate-y-full hover:translate-y-[95%]"
            }`}
          />
        </div>
      ))}
    </div>
  );
};
