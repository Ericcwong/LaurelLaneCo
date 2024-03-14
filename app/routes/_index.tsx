import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Hero,
  ImageCollage,
  OurCollection,
  SupportiveComfort,
} from "~/components";
import lazyLoadStyle from "react-lazy-load-image-component/src/effects/opacity.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: lazyLoadStyle },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid gap-4 bg-light-beige">
      <Hero />
      <div className="grid gap-4 lg:gap-8 xl:container xl:mx-auto ">
        <OurCollection />
        <ImageCollage />
        <SupportiveComfort />
      </div>
    </div>
  );
}
