import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div>Logo</div>
      <div>
        <Link href='/auth'>Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;