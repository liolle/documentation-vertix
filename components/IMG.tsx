"use client";
import Image from "next/image";
import React, { useState } from "react";

const IMG = ({ key }: { key: string }) => {
  const [ratio, setRatio] = useState(16 / 9);
  console.log(`${process.env.NEXT_PUBLIC_CDN}/doc/db_schema.png`);

  return (
    <div>
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN}/doc/db_schema.png`}
        alt="Schema"
        placeholder="empty"
        width={700}
        height={700 / ratio}
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setRatio(naturalWidth / naturalHeight)
        }
      />
    </div>
  );
};

export default IMG;
