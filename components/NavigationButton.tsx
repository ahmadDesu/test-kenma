import React from "react";
import { useRouter } from "next/router";

function NavigationButton({ returnTo }: any) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(returnTo);
  };

  return (
    <button onClick={handleNavigation}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        className="w-[35px] h-[35px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </button>
  );
}

export default NavigationButton;
