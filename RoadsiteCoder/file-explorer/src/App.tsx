import './App.css'
import FolderStr from './components/folderStr';
import { explorer } from './constant/sampleData'

function App() {
  return (
    <>
      <h1>File Explorer</h1>
      <FolderStr data={explorer} />
    </>
  );
}

export default App;