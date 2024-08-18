function Navbar() {
  return (
    <div className="px-3 ml-7 max-[900px]:hidden ">
      <ul className="flex gap-x-7 text-[var(--darkgrayishblue)]">
        <li>
          <a href="">Collections</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
