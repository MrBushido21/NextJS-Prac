import Link from "next/link"

export default function AboutLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div>
        <h1>About Us</h1>
        <ul>
            <li><Link href="/components/About/contact">Contact</Link></li>
            <li><Link href="/components/About/team">Our Team</Link></li>
        </ul>
        {children}
    </div>
  }