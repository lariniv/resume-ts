import HeaderLink from "../../components/HeaderLink/HeaderLink";
import HeaderLinkProps from "../../types/HeaderTypes";

export default function Header({ links }: { links: HeaderLinkProps[] }) {
  return (
    <header className="max-w-[1200px] w-full mx-auto flex flex-row items-center justify-between pt-8">
      <img src="./images/logo.svg" alt="logo" />
      <nav className="flex gap-10 items-center">
        <ul className="flex gap-12">
          {links.map((item, index) => (
            <HeaderLink key={index} title={item.title} href={item.href} />
          ))}
        </ul>

        <button className="border-2 block border-accent text-accent py-2 px-4 rounded font-medium hover:opacity-70 transition-opacity duration-300">
          Contact
        </button>
      </nav>
    </header>
  );
}
