import React, { useEffect } from "react";

type SlidePosition = "left" | "right";

interface Props {
  postion: SlidePosition;
  child: React.ReactChild;
  isShow: boolean;
}

export default function SlideBar({
  postion,
  child,
  isShow,
}: Props): JSX.Element {
  useEffect(() => {
    if (isShow) {
      document.getElementById("slide-bar")?.classList.add("w-1/4");
      document.getElementById("slide-bar")?.classList.remove("w-0");
    } else {
      document.getElementById("slide-bar")?.classList.remove("w-1/4");
      document.getElementById("slide-bar")?.classList.add("w-0");
    }
  }, [isShow]);

  return (
    <div
      id="slide-bar"
      className={`${
        postion === "left" ? "left-0" : "right-0"
      } fixed w-0 h-screen bg-white transition-all delay-150 duration-200 z-10`}
    >
      {child}
    </div>
  );
}
