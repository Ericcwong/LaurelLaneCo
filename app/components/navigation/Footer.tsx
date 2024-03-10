import { SocialIcons } from "..";
import footerImage from "~/assets/images/footer.webp";
export const Footer = () => {
  return (
    <footer className="p-8">
      <div className="grid grid-cols-4 gap-4">
        <section className="flex flex-col justify-center items-center text-left col-span-1">
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
        <div className="col-span-3">
          <img src={footerImage} alt="Mat in the bathroom" />
        </div>
      </div>
    </footer>
  );
};
