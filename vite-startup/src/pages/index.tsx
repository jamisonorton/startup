import { Image } from "@nextui-org/image";
import DefaultLayout from "@/layouts/default";

import familyPhoto from "@/photos/family.jpg";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-row items-left justify-left gap-4 py-8 md:py-10">
        <div className="grow-0 inline-block max-w-lg text-center justify-center">
          <Image width={600} alt="Family Photo" src={familyPhoto} />
        </div>
        <div className="flex flex-col grow-0 inline-block max-w-lg text-center justify-start">
          <p className="text-2xl">
            This is the home page for Jane's Piano School Website. lkansdfa
            ./asdmfnas,dmfna s,mdnf aslkdnf ,askhdj flsakndf alskdnhf
            laksmndfkajsldkfj alskdfjalskdjflaskjdnf lasknjd flaskjdflkj
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
