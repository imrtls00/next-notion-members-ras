/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5e4HLw6zhOk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="overlay-card fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-full shadow-lg">
      <Link href="/" className="hover:text-gray-300" prefetch={false}>
      <Avatar href="/" className="w-12 h-12">
        <AvatarImage src="/favicon.ico"/>
        <AvatarFallback>Logo</AvatarFallback>
      </Avatar>
      </Link>
      <nav className="flex items-center space-x-8 text-white">
        <Link href="/members" className="hover:text-gray-300" prefetch={false}>
          Members
        </Link>
        <Link href="/members/edit" className="hover:text-gray-300" prefetch={false}>
          Edit Members
        </Link>
        <Link href="#" className="hover:text-gray-300" prefetch={false}>
          About
        </Link>
      </nav>
      <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-4 py-2">
        About <ArrowRightIcon className="ml-2" />
      </Button>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}