import './App.css';
import Profile from './profile/Profile';
import Image2 from './imag/image1.jpg';
import Image1 from './imag/image2.jpg';
import Image3 from './imag/imag3.jpg';

function App() {
  const data = [
    { 
        id : 1 ,
        name : "fedi",
        bio : "stuied at essec",
        profession : "commercial",
        profilePhoto :  Image1 
    },
    { 
        id : 2 ,
        name : "bassem",
        bio : "stuied at essec",
        profession : "commercial",
        profilePhoto : Image2 
    },
    { 
        id:3 ,
        name : "anis",
        bio : "stuied at essec",
        profession :"commercial",
        profilePhoto : Image3
    }
    
]
  return (
    <div className="wrapper">
      {
        data.map(item=><Profile name={item.name} bio={item.bio} profession={item.profession} profilePhoto={item.profilePhoto}>{item.profilePhoto}</Profile>)
      }
       
    </div>
  );
}

export default App;
