import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

const Main = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
