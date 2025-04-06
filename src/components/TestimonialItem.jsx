import React from "react";
import { cn } from "../utils";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={cn(
        "relative px-14 pt-11 pb-14 after:absolute after:right-0 after:max-lg:-right-1.5 after:bottom-0 after:h-0.5 after:w-screen after:bg-secondary-2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:w-full",
        containerClassName
      )}
    >
      <blockquote className="h6 mb-8 text-primary-4">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-secondary-2">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div className="">
          <h4 className="body-2 mb-0.5 text-primary-1">{item.name}</h4>
          <p className="small-compact text-secondary-3 uppercase">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
