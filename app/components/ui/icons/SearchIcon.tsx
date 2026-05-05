import { iconType } from '@/types/iconTypes'


export default function SearchIcon({className, color}: iconType) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#search_clip)">
        <path
          d="M19.1139 18.7719L17.3596 17.0175M1.57007 9.56136C1.57007 4.95899 5.30103 1.22803 9.9034 1.22803C14.5058 1.22803 18.2367 4.95899 18.2367 9.56136C18.2367 14.1637 14.5058 17.8947 9.9034 17.8947C5.30103 17.8947 1.57007 14.1637 1.57007 9.56136Z"
          stroke={color} 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="search_clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
