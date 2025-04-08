import styles from "./example.module.css";
import styled from 'styled-components';

export const Card = (props) => {

    
  // eslint-disable-next-line react/prop-types
  const { img_url, genre, name, rating , description, cast, watch_url} = props.currEle;
   //Css styles using styles object
  // const Button = styled.button({
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   fontWeight: "bold",
  //   color: "#000",
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   cursor: "pointer",
  //   marginTop: "10px"
  // }); 
  //CSS using template literal add CSS as write in traditional CSSs
  const Button = styled.button`
    background-color: ${(props) => 
      // eslint-disable-next-line react/prop-types
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    font-weight: bold;
    color: #000;
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 10px;
  `;

  // const ratingStyle = {
  //   fontSize: "18px"
  // }

  const Rating = styled.h3`
     font-size: 1.8rem;
     color: #7dcea0;
     text-transform:capitalize;
  `;

  const ratingClass =  rating >= 8.5 ? styles.hit : styles.average;

return (
  <li className={styles.card}>
    <div>
      <img
        src={img_url}
        alt={name}
      />
    </div>
    <div className={styles["card-content"]}>
    <h2>Name: {name} </h2>
    <Rating>
      Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
    </Rating>
    <p>Genre: {genre}</p>
    <p className="text-3xl font-bold underline">Summary: {description}</p>
    <p>Cast: {cast}</p>
    <a href={watch_url} target="_blank">
      <Button rating={rating}>Watch Now</Button>
    </a>
    </div>
  </li>
);
};


 //CSS using module.css
// export const Card = (props) => {

    
//     // eslint-disable-next-line react/prop-types
//     const { img_url, genre, name, rating , description, cast, watch_url} = props.currEle;

//     const btnStyle = {
//         backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//         fontWeight: "bold",
//         color: "#000",
//         padding: "1.2rem 2.4rem",
//         border: "none",
//         fontSize: "1.6rem",
//         cursor: "pointer",
//         marginTop: "10px"
//     }
//     const ratingStyle = {
//       fontSize: "18px"
//     }

//     const ratingClass =  rating >= 8.5 ? styles.hit : styles.average;

//   return (
//     <li className={styles.card}>
//       <div>
//         <img
//           src={img_url}
//           alt={name}
//         />
//       </div>
//       <div className={styles["card-content"]}>
//       <h2>Name: {name} </h2>
//       <h3 style = {ratingStyle}>
//         Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
//       </h3>
//       <p>Genre: {genre}</p>
//       <p>Summary: {description}</p>
//       <p>Cast: {cast}</p>
//       <a href={watch_url} target="_blank">
//         <button style = {btnStyle}>Watch Now</button>
//       </a>
//       </div>
//     </li>
//   );
// };
