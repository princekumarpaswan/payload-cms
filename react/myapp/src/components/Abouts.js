import React from "react";
import { Link } from "react-router-dom";

const Abouts = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      {data.map((e) => (
        <Link key={e} to={`/abouts/${e}`}>
          {e}
        </Link>
      ))}
    </div>
  );
};

export default Abouts;
