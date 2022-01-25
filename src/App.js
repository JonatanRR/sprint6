import { Escena, Phrase } from './components/escena/Escena';
import Sentences from './sentences.json';

function App() {
  return (
    <div>
      <Phrase sentences = {Sentences} />
    </div>

  );
}

export default App;
