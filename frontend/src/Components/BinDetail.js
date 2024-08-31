import React from "react";
import { useParams } from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";
import Footer from "./Footer";

export const dummyArray = [
  {
    id: 0,
    volume:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095439/vol_jj8imf.jpg",
    moisture:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095494/mos_blcdmu.jpg",
    weight:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    temperature:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    toxicity:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095557/tox_tnjcwd.jpg",
  },
  {
    id: 1,
    volume:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095439/vol_jj8imf.jpg",
    moisture:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095494/mos_blcdmu.jpg",
    weight:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    temperature:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    toxicity:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095557/tox_tnjcwd.jpg",
  },
  {
    id: 2,
    volume:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095439/vol_jj8imf.jpg",
    moisture:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095494/mos_blcdmu.jpg",
    weight:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    temperature:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    toxicity:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095557/tox_tnjcwd.jpg",
  },
  {
    id: 3,
    volume:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095439/vol_jj8imf.jpg",
    moisture:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095494/mos_blcdmu.jpg",
    weight:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    temperature:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095518/wgt_a78qvt.jpg",
    toxicity:
      "https://res.cloudinary.com/dyyr7xyso/image/upload/v1725095557/tox_tnjcwd.jpg",
  },
];

const BinDetail = () => {
  const { binId } = useParams();

  const binData = dummyArray.find((bin) => bin.id === parseInt(binId - 1 ));

  const volumeInfo = binData?.volume ? (
    <img src={binData.volume} alt="Volume" />
  ) : (
    <p className="text-gray-400">No Data available</p>
  );
  const moistureInfo = binData?.moisture ? (
    <img src={binData.moisture} alt="Moisture" />
  ) : (
    <p className="text-gray-400">No Data available</p>
  );
  const weightInfo = binData?.weight ? (
    <img src={binData.weight} alt="Weight" />
  ) : (
    <p className="text-gray-400">No Data available</p>
  );
  const temperatureInfo = binData?.temperature ? (
    <img src={binData.temperature} alt="Temperature" />
  ) : (
    <p className="text-gray-400">No Data available</p>
  );
  const toxicityInfo = binData?.toxicity ? (
    <img src={binData.toxicity} alt="Toxicity" />
  ) : (
    <p className="text-gray-400">No Data available</p>
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-custom_black p-4">
        <h1 className="text-custom_teal text-[1.5rem] font-bold uppercase">
          Present Condition of Bin {binId}
        </h1>
        <div className="text-gray-400">
          <CurrentDateTime />
        </div>
      </div>

      <div className="p-8">
        {/* Volume Section */}
        <div className="block slide-in">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div className="flex flex-col justify-center">
              <h1 className="text-teal-600 text-2xl font-bold uppercase">
                Volume (%) :
              </h1>
              <p className="text-[1.4rem] font-light text-gray-900 leading-snug mt-4">
                Shows bin volume levels to prevent overflow and optimize
                collection.
              </p>
            </div>

            <div className="flex items-center justify-center">{volumeInfo}</div>
          </div>
        </div>

        {/* Moisture Section */}
        <div className="block slide-in">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div className="flex items-center justify-center">
              {moistureInfo}
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-teal-600 text-2xl font-bold uppercase">
                Moisture (%) :
              </h1>
              <p className="text-[1.4rem] font-light text-gray-900 leading-snug mt-4">
                Shows bin moisture levels to ensure proper waste management and
                collection.
              </p>
            </div>
          </div>
        </div>

        {/* Toxicity Section */}
        <div className="block slide-in">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div className="flex flex-col justify-center">
              <h1 className="text-teal-600 text-2xl font-bold uppercase">
                Toxicity (ppm) :
              </h1>
              <p className="text-[1.4rem] font-light text-gray-900 leading-snug mt-4">
                Shows bin toxicity levels to ensure safety and manage waste.
              </p>
            </div>

            <div className="flex items-center justify-center">
              {toxicityInfo}
            </div>
          </div>
        </div>

        {/* Temperature Section */}
        <div className="block slide-in">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div className="flex items-center justify-center">
              {temperatureInfo}
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-teal-600 text-2xl font-bold uppercase">
                Temperature (&deg;C) :
              </h1>
              <p className="text-[1.4rem] font-light text-gray-900 leading-snug mt-4">
                Shows bin temperatures to prevent overheating and ensure proper
                management.
              </p>
            </div>
          </div>
        </div>

        {/* Weight Section */}
        <div className="block slide-in">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div className="flex flex-col justify-center">
              <h1 className="text-teal-600 text-2xl font-bold uppercase">
                Weight (grams) :
              </h1>
              <p className="text-[1.4rem] font-light text-gray-900 leading-snug mt-4">
                Shows bin weight data to manage capacity and improve collection
                efficiency.
              </p>
            </div>

            <div className="flex items-center justify-center">{weightInfo}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BinDetail;
