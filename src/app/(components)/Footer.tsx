import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg px-32 dark:text-light dark:border-light sm:text-base lg:px-0">
      <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link
          href="https://calendly.com/irehmanullah/30min"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
