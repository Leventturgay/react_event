
const events = () => {
  let message= "Event Based Message"
const handleClick=()=>{
  alert("Buton Clicked")
};
const handleClear=(msg)=>{
alert(msg);
};
const handleChange=(event)=>{
  message= "react"
  console.log(event.target)
};

  return (
    <div className="container text-center mt-4">
      <h1> {message} </h1>
      <button onClick={handleClick} className="btn btn-success">Click</button>
      <button onClick={()=>handleClear("Clear btn Clicked")} className="btn btn-dark">Clear</button>
      <button onClick={handleChange} className="btn btn-danger">Change</button>
    </div>
  )
}

export default events
