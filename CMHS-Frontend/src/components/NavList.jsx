const NavList = ({ handleOnClickImage }) => {
  return (
    <>
      <li>
        <a
          href="#top"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-lime-400 "
          onClick={handleOnClickImage}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#resources"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-lime-400 "
          onClick={handleOnClickImage}
        >
         Resources
        </a>
      </li>
      <li>
        <a
          href="#schemes"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-lime-400 "
          onClick={handleOnClickImage}
        >
          Government Schemes
        </a>
      </li>
     
      <li>
        <a
          href="#contact"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-lime-400 "
          onClick={handleOnClickImage}
        >
          Contact Us
        </a>
      </li>
    </>
  );
};

export default NavList;
