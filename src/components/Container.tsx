import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1280px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
};

export default Container;
