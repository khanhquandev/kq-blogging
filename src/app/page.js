import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src="/banner.png"
          width={1280}
          height={0}
          alt="banner-image"
          className="rounded-lg"
        ></Image>

        <div className="ml-28 flex flex-row-reverse absolute top-28 gap-32">
          <Image
            src="/banner-2.png"
            width={500}
            height={0}
            alt="banner-2-image"
          ></Image>
          <div className="flex flex-col mt-10">
            <h1 className="text-5xl font-bold mb-10 text-white">
              Monkey Blogging
            </h1>
            <p className="mb-20 w-[410px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <a className="flex justify-center items-center text-[#23BB86] w-[160px] h-[50px] bg-white rounded-md font-semibold ">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
