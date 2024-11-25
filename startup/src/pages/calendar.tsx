import { InlineWidget } from "react-calendly";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="grow-0 inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Calendar</h1>
          <InlineWidget url="https://calendly.com/jane-orton73/fall2024-30min" />
        </div>
      </section>
    </DefaultLayout>
  );
}
