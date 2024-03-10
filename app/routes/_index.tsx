import type { MetaFunction } from "@remix-run/node";
import {
  Hero,
  ImageCollage,
  OurCollection,
  SupportiveComfort,
} from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid gap-8 bg-light-beige">
      <Hero />
      <div className="grid gap-8 xl:container xl:mx-auto ">
        <OurCollection />
        <ImageCollage />
        <SupportiveComfort />
      </div>
    </div>
  );
}
