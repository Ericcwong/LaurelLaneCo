import { SocialIcons } from "..";
import footerImage from "~/assets/images/footer.webp";
import pkg from "react-lazy-load-image-component";
export const Footer = () => {
  const { LazyLoadImage } = pkg;
  return (
    <footer className="p-8">
      <div className="grid grid-cols-4 gap-4">
        <section className="flex flex-col justify-center items-center container mx-auto lg:text-left col-span-4 lg:col-span-1">
          <h2 className="text-4xl font-cmu-serif w-full uppercase font-light">
            Stay in the Know
          </h2>
          <p className="font-dm-sans">
            Be a part of our exciting community! We are constantly designing new
            mats that you won't want to miss! Sign up and follow us to be one of
            the first to receive the latest updates!
          </p>
          <SocialIcons />
        </section>
        <div className="col-span-4 lg:col-span-3">
          <LazyLoadImage
            src={footerImage}
            effect="opacity"
            alt="Mat in the bathroom"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
          />
        </div>
      </div>
    </footer>
  );
};
