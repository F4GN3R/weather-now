import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ChevronLeft, Thermometer } from "lucide-react";
import CurrentWeather from "../../components/CurrentWeather";
import AirConditionInformation from "../../components/AirConditionInformation";
import Card from "../../components/Card";

export default function AirConditionsDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-600 hover:ring-4 ring-indigo-500/10 transition-all ease-linear duration-200 rounded-full text-slate-50 py-1 px-5"
        onClick={() => setIsOpen(true)}
      >
        See More
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-20 w-screen overflow-y-auto bg-slate-100 dark:bg-slate-950 text-center p-5">
          <button
            type="button"
            className="absolute left-4 top-5 z-30 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <ChevronLeft size={32} className="text-slate-50" />
          </button>

          <p className="text-lg font-medium dark:text-slate-400">
            Air Conditions
          </p>

          <CurrentWeather />

          <div className="flex gap-y-5 flex-wrap">
            <Card className="w-[50%] gap-1 px-5 py-5 items-start">
              <p className="text-sm uppercase font-medium dark:text-slate-400">
                Real Feel
              </p>
              <span className="text-2xl font-semibold dark:text-slate-300">
                30º
              </span>
            </Card>
            <Card className="w-[50%] gap-1 px-5 py-5 items-start">
              <p className="text-sm uppercase font-medium dark:text-slate-400">
                Real Feel
              </p>
              <span className="text-2xl font-semibold dark:text-slate-300">
                30º
              </span>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
