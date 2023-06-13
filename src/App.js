import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');

  return (
  <div>
    <header className="App-header">
      <h1>{timelineData.person}'s social media feed</h1>
    </header>
    <body>
      {/* <Timeline /> */}
    </body>
  </div>
  );
}

export default App;

