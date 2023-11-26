import ArrowIcon from "../../components/ArrowIcon/ArrowIcon";
import CurlyIcon from "../../components/CurlyIcon/CurlyIcon";
import HashIcon from "../../components/HashIcon/HashIcon";
import SemiIcon from "../../components/SemiIcon/SemiIcon";
import SlashIcon from "../../components/SlashIcon/SlashIcon";
import SquareIcon from "../../components/SquareIcon/SquareIcon";

export default function Background() {
  return (
    <div className="fixed h-screen w-full -z-50 bg-background">
      <div className="relative h-screen">
        <div className="gradient--green" />
        <div className="gradient--pink" />
        <div className="gradient--blue" />
        <HashIcon className="absolute bottom-[2%] right-[40%] rotate-[28deg]" />
        <CurlyIcon className="absolute top-[15%] left-[20%] rotate-[35deg]" />
        <SlashIcon className="absolute top-[45%] left-[10%] rotate-[95deg]" />
        <SemiIcon className="absolute bottom-[20%] right-[20%] rotate-[-140deg]" />
        <SquareIcon className="absolute top-[27%] right-[35%] rotate-[-125deg]" />
        <ArrowIcon className="absolute bottom-[20%] left-[25%] rotate-[-30deg]" />
      </div>
    </div>
  );
}
