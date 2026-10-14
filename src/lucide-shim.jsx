export {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Flame,
  MapPin,
  Menu,
  MessageCircle,
  Star,
  X,
} from '../node_modules/lucide-react/dist/esm/lucide-react.mjs'

export function Instagram({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}
