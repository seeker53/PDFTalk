import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isMobile?: boolean;
}

const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href="/" aria-label="PDF-Talk Logo" className="flex items-center">
      <div className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="PDF-Talk Logo"
          width={30}
          height={34}
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 transform hover:scale-110" // Added scaling on hover
        />
      </div>
      {!isMobile && (
        <h1 className="text-primary text-[28px] sm:text-[32px] ml-2 font-bold transition-colors duration-300 hover:text-slate-600">
          PDF-Talk
        </h1>
      )}
    </Link>
  );
};

export default Logo;
