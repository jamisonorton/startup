const PricingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-2xl">Pricing</h1>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <p>
          I offer lessons in a semester basis. This means you sign up for 12
          lessons in a 14 week span. Each lesson is 30 minutes long and costs
          $20/lesson. However, I require you to pay the entire month in-advance.
        </p>
      </div>
    </section>
  );
};

export default PricingPage;
