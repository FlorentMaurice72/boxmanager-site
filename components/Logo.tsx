export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect width="200" height="200" rx="44" fill="var(--green)" />
      <rect x="38" y="46" width="22" height="108" fill="white" />
      <rect x="140" y="46" width="22" height="108" fill="white" />
      <rect x="38" y="46" width="124" height="22" fill="white" />
      <rect x="60" y="104" width="80" height="14" fill="white" />
      <rect x="60" y="128" width="80" height="14" fill="white" />
    </svg>
  );
}
