import HeaderLinkProps from "../../types/HeaderTypes";

export default function HeaderLink({ title, href }: HeaderLinkProps) {
  return (
    <li className="text-xl text-text font-light">
      <a
        href={href}
        className="block relative before:w-full before:h-0.5 before:block before:bg-text before:absolute before:bottom-0 overflow-hidden before:-translate-x-[105%] before:transition before:duration-300 hover:before:delay-0 before:delay-300 hover:before:translate-x-[0%] transtion duration-300"
      >
        {title}
      </a>
    </li>
  );
}
