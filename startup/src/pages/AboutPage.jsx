import familyPhoto from "/family.jpg";
import huckPhoto from "/huck.jpg";
import lunaPhoto from "/luna.jpg";

const AboutPage = () => {
  return (
    <section className="flex flex-row items-left justify-center gap-4 py-8 md:py-10">
      <div className="grow-0 inline-block max-w-lg text-center justify-center">
        <img alt="Family Photo" src={familyPhoto} width={600} />
      </div>
      <div className="flex flex-col grow-0 max-w-lg text-center justify-start">
        <h1 className="text-2xl">About</h1>
        <p>
          My name is Jane Orton. I currently reside in Spanish Fork, UT with my
          husband Jamison, two children TJ and Tessa, and our dog Luna and Cat
          Huck.
        </p>
        <p>
          I have played piano for more than 12 years. I graduated from BYU with
          a degree in Music Education. After graduating I was the Orchestra
          teacher at Spanish Fork High School for a year before getting pregnant
          with my first born. After retiring from teaching full-time to focus on
          my family I have felt the itch to begin teaching again.
        </p>
        <img alt="Luna Photo" src={lunaPhoto} width={600} />
        <br />
        <img alt="Huck Photo" src={huckPhoto} width={600} />
      </div>
    </section>
  );
};

export default AboutPage;
