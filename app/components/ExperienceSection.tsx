import Tabs from "./Tabs";

const Experience = () => {
  return (
    <div className="container mx-auto" id="experience">
      <section className="mx-4 py-16 md:py-48 xl:py-52">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h1 className="text-center font-bold text-4xl">
            {" "}
            Where I&#39;ve Worked
          </h1>
          <div className="w-6 md:mb-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></div>
          <Tabs />
        </div>
      </section>
    </div>
  );
};

export default Experience;
