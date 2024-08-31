import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ShortDetails = () => {
  const { binId } = useParams(); 

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const Array = [
    {
      id: 0,
      volume: 45,
      moisture: 67,
      weight: 34,
      temperature: 37,
      toxicity: 60,
    },
    {
      id: 1,
      volume: 75,
      moisture: 37,
      weight: 94,
      temperature: 32,
      toxicity: 10,
    },
    {
      id: 2,
      volume: 44,
      moisture: 89,
      weight: 15,
      temperature: 39,
      toxicity: 50,
    },
    {
      id: 3,
      volume: 25,
      moisture: 87,
      weight: 64,
      temperature: 38,
      toxicity: 40,
    }
  ];

  const binData = Array.find((bin) => bin.id === parseInt(binId -1 ));

  if (!binData) {
    return (
      <div classname="flex justify-center mt-40">
        Bin data not found.
      </div>
    );
  }

  return (
    <>
      <div className="block p-4 bg-custom_gray">
        <div className="grid grid-cols-2 gap-8 p-8 border-[0.1rem] border-teal-600 rounded-2xl ">
          <div className="flex flex-col justify-center items-center">
            <img src="/img2.png" alt="" />
          </div>

          <div className="flex flex-col items-center justify-center ">
            <ul className=" flex flex-col gap-[1rem] text-lg text-gray-700 mb-6">
              <li className="text-grey-600 text-[1.1rem] font-semibold uppercase">
                Volume : {binData.volume} %
              </li>
              <li className="text-grey-600 text-[1.1rem] font-semibold uppercase">
                Moisture : {binData.moisture} %
              </li>
              <li className="text-grey-600 text-[1.1rem] font-semibold uppercase">
                Weight : {binData.weight} grams
              </li>
              <li className="text-grey-600 text-[1.1rem]  font-semibold uppercase">
                Temperature : {binData.temperature} &deg;C
              </li>
              <li className="text-grey-600 text-[1.1rem] font-semibold uppercase">
                Toxicity : {binData.toxicity} ppm
              </li>
            </ul>

            {/*button to open or close the dustbin*/}
            <div
              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isOn ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleSwitch}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortDetails;
