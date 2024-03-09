import './App.css';
import { content } from './assets/Data';
import Tabbed from './components/Tabbed';

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
