import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";

function Home() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
      {showModal ?
      <div className="custom-modal is-flex is-justify-content-center">
        <div className="custom-modal-pin ">
        <button className="close-button" onClick={() => setShowModal(false)}><i className="fas fa-times"></i></button>
        <div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Enter 4 digit Pin" />
            </div>
            <Link to="/password-list">
            <button className="button is-primary mt-4 is-fullwidth">Submit</button>
            </Link>
          </div>
        </div>
        </div>

      </div> : null}
      <div className="is-flex is-justify-content-center">
        <div className="login-container ">
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Username" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>
          <button className="button is-primary mt-4 is-fullwidth" onClick={() => setShowModal(true)}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Home;