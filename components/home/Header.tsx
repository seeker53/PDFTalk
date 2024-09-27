'use client';
import { useState } from 'react';
import Logo from '../ui/Logo';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);
  const buttonStyles = "py-1.5 px-[22px] text-center text-xl font-normal border rounded-[18px] border-solid border-primary";

  return (
    <>
      <div className="container hidden bg-white w-full px-5 h-[78px] sm:flex justify-between items-center border shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] rounded-[30px] border-solid border-[rgba(0,0,0,0.17)] mx-auto">
        <Logo />
        <div className="sm:flex gap-4 items-center">
          <Link href="/sign-in" className={`${buttonStyles} text-primary`}>
            Log in
          </Link>
          <Link href="/sign-up" className={`${buttonStyles} text-white bg_linear`}>
            Sign up
          </Link>
        </div>
      </div>

      <div className="sm:hidden bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-b-[0.5px] h-[54px] flex justify-between items-center px-6 border-b-white border-solid">
        <Logo isMobile={true} />
        <div className="flex justify-center items-baseline">
          <Image
            src="/align-justify.svg"
            onClick={() => setOpen((prev) => !prev)}
            alt="Open menu"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {open && (
        <div className="flex sm:hidden gap-4 items-center py-3 bg-white shadow px-5">
          <Link href="/sign-in" className={`${buttonStyles} text-primary`}>
            Log in
          </Link>
          <Link href="/sign-up" className={`${buttonStyles} text-white bg_linear`}>
            Sign up
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
