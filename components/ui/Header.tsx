import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import Link from 'next/link';
import { currentUser, User } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs'; // Make sure to import User

export default async function Header() {
  const [user, setUser] = useState<User | null>(null); // Define user state type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await currentUser();
      setUser(fetchedUser); // This should now match the type
      setLoading(false);
    };

    fetchUser();
  }, []);

  const isLoggedIn = !!user;

  if (loading) {
    return (
      <header className="sticky top-0 z-40 bg-white w-full border-b border-b-slate-200 shadow-sm">
        <div className="h-16 py-4 container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-5">
            <span className="text-gray-400">Loading...</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-white w-full border-b border-b-slate-200 shadow-sm">
      <div className="h-16 py-4 container mx-auto">
        <nav className="flex justify-between mx-10">
          <Link href="/" className="hover:text-slate-600 cursor-pointer flex items-center" aria-label="Home">
            <Logo />
            <span className="text-2xl mb-2 font-medium">PDF-Talk</span>
          </Link>
          <div className="flex items-center gap-5">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" aria-label="Dashboard">Dashboard</Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <Link href="/sign-in" aria-label="Log in">Log in</Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

const Logo = React.memo(() => {
  return (
    <svg
      width={31}
      height={34}
      viewBox="0 0 31 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_195_2681)">
        <path
          d="M9.187 9.516c1.815 8.432 5.975 22.26 5.975 8.962C15.162 5.527 42.516 14.286 6 2"
          stroke="url(#paint0_linear_195_2681)"
          strokeWidth={3}
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_195_2681"
          x={0.5}
          y={0.5}
          width={30}
          height={33}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_195_2681"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_195_2681"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_195_2681"
          x1={13.9886}
          y1={2}
          x2={9.57972}
          y2={32.3101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A1A24" />
          <stop offset={0.745342} stopColor="#1E2028" stopOpacity={0.54} />
        </linearGradient>
      </defs>
    </svg>
  );
});
