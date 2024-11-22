import { Image } from "@nextui-org/image";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10">
        <Image
          width={300}
          alt="Family Photo"
          src="/startup/vite-startup/src/photos/family.png"
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <p>This is the home page for Jane's Piano School Website.</p>
          <Image
            width={300}
            alt="Family Photo"
            src="/startup/vite-startup/src/photos/family.jpg"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
