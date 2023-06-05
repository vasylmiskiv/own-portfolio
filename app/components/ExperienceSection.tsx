import Tabs from "./Tabs";

const Experience = () => {
  return (
    <section className="md:px-4 py-16 md:pt-44 md:pb-2" id="experience">
      <div className="flex flex-col">
        <h1 className="text-center font-bold text-4xl select-none">
          Where I&#39;ve Worked
        </h1>
        <div className="w-6 md:mb-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></div>
        <Tabs />
      </div>
    </section>
  );
};

export default Experience;
