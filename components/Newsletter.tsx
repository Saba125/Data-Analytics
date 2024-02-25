const NewsLatter = () => {
  return (
    <div className="w-full py-16 text-white px-4 ">
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2  font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <input
              type="email"
              className="p-3 flex w-full rounded-md text-black"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6  px-6 py-3 text-black">
              Notify me
            </button>
          </div>
          <p className="text-white">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
