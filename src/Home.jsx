import Movie from "./Movie";
import Search from "./Search";
import Heading from "./Heading"

const Home = () => {
  return (
    <>
      <div className="container">
        <Heading />
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;