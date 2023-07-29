import React from 'react'
import './Card.css'

function Subcard(props) {

  const perc = props.present / props.total * 100;

  // var modal = document.getElementById();

  // console.log(props.id)
  // var btn = document.getElementById(`${props.id}`);
  // var span = document.getElementsByClassName("close")[0];

  // btn.onclick = function () {
  //   modal.style.display = "block";
  // }

  // span.onclick = function () {
  //   modal.style.display = "none";
  // }

  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.present} / {props.total}</p>
      <p>{Number(props.present) / Number(props.total) * 100}%</p>
      <div className="progress-bar" style={{ 'background': `radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient(hotpink ${perc}%, pink 0)` }}>
      </div>

      {/* Mondal content */}
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>


    </div>
  )
}

export default Subcard