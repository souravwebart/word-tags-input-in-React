import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TagsInput from './component/TagsInput';
import SelectInput from './component/selectInput';

function App() {
  return (
    <BrowserRouter>
        <div className="header">
          <div className="navbar">
           <ul className="menubar">
           <li> <Link to="/">LISTTAGS</Link></li>
           <li><Link to="select">SELECTTAGS</Link></li>
           </ul>
          </div>
        </div>
        <main className="main">
        <div className="content">
        <Route path="/select" exact={true} component={SelectInput} />
        <Route path="/" exact={true} component={TagsInput} />
            
        </div>
        
    </main>
    </BrowserRouter>
  );
}

export default App;
