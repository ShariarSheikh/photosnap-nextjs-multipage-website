import Image from "next/image";

const Section3 = () => {
  return (
    <section className="w-full min-h-[600px]">
      <div className="max-w-3xl m-auto">
        <h1 className="font-medium uppercase text-center text-2xl">Compare</h1>

        <div className="mt-6">
          <table className="w-full border-collapse">
            <tr className="border-b-[3px] border-gray-500">
              <th className="text-gray-600 p-2 text-left">Access</th>
              <th className="text-gray-600 p-2 text-left">Basic</th>
              <th className="text-gray-600 p-2 text-left">Pro</th>
              <th className="text-gray-600 p-2 text-left">Business</th>
            </tr>

            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 1
              </td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 2
              </td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 3
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 4
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 5
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 6
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 7
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 p-2 text-left">
                Plane 8
              </td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left"></td>
              <td className="border-b border-gray-300 p-2 text-left">✔</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="h-[300px] w-full relative mt-20">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="pictures"
          layout="fill"
          objectFit="cover"
        />
        <div className="w-full h-full bg-black flex justify-center items-center bg-opacity-50 z-30 absolute">
          <h1 className="font-medium text-3xl text-gray-100 leading-9 uppercase">
            We'are in beta.
            <br /> Get your invite <br /> today!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Section3;
