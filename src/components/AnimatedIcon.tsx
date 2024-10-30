import Lottie from "lottie-react";
//  day icons
import d113 from "../assets/d113.json";
import d116 from "../assets/d116.json";
import d119 from "../assets/d119.json";
import d143 from "../assets/d143.json";
import d176 from "../assets/d176.json";
import d179 from "../assets/d179.json";
//  night icons
import n113 from "../assets/n113.json";
import n116 from "../assets/n116.json";
import n176 from "../assets/n176.json";
import n179 from "../assets/n179.json";

type AnimatedIconProps = {
  iconNumber: number;
  isDay: boolean;
  loop?: boolean;
  autoPlay?: boolean;
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
    day_animation: d119,
    night_animation: d119,
  },
  {
    code: 1009,
    day_animation: d119,
    night_animation: d119,
  },
  {
    code: 1030,
    day_animation: d143,
    night_animation: d143,
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
    day_animation: d176,
    night_animation: n176,
  },
  {
    code: 1072,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1087,
    day_animation: "",
    night_animation: "",
  },
  {
    code: 1114,
    day_animation: "",
    night_animation: "",
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
  loop = true,
  autoPlay = true,
  className,
}: AnimatedIconProps) {
  const changeIcon = () => {
    const icon = ANIMATIONS.find((animation) => animation.code == iconNumber);
    if (icon) return icon[isDay ? "day_animation" : "night_animation"];
    return null;
  };

  return (
    <Lottie
      animationData={changeIcon()}
      loop={loop}
      autoPlay={autoPlay}
      className={className}
    />
  );
}
