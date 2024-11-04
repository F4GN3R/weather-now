import Lottie from "lottie-react";
//  day icons
import d113 from "../assets/clear-day.json";
import d116 from "../assets/partly-cloudy-day.json";
import d106 from "../assets/cloudy.json";
import d122 from "../assets/overcast-day.json";
import d143 from "../assets/mist.json";
import d176 from "../assets/partly-cloudy-day-rain.json";
import d179 from "../assets/partly-cloudy-day-snow.json";
import d182 from "../assets/partly-cloudy-day-sleet.json";

import d200 from "../assets/thunderstorms-day.json";
import d227 from "../assets/snow.json";
// import d230 from "";
// import d248 from "";
// import d260 from "";
// import d263 from "";
// import d266 from "";
// import d281 from "";
// import d284 from "";
// import d293 from "";
// import d296 from "";
// import d299 from "";
// import d302 from "";
// import d305 from "";
// import d308 from "";
// import d311 from "";
// import d314 from "";
// import d317 from "";
// import d320 from "";
// import d323 from "";
// import d326 from "";
// import d329 from "";
// import d332 from "";
// import d335 from "";
// import d338 from "";
// import d350 from "";
// import d353 from "";
// import d356 from "";
// import d359 from "";
// import d362 from "";
// import d365 from "";
// import d368 from "";
// import d371 from "";
// import d374 from "";
// import d377 from "";
// import d386 from "";
// import d389 from "";
// import d392 from "";
// import d395 from "";

//  night icons
import n113 from "../assets/clear-night.json";
import n116 from "../assets/partly-cloudy-night.json";
import n106 from "../assets/cloudy.json";
import n122 from "../assets/overcast-night.json";
import n143 from "../assets/mist.json";
import n176 from "../assets/partly-cloudy-night-rain.json";
import n179 from "../assets/partly-cloudy-night-snow.json";
import n182 from "../assets/partly-cloudy-night-sleet.json";

import n200 from "../assets/thunderstorms-night.json";
import n227 from "../assets/snow.json";
// import n230 from "";
// import n248 from "";
// import n260 from "";
// import n263 from "";
// import n266 from "";
// import n281 from "";
// import n284 from "";
// import n293 from "";
// import n296 from "";
// import n299 from "";
// import n302 from "";
// import n305 from "";
// import n308 from "";
// import n311 from "";
// import n314 from "";
// import n317 from "";
// import n320 from "";
// import n323 from "";
// import n326 from "";
// import n329 from "";
// import n332 from "";
// import n335 from "";
// import n338 from "";
// import n350 from "";
// import n353 from "";
// import n356 from "";
// import n359 from "";
// import n362 from "";
// import n365 from "";
// import n368 from "";
// import n371 from "";
// import n374 from "";
// import n377 from "";
// import n386 from "";
// import n389 from "";
// import n392 from "";
// import n395 from "";

type AnimatedIconProps = {
  iconNumber: number;
  isDay: boolean;
  className: string;
};

const ANIMATIONS = [
  {
    code: 1000,
    day_animation: d113,
    night_animation: n113,
  },
  {
    code: 1003,
    day_animation: d116,
    night_animation: n116,
  },
  {
    code: 1006,
    day_animation: d106,
    night_animation: n106,
  },
  {
    code: 1009,
    day_animation: d122,
    night_animation: n122,
  },
  {
    code: 1030,
    day_animation: d143,
    night_animation: n143,
  },
  {
    code: 1063,
    day_animation: d176,
    night_animation: n176,
  },
  {
    code: 1066,
    day_animation: d179,
    night_animation: n179,
  },
  {
    code: 1069,
    day_animation: d182,
    night_animation: n182,
  },
  {
    code: 1072,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1087,
    day_animation: d200,
    night_animation: n200,
  },
  {
    code: 1114,
    day_animation: d227,
    night_animation: n227,
  },
  {
    code: 1117,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1135,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1147,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1150,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1153,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1168,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1171,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1180,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1183,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1186,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1189,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1192,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1195,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1198,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1201,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1204,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1207,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1210,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1213,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1216,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1219,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1222,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1225,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1237,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1240,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1243,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1246,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1249,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1252,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1255,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1258,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1261,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1264,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1273,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1276,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1279,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1282,
    day_animation: "",
    night_animation: "",
  },
];

export default function AnimatedIcon({
  iconNumber,
  isDay,
  className,
}: AnimatedIconProps) {
  const changeIcon = () => {
    const icon = ANIMATIONS.find((animation) => animation.code == iconNumber);
    if (icon) return icon[isDay ? "day_animation" : "night_animation"];
    return null;
  };

  return (
    <Lottie animationData={changeIcon()} loop autoPlay className={className} />
  );
}
