
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
   <header className="navbar">
  <div className="logo">MediMate</div>
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/features">Features</Link></li>
    </ul>
  </nav>
</header>


      <main>{children}</main>

     
    </>
  );
}
