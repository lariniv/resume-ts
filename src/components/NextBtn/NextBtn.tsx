export default function NextBtn({
  className,
  callbackFn,
}: {
  className: string;
  callbackFn: () => void;
}) {
  return (
    <svg
      className={className}
      onClick={() => callbackFn()}
      width="32"
      height="51"
      viewBox="0 0 32 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_42_1217)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.2 35.0625V15.9375C31.2 7.57556 24.3947 0.796875 16 0.796875C7.60527 0.796875 0.8 7.57556 0.8 15.9375V35.0625C0.8 43.4244 7.60527 50.2031 16 50.2031C24.3947 50.2031 31.2 43.4244 31.2 35.0625ZM16 0C7.16345 0 0 7.13547 0 15.9375V35.0625C0 43.8645 7.16345 51 16 51C24.8366 51 32 43.8645 32 35.0625V15.9375C32 7.13547 24.8366 0 16 0Z"
          fill="url(#paint0_linear_42_1217)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5996 39.8438V11.1562H16.3996V39.8438H15.5996Z"
          fill="url(#paint1_linear_42_1217)"
        />
        <path
          d="M17.6004 39.8438C17.6004 40.724 16.8841 41.4375 16.0004 41.4375C15.1167 41.4375 14.4004 40.724 14.4004 39.8438C14.4004 38.9635 15.1167 38.25 16.0004 38.25C16.8841 38.25 17.6004 38.9635 17.6004 39.8438Z"
          fill="#D9D9D9"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_42_1217"
          x1="-15.6"
          y1="-10.5187"
          x2="19.7791"
          y2="83.3985"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_42_1217"
          x1="-4.80038"
          y1="0.398423"
          x2="21.0463"
          y2="45.9074"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_42_1217">
          <rect width="32" height="51" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
