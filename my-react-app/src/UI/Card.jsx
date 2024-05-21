// eslint-disable-next-line react/prop-types
export default function Card({ children, className }) {
  return <div className={`bg-black/75 ${className}`}>{children}</div>;
}
