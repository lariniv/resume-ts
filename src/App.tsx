import { motion } from "framer-motion";
import Header from "./modules/Header/Header";

export default function App() {
  return (
    <div className="h-full w-full">
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-[200px] h-[200px] bg-text"
        animate={{ x: 1000 }}
      />
      <Header
        links={[
          { title: "Skills", href: "/" },
          { title: "About me", href: "/" },
          { title: "Portfolio", href: "/" },
        ]}
      />
    </div>
  );
}
