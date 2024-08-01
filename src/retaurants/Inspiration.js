const Inspiration = ({ check, calfunc }) => {
    calfunc(20)
  return (
    
    <div className="card">
      <div className="card-header">Inspirational Quotes...</div>
      <div className="card-body">
        <h3>Get Motivated and Get Moving with the Quotes Below...</h3>
        <ul>
          {check.map(function (quo,index) {
            //we can loop wih this
              return <li key={index}>{quo.text}***|<span>{quo.author}</span></li>;
          })}
              </ul>
              
        <button button onClick={() => { alert(calfunc(8)) }}>Click Me
        </button>

      </div>
      </div>
      
  );
};

export default Inspiration;
