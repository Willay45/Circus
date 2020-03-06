import React, { useState, useEffect } from 'react';
import {getComment, postComment} from "../../api/Api";
import './Garage.css';
import playSound from "../../tech/music.service";
import NavBar from "../global-ui/navbar/NavBar";

const Garage = () => {
  const [comments, setComments] = useState([]);
  const [pseudo, setPseudo] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    (async () => {
      setComments(await getComment());
    })();
  }, []);

  const sendComment = async () => {
    const message = {
      pseudo,
      comment
    };
    try {
      await postComment(message);
    } catch (error) {
      alert('Erreur du post du commentaire')
    }
  };
  return (
    <div className="garage-container">
      <div className="garage-title">
        <h1>Garage</h1>
        <NavBar/>
      </div>
      <div className={"global-message-container"}>
        <div className="message">
          {comments.map((comment, index) => (
            <div key={index} >
              <h2>{comment.pseudo}</h2>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <div className="form-message">
          <form onSubmit={() => {
            sendComment();
            playSound('horn');
          }}>
            <div></div>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" onChange={event => setPseudo(event.target.value)}/>
            <label htmlFor="text">Message</label>
            <input type="text" onChange={event => setComment(event.target.value)}/>
            <input className="submit" type="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Garage;