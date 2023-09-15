import Link from "next/link";

function HeaderPage() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/components/Blog">Blog</Link>
            <Link href="/components/About">About</Link>
        </header>
    );
    }
    export default HeaderPage;