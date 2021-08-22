import './App.css';
import ReactFCCtest from 'react-fcctest';
import Typography from '@material-ui/core/Typography';
import CardContainer from './CardContainer';
import { useState } from 'react';

const colorsArray = [
  "rgba(34, 167, 240, 0.4)",
  "rgba(77, 19, 209, 0.4)",
  "rgba(200, 247, 197, 0.6)",
  "rgba(137, 196, 244, 0.6)",
  "rgba(210, 215, 211, 0.6)",
  "rgba(54, 215, 183, 0.6)"
]


function App() {
  const [color, setColor] = useState(colorsArray[0]);
  let index = colorsArray.indexOf(color);
  let maxIndex = colorsArray.length - 1;

  return (
    <div style={{background: color,
     height: "100vh",
     transition: "background-color 1s ease-in",
     }}>
      <ReactFCCtest />
      <Typography className="page-header" variant="h3" component="h3" gutterBottom>
          Random Quote App
      </Typography>
      <div className="card-wrapper">
        <CardContainer 
        color={color} 
        setColor={setColor} 
        colorsArray={colorsArray} 
        index={index}
        maxIndex={maxIndex}/>
      </div>
      <Typography color="textSecondary" id="signature">
        by James
      </Typography>
    </div>
  );
}

export default App;
