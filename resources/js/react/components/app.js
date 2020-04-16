import React from "react";
import ReactDOM from 'react-dom';
import QRScan from "./components/QRScan"
import QRScanTest from "./components/QRScanTest"
import Update from "./components/Update"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <div>
            <nav className="nav justify-content-start">
              <Link className="nav-link active" to="/react/qrscan" role="button">QR Scan</Link>
              <Link className="nav-link" to="/react/update" role="button">Update</Link>
              
            </nav>
        </div>
        {/* A <Switch> looks through its chidren <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/qrscan">
            <QRScan />
          </Route>
          <Route path="/react/qrscan2">
            <QRScanTest />
          </Route>
          <Route path="/react/update">
            <Update />
          </Route>
        </Switch>
    </Router>
  );
}

if (document.getElementById('qrscan')) {
    ReactDOM.render(<App />, document.getElementById('qrscan'));
}
