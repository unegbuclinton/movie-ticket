import ClientOnly from "@/utils/helperFunctions";
import React from "react";

const Test = () => {
  return (
    <ClientOnly>
      <div>Thanks Alot </div>
    </ClientOnly>
  );
};

export default Test;
