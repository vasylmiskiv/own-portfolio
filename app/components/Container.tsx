import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 max-sm:px-8 md:max-w-5xl">
      {children}
    </div>
  );
};

export default Container;
