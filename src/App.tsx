import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NextBtn from "./components/NextBtn/NextBtn";
import Background from "./modules/Background/Background";
import Header from "./modules/Header/Header";

export default function App() {
  const [userVh, setUserVh] = useState<number>();
  const divRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ container: divRef });

  useEffect(() => {
    setUserVh(window.innerHeight);
  }, []);

  console.log(scrollYProgress);

  return (
    <div
      ref={divRef}
      className="max-h-screen overflow-clip h-full w-full relatve overflow-y-scroll snap-mandatory snap-y"
      onScroll={() => {
        // console.log(divRef.current?.scrollTop);
      }}
    >
      <Header
        callbackFn={() => {
          divRef.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        links={[
          { title: "Skills", href: "/" },
          { title: "About me", href: "/" },
          { title: "Portfolio", href: "/" },
        ]}
      />
      <Background />

      <div className="flex flex-col h-screen items-center justify-center snap-center relative">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-text text-6xl font-bold text-center">
              IVAN LARIN
            </h1>
            <p className="text-[40px] text-text font-extralight text-center">
              <span className="font-medium text-accent">Web Application </span>
              Developer
            </p>
          </div>

          <div className="grid grid-cols-3 gap-9">
            <div className="text-text min-w-[200px] text-2xl text-center font-extralight">
              React.js
            </div>
            <div className="text-text min-w-[200px] text-2xl text-center font-medium">
              Next.js
            </div>
            <div className="text-text min-w-[200px] text-2xl text-center font-extralight">
              Express.js
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full snap-center"></div>

      <div className="h-screen w-full snap-center"></div>

      <NextBtn
        className="absolute bottom-[15%] left-[calc(50%-16px)] cursor-pointer"
        callbackFn={() => {
          divRef.current?.scrollBy({
            top: userVh,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
}
