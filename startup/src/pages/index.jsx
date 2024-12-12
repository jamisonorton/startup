import pianoPhoto from "/piano.jpg";

const index = () => {
  return (
    <section className="flex flex-row items-left justify-center gap-4 py-8 md:py-10">
      <div className="grow-0 inline-block max-w-lg text-center justify-center">
        <img src={pianoPhoto} alt="Piano Photo" />
      </div>
      <div className="flex flex-col grow-0 max-w-lg text-center justify-start">
        <h1 className="text-2xl">
          This is the home page for Jane&apos;s Piano School Website.
        </h1>
      </div>
    </section>
  );
};

export default index;
