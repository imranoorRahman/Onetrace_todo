import ReactDOM from 'react-dom';
// import { Left, Right } from './sections';
export default function App() {
    return (
        <div className="container">
                Todo List:
           {/* <div className='left'><Left/></div>
           <div className='right'><Right/></div> */}
        </div>
    )
}

if (document.getElementById('app-container')) {
    ReactDOM.render(<App />, document.getElementById('app-container'));
}
