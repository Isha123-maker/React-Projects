import Data from "../api/data.json";
import { Card } from "./card";

const ExampleProject = () => {  //parent component
  return (
    
    <ul className="grid grid-three-cols">
        {Data.map((currEle) => ( //child component
          <Card key={currEle.id} currEle = {currEle} /> //currEle is props
        ))}
        
    </ul>
  );
};

export default ExampleProject;

  // const ExName = "Queen of Tears";

  // const Summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam obcaecati quis repellendus possimus est, ducimus suscipit atque corrupti nesciunt! Sint, dolorum ullam. Ratione, ut repellendus culpa placeat tempore ipsa.";

  // let age = 19;

  // const canWatch = () => {
  //     if(age >= 18) return "Watch Now";
  //     return "Not Available";
  // };

  // const returnGenre = () => {
  //     const Genre = "RomCom";
  //     return Genre;
  // };



