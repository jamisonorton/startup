import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import pianoPhoto from "/piano.jpg";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-row items-left justify-left gap-4 py-8 md:py-10">
        <div className="grow-0 inline-block max-w-lg text-center justify-center">
          <Image alt="Family Photo" src={pianoPhoto} width={800} />
        </div>
        <div className="flex flex-col grow-0 max-w-lg text-center justify-start">
          <h1 className={title()}>
            This is the home page for Jane's Piano School Website.
          </h1>
          <br />
        </div>
      </section>
    </DefaultLayout>
  );
}
