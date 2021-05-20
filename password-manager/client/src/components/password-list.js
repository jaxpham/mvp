import React, {useState} from 'react';

const data = [
  {website: 'Gmail', username: 'SteveZissou', password: 'Ninjaturtles808'},
  {website: 'Chase Bank', username: 'GrandBudapest', password: 'Ninjaturtles808'},
  {website: 'Netflix', username: 'Mister0', password: 'Ninjaturtles808'}
];



function PasswordList() {

  const [showCreds, setShowCreds] = useState(false);
  const [indexList, setIndexList] = useState([]);

  const handleShow = e => {
    const index = parseInt(e.currentTarget.dataset.index);
    if (!indexList.includes(index)) {
      setIndexList([...indexList, index]);
      // console.log(indexList);
    }

    if (indexList.includes(index)) {
      const i = indexList.indexOf(index);
      setIndexList([...indexList.slice(0, i), ...indexList.slice(i + 1)])
    }
  }

  const items = data.map((item, i) => (
    <div className="card mt-5" key={i} >
    <header className="card-header">
      <p className="card-header-title">
        {item.website}
      </p>
    </header>
    {(indexList.includes(i)) ?
    <div className="card-content">
      <div className="content">
        {item.username}  {item.password}
      </div>
    </div> : null}
    <footer className="card-footer">
      <a href="#" className="card-footer-item" data-index={i} onClick={handleShow}>
        {indexList.includes(i) ? 'Hide' : 'Show' }
        </a>
      <a href="#" className="card-footer-item">Edit</a>
      <a href="#" className="card-footer-item">Delete</a>
    </footer>
    </div>))


  return (
    <div className="mt-6">
      <div className="is-flex">
        <div className="field">
            <label className="label">Website</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Website Name" />
              <span className="icon is-small is-left">
                <i className="fas fa-globe"></i>
              </span>
            </div>
        </div>
        <div className="field pl-4">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Username" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
        </div>
        <div className="field px-4">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-clipboard"></i>
              </span>
            </div>
        </div>
        <div className="is-flex is-flex-direction-column-reverse pb-3">
          <button className="button is-primary is-align-items-center">Save</button>
        </div>
      </div>
      <div className="is-flex is-align-items-center">
        <span className="is-size-4">Add Another Website</span>
        <button className="ml-2 button-plus">
          <i className="far fa-plus-square fa-2x"></i>
        </button>
      </div>
      <div>
        <h2 className="is-size-3 mb-4 mt-6 has-text-weight-bold">Stored Passwords</h2>
        {/* <div>
          <div className="is-flex is-align-items-center pb-4">
            <div className="is-flex-grow-1 flex-basis-100">Gmail</div>
            <div className="hidden-password is-flex-grow-1 flex-basis-100">**************</div>
            <div className="pl-4 is-flex-grow-1 flex-basis-100"><button className="button is-primary is-outlined" >Show Password</button></div>
          </div>
          <div className="is-flex is-align-items-center pb-4">
            <div className="is-flex-grow-1 flex-basis-100">Chase</div>
            <div className="hidden-password is-flex-grow-1 flex-basis-100">**************</div>
            <div className="pl-4 is-flex-grow-1 flex-basis-100"><button className="button is-primary is-outlined">Show Password</button></div>
          </div>
          <div className="is-flex is-align-items-center pb-4">
            <div className="is-flex-grow-1 flex-basis-100">Netflixfdfdfdf</div>
            <div className="hidden-password is-flex-grow-1 flex-basis-100">**************</div>
            <div className="pl-4 is-flex-grow-1 flex-basis-100"><button className="button is-primary is-outlined">Show Password</button></div>
          </div>
        </div> */}

        {/* <div className="card mt-5">
          <header className="card-header">
            <p className="card-header-title">
              Gmail
            </p>
          </header>
          {showCreds ?
          <div className="card-content">
            <div className="content">
              SteveZissou  Ninjaturtles808
            </div>
          </div> : null}
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={() => setShowCreds(!showCreds)}>
              {showCreds ? 'Hide' : 'Show' }
              </a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
        <div className="card mt-5">
          <header className="card-header">
            <p className="card-header-title">
              Chase Bank
            </p>
          </header>
          {showCreds ?
          <div className="card-content">
            <div className="content">
              GrandBudapest  Ninjaturtles808
            </div>
          </div> : null}
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={() => setShowCreds(!showCreds)}>
              {showCreds ? 'Hide' : 'Show' }
              </a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
        <div className="card mt-5">
          <header className="card-header">
            <p className="card-header-title">
              Netflix
            </p>
          </header>
          {showCreds ?
          <div className="card-content">
            <div className="content">
              Mister0  Ninjaturtles808
            </div>
          </div> : null}
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={() => setShowCreds(!showCreds)}>
              {showCreds ? 'Hide' : 'Show' }
              </a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div> */}

        {items}
      </div>
    </div>
  )
}

export default PasswordList;