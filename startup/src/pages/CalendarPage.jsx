import { InlineWidget } from "react-calendly";

const CalendarPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grow-1 inline-block max-w-lg text-center justify-center">
        <h1 className="text-2xl">Calendar</h1>
        <InlineWidget url="https://calendly.com/jane-orton73/fall2024-30min" />
      </div>
    </section>
  );
};

export default CalendarPage;
