
import './App.css';
import ImageInSrc from './telechargement.jfif';
import './style.css';
import Videos from './myVideo.mp4';

function App() {
  return (
    <div className="app">
    <div className="checkpoint" style ={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className={"title red"}>firas guermazi</h1>
      <br/>
      
      <img  src={ImageInSrc} alt='image in the src folder'/>
      <br/>
      <img src="/1.jpg" alt='image in the public folder'/>  
      <br/>
      <video width="340" height="150" controls>
      <source src={Videos} type="video/mp4"/>
      </video>
      </div>
      </div>
  );
};

export default App;
