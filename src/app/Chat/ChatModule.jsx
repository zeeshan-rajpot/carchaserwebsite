import Navbar from "../Components/Navbar";

const ChatModule = () => {
  const chatMessagesData = [
    {
      imageSrc: "/Ellipse 926.svg",
      message: "Hello, this is me, Mohsin?",
      timestamp: "12:34pm",
    },
    {
      imageSrc: "/Ellipse 926.svg",
      message: "How much my car Worth? ",
      timestamp: "12:34pm",
    },
    // Add more chat messages as needed
  ];
  return (
    <>
      <Navbar />
<div className=" " style={{background:'rgb(235, 235, 235)' , height:'100vh'}}>
<h1 className="w-75 m-auto pt-5">
        <b className="">Chat Support</b>
      </h1>

      <div className="w-75 m-auto p-2 bg-light pb-5 " style={{ height: "" }}>
        <div className=" d-flex align-items-center  justify-content-start border-bottom pb-2">
          <div>
            <img src="/Ellipse 926.svg" alt="" width="48px" />
          </div>
          <div className="ms-2">
            <h3 className="mb-0">
              <b>name</b>
            </h3>
            <p className="mb-0">last seen at 12:34pm</p>
          </div>
        </div>

        {/* Chat  start here  */}

        <div className="" id="header" style={{ height: "60vh" }}>
          {/* msg take by the user */}
          {chatMessagesData.map((message, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-start pb-1 mt-2"
            >
              <div>
                <img src={message.imageSrc} alt="" width="48px" />
              </div>
              <div className="ms-2">
                <p className="mb-0 p-2" style={{ background: "#EBEBEB" }}>
                  {message.message}
                </p>
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Last seen at {message.timestamp}
                </p>
              </div>
            </div>
          ))}

          {chatMessagesData.map((message, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-end pb-1 mt-2"
            >
              <div className="me-2">
                <p className="mb-0 p-2" style={{ background: "#EBEBEB" }}>
                  {message.message}
                </p>
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Last seen at {message.timestamp}
                </p>
              </div>
              <div className="">
                <img src={message.imageSrc} alt="" width="48px" />
              </div>
            </div>
          ))}
          {/* chat msg input flield */}
          <div id="header-content" className="  " style={{width:'80%' ,marginLeft:'10%'}} >
            <div className="m-auto w-100"  style={{ position: "relative", display: "inline-block" , width:'70%' }}>
              <input type="text" className="msgsendinput w-100 p-2" />
              <img
                className="sendimg"
                src="/ion_send.svg"
                alt="send"
              />
            </div>
          </div>
        </div>
      </div>
</div>
   
    </>
  );
};

export default ChatModule;
