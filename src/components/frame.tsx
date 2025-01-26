import * as React from "react";
import Image from "next/image";

const Frame = ({ style }: { style: string }) => {
  return (
    <div className={` ${style} `}>
      <Image src={"/frame.png"} alt={"frame"} height={50} width={10} />
    </div>
  );
};

export default Frame;
