import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";
const Main = () => {
  const {
    callGemini,
    recentprompt,
    showresult,
    loading,
    resultData,
    setinput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>AI2.0</p>
        <img className="user" src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can I help you today</p>
            </div>

            <div className="cards">
              <div
                onClick={() => {
                  setinput(
                    "Suggest beautiful places to see on an upcoming road trip"
                  );
                  callGemini(
                    "Suggest beautiful places to see on an upcoming road trip"
                  );
                }}
                className="card"
              >
                <p>Suggest beautiful places to see on a upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div
                onClick={() => {
                  setinput("Briefly summarize this concept : urban planning");
                  callGemini("Briefly summarize this concept : urban planning");
                }}
                className="card"
              >
                <p>Briefly summarize this concept : urban planning </p>
                <img src={assets.bulb_icon} alt="compass_icon" />
              </div>
              <div
                onClick={() => {
                  setinput(
                    "Brainstorm team bonding activities for our work retreat"
                  );
                  callGemini(
                    "Brainstorm team bonding activities for our work retreat"
                  );
                }}
                className="card"
              >
                <p>Brainstorm team bonding activities for our work retreat </p>
                <img src={assets.message_icon} alt="compass_icon" />
              </div>
              <div
                onClick={() => {
                  setinput("Improve the readability of the following code");
                  callGemini("Improve the readability of the following code");
                }}
                className="card"
              >
                <p>Improve the readability of the following code </p>
                <img src={assets.code_icon} alt="compass_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompt}</p>
            </div>
            <div className="resultdata">
              <img src={assets.gemini_icon2} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="img-search-box">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => callGemini()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            AI2.0 may display suggestions based on your past interactions, and
            your current context. You can always customize your MY-AI experience
            by selecting a different context or deleting past interactions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
