import Image from "next/dist/client/image";

function Header() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col h-[70%] lg:h-[60%] lg:flex-row justify-end items-center lg:items-end gap-10">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            className="rounded-full object-cover"
            src="/images/profilePicture.jpg"
            alt="Personal Picture"
            width={40}
            height={40}
            layout={"responsive"}
          />
        </div>
        <div
          id="regard--section"
          className="text-4xl font-semibold tracking-wide text-center lg:text-left">
          <h2 className="font-extrabold">
            <p className="">Hi,</p>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              I am Mauricio Robinson.
            </span>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              Proudly a JavaScript Developer
            </p>
          </h2>
        </div>
      </div>
      <div className="text-sm font-semibold flex flex-col justify-center items-center mb-4">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Know more about me
        </p>
        <span className="cursor-pointer transition duration-700 ease-in-out hover:translate-y-1">
          <Image
            src="/images/chevron-down.png"
            alt="Arrow down"
            width={20}
            height={20}
          />
        </span>
      </div>
    </div>
  );
}

export default Header;
