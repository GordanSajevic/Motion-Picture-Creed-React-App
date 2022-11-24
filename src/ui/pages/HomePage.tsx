const HomePage = () => {
    return (
      <div>
        <div className='home'>
            <h2>Welcome to Motion Picture Creed</h2>
            <img src={process.env.PUBLIC_URL + "home4.png"} style={{ marginTop: '2em'}} />
        </div>
      </div>
    );
  };
  
  export default HomePage;