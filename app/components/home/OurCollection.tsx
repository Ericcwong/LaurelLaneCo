import matDesign1 from "~/assets/images/mat-design-1.png";
import matDesign2 from "~/assets/images/mat-design-2.png";
import matDesign3 from "~/assets/images/mat-design-3.png";
import matDesign4 from "~/assets/images/mat-design-4.png";
import matDesign5 from "~/assets/images/mat-design-5.png";
import matDesign6 from "~/assets/images/mat-design-6.png";

export function OurCollection() {
  const topLayer = [matDesign1, matDesign2, matDesign3];
  const bottomLayer = [matDesign4, matDesign5, matDesign6];
  return (
    <div className="">
      <div className="h-auto">
        <ImageRow images={topLayer} layer={"top"} />
        <h2 className="text-3xl font-cormorant-garamond flex items-center justify-center">
          <span className="border-2 px-6 py-4 border-black">
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
    <div className="grid grid-flow-col gap-4 justify-evenly items-center h-full overflow-hidden">
      {images.map((image, index) => (
        <div className="flex justify-center items-center h-full overflow-hidden">
          {" "}
          {/* Ensure container flexibility */}
          <img
            src={image}
            alt={`Mat design ${index + 1}`}
            className={`transition-all duration-300 object-cover scale-[1.7] ${
              layer === "top"
                ? " rotate-90 -translate-y-full hover:-translate-y-[95%]"
                : "rotate-90 translate-y-full hover:translate-y-[95%]"
            }`}
          />
        </div>
      ))}
    </div>
  );
};
