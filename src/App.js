
import './App.css';
import Video from './pages/Video';
import clip from "../src/videos/clipnatureza.mp4"
import clip1 from "../src/videos/cliplago.mp4"

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Prado_jvic"
          description="natureza"
          music="epic music"
          url={clip}
        />
        <Video
          likes={110}
          messages={210}
          shares={310}
          name="Prado_jvic"
          description="natureza"
          music="celta music"
          url={clip1}
        />
      </div>
    </div>
  );
}

export default App;
