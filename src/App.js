import './App.css';
import imageInSrc from "./imageInSrc.jpg"

function App() {
  return (
    <div>
<div style={{border : "solid 1px black" , maxWidth :"100vw "}}>

<h1 className="titleRed" >Your name here</h1>

<br/>

<img src={imageInSrc} alt ='imageInSrcc' />

<br/>

<img src="/imageInPublic.jpg" alt='hyy' />

    </div>

<video style = {{width:"320" , height:"240"}} controls>

<source src="https://www.youtube.com/watch?v=cFL17WyvGPs" type="video/mp4"/>

</video>
</div>
  );
}

export default App;
