import { SocialIcons } from "..";
import footerImage from "~/assets/images/footer.jpg";
export const Footer = () => {
  return (
    <footer className="">
      <div className="flex gap-4">
        <section>
          <h2>Stay in the Know</h2>
          <p>
            Be a part of our exciting community! We are constantly designing new
            mats that you won't want to miss! Sign up and follow us to be one of
            the first to receive the latest updates!
          </p>
          <SocialIcons />
        </section>
        <div>
          <img src={footerImage} alt="Mat in the bathroom" />
        </div>
      </div>
    </footer>
  );
};
