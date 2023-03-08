import { useRef } from "react";

export const Scroller = () => {
  const scrollerRef = useRef(null);

  const handlePrev = () => {
    scrollerRef.current.scrollLeft -= 500;
  };

  const handleNext = () => {
    scrollerRef.current.scrollLeft += 500;
  };
  return { scrollerRef, handlePrev, handleNext };
};
