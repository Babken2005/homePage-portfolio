import './App.css';

function App() {
  return (
    <div className="content">
      <div className="home">
      <h1 className="wave">👋</h1>
      <header className="a-c">
        <div className="headerLeft">
        <p>B<span>.</span></p>
        </div>
        <div className="headerRight">
          <p>say hi.</p>
        </div>
      </header>
      <div className="homeContent a-c j-c">
        <div className="homeContentParent">
        <div className="block-1 contentTextBlock a-c"><h1>Unique<span>.</span></h1></div>
        <div className="block-2 contentTextBlock a-c"><h1>Gifted<span>.</span></h1></div>
        <div className="block-3 contentTextBlock a-c"><h1>Creative<span>.</span></h1></div>
        <div className="block-4 contentTextBlock a-c"><h1>Individual<span>.</span></h1></div>
        </div>
      </div>
      <footer className="a-c">
        <div className="footerLeft">
          <img src="./images/github.svg" alt="github" />
          <img src="./images/instagram.svg" alt="instagram" />          
          <img src="./images/twitter.svg" alt="twitter" />
          <img src="./images/facebook.svg" alt="facebook" />
        </div>
        <div className="footerRight">
          <p>works.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
