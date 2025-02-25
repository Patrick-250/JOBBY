import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/Wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  {
    /*console.log(error);*/
  }
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>oops page not found</h3>
          <p>we can't find the page you are looking for</p>
          <Link to="/dashboard">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
