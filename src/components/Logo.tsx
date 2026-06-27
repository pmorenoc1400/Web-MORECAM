export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <div className="flex items-center gap-4">
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="256" cy="256" r="240" stroke="white" strokeWidth="16" fill="none" />
        <g transform="translate(256,256)">
          <g transform="rotate(0)">
            <path d="M0-40 L110 -10 L40 60 Z" fill="white" />
          </g>
          <g transform="rotate(120)">
            <path d="M0-40 L110 -10 L40 60 Z" fill="white" />
          </g>
          <g transform="rotate(240)">
            <path d="M0-40 L110 -10 L40 60 Z" fill="white" />
          </g>
        </g>
        <circle cx="256" cy="256" r="28" fill="white" />
      </svg>
      <div className="hidden flex-col leading-tight md:flex">
        <span className="font-bold tracking-widest text-white">MORECAM</span>
        <span className="text-xs uppercase text-white/70">Energía Cooperativa</span>
      </div>
    </div>
  );
}
