import React from "react";
import { cn } from "../utils";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId == index;
  console.log(item, activeId, index, active, typeof item.id);
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-primary-3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={cn(
              "h6 text-primary-4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-primary-1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={cn(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-secondary-2 shadow-400 transition-all duration-500 group-hover:border-secondary-4",
            active && "before:bg-primary-1 after:rotate-0 after:bg-primary-1"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>
      <SlideDown>
        {active && <div className="body-3 px-7 py-3.5">{item.answer}</div>}
      </SlideDown>
      <div
        className={cn(
          " absolute g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-primary-1"></div>
      </div>
    </div>
  );
};
