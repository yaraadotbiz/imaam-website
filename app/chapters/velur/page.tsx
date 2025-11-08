import Image from "next/image";
import React from "react";

const VelurPage = () => {
  return (
    <div className="my-20">
      <div className="relative w-[950px] h-[1970px] mx-auto">
        <Image
          src={"/assets/V-chart.png"}
          alt="V-chart"
          fill
          loading="lazy"
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default VelurPage;
