const NavList = ({ handleOnClickImage }) => {
  return (
    <>
      <li>
        <a
          href="#top"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-blue-500 "
          onClick={handleOnClickImage}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#resources"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-blue-500 "
          onClick={handleOnClickImage}
        >
         Resources
        </a>
      </li>
      <li>
        <a
          href="#schemes"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-blue-500 "
          onClick={handleOnClickImage}
        >
          Government Schemes
        </a>
      </li>
     
      <li>
        <a
          href="#apply"
          className="hover:underline
          hover:underline-offset-8  hover: decoration-blue-500 "
          onClick={handleOnClickImage}
        >
          Wanna Apply
        </a>
      </li>
    </>
  );
};

export default NavList;
