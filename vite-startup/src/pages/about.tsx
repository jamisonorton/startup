import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <p>
            My name is Jane Orton. I currently reside in Spanish Fork, UT with
            my husband Jamison, two children TJ and Tessa, and our dog Luna and
            Cat Huck.
          </p>
          <p>
            I have played piano for more than 12 years. I graduated from BYU
            with a degree in Music Education. After graduating I was the
            Orchestra teacher at Spanish Fork High School for a year before
            getting pregnant with my first born. After retiring from teaching
            full-time to focus on my family I have felt the itch to begin
            teaching again.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
