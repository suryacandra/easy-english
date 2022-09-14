import { Link } from "react-router-dom";
import Hero from "./UI/Hero";

export default function Homepage() {
  return (
    <Hero>
      <div className="p-5 m-5">
        <h1 className="mb-5 text-5xl font-bold">Welcome to Easy English (Elish)</h1>
        <p className="mb-5">
          Learn english easier with help of Web Speech API
        </p>
        <Link to='/pronunciation'>
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
    </Hero>
  );
}
