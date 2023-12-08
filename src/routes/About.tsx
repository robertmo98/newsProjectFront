const About = () => {
  return (
    <div className="md:ml-52 md:mr-52 pt-14 font-mono dark:text-white">
      <div className="">
        <h1 className="text-center text-2xl font-bold">
          About Scientific News
        </h1>

        <hr className="ml-32 mr-32" />
      </div>

      <div className="text-center text-md pt-8">
        <p>
          Our main goal is to enrich your scientific knowledge through
          fascinating articles,
          <br /> that do not require prior knowledge
        </p>
      </div>

      <div className="pt-8 text-center text-md">
        <p>Stay tuned with the latest discoveries.</p>
        <p className="pt-4">
          The topics are varied - just pick your favorite one
        </p>
      </div>

      <div className="pt-32 text-center text-md">
        <p>Our content is free, all you have to do is sign up.</p>
        <p className="pt-4">
          All the users can share their comments to any article
        </p>
      </div>
    </div>
  );
};

export default About;
