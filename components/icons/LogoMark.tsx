import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#375DFB" rx={12} />
    <rect width={24} height={24} fill="#fff" fillOpacity={0.1} rx={12} />
    <path
      fill="url(#logo-mark_svg__a)"
      fillOpacity={0.88}
      stroke="url(#logo-mark_svg__paint1_linear_3717_12807)"
      strokeWidth={0.6}
      d="M11.206 16.18a4.1 4.1 0 0 0 1.34.043l-1.274 4.743-1.262-.337zm4.646 3.952-1.261.337-1.197-4.45c.43-.153.827-.376 1.177-.654zm-6.595-4.928c.33.297.71.541 1.125.72l-3.496 3.483-.922-.92zm10.142 1.924-.923.919-3.294-3.283a4.1 4.1 0 0 0 .677-1.165zm-11.311-3.73c.136.43.342.83.604 1.185L3.871 15.87l-.338-1.256zm12.878-.64-.338 1.256-4.557-1.217q.05-.312.052-.638-.001-.364-.064-.712zM7.99 11.282a4.1 4.1 0 0 0-.068 1.328l-4.888-1.304.338-1.256zm12.477-1.833-4.62 1.233a4.1 4.1 0 0 0-.69-1.162l4.972-1.328zM8.943 9.425c-.297.33-.54.71-.718 1.124L4.6 6.935l.923-.92zm9.093-3.848-3.421 3.408a4.1 4.1 0 0 0-1.173-.67l3.671-3.658zM10.67 8.282c-.43.148-.83.364-1.182.637L8.148 3.93l1.26-.336zm3.379-4.912-1.28 4.759a4.2 4.2 0 0 0-1.345-.03l1.363-5.065z"
    />
    <defs>
      <linearGradient
        id="logo-mark_svg__a"
        x1={12}
        x2={12}
        y1={2.667}
        y2={30.972}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.313} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLogoMark;
