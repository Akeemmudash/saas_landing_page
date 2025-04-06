import React, { useState } from "react";
import { Element } from "react-scroll";
import { cn } from "../utils";
import clsx from "clsx";
import { plans } from "../constants";
import CountUp from "react-countup";
import Button from "../components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-secondary-2 bg-secondary-1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-primary-4 max-md:mb-11 max-sm:max-w-sm ">
              Flexing pricing for teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-secondary-4/25 bg-secondary-1/50 p-2 backdrop-blur-[6px]">
              <button
                onClick={() => setMonthly(true)}
                className={clsx(
                  "pricing-head_btn",
                  monthly && "text-primary-4"
                )}
              >
                Monthly
              </button>
              <button
                className={cn("pricing-head_btn", !monthly && "text-primary-4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={cn(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* pricing section */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-5 lg:mx-auto">
            {plans.map((plan, index) => (
              <div
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                key={plan.id}
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1  rounded-tl-3xl rounded-tr-3xl" />
                )}
                <div
                  className={cn(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={cn(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-30" : "size-[88px]"
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12"
                  )}
                >
                  <div
                    className={cn(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1
                        ? "border-primary-3 text-primary-3"
                        : "border-primary-1"
                    )}
                  >
                    {plan.title}
                  </div>
                  <div className="relative z-2 flex items-center justify-center">
                    <div className={cn("h-num flex items-center")}>
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3">/mo</div>
                  </div>
                </div>
                <div
                  className={cn(
                    "body-1 relative z-2 mb-10 w-full border-b-secondary-2 pb-9 text-center text-primary-4",
                    index === 1 && "border-b"
                  )}
                >
                  {plan.caption}
                </div>
                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>
                {index === 1 && (
                  <p className="small mt-9 text-primary-3 text-center before:content-['-']  after:content-['-'] before:mx-2.5  after:mx-2.5">
                    Limited time offer!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
