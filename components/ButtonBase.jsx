import Link from 'next/link';

const ButtonBase = ({ name, href, className, children }) => {
  return (
    <Link href={href} passHref>
      <a
        className={`cursor-pointer text-xl xl:text-base xl:shadow-sm py-2 px-4 xl:rounded-lg capitalize  font-semibold transition duration-500 ease-in-out xl:hover:text-white xl:hover:bg-brand-red-dark transform xl:hover:-translate-y-1 xl:hover:scale-110 xl:inline flex justify-between mr-9 xl:mr-0 ${className}`}
        href={href}>
        {name} &nbsp;
        {children}
      </a>
    </Link>
  );
};

export default ButtonBase;
