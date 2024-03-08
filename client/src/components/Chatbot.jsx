import { useFormik } from "formik";
import * as Yup from "yup";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import { useRef, useState } from "react";
import Loading from "./Loading";
import predictedResponses from "../data/data.json";
import ReactHtmlParser from "react-html-parser";
import { TbMessageCircle2Filled } from "react-icons/tb";
import logo from "../assets/images/chat-logo.jpeg";
import bgImg from "../assets/images/bg-chat.jpeg";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      owner: "user",
      responses: "Hi there!",
    },
    {
      owner: "bot",
      responses: "Hello! How can I help you today?",
    },
    {
      owner: "user",
      responses: "What is a touchdown",
    },
    {
      owner: "bot",
      responses:
        "A touchdown is a scoring play in american football. Whether running, passing, returning a kickoff or punt, or recovering a turnover, a team scores a touchdown by advancing the ball into the opponent's end zone. ",
    },
    {
      owner: "user",
      responses: "What is a turnover",
    },
    {
      owner: "bot",
      responses:
        "In american football, a turnover occurs when the team with the ball loses possession of the ball to the opposing team. ",
    },
    {
      owner: "user",
      responses: "What is a kickoff",
    },
    {
      owner: "bot",
      responses:
        "A kickoff is a method of starting a drive in american football. Typically, a kickoff consists of one team – the 'kicking team'S – kicking the ball to the opposing team – the 'receiving team'",
    },
  ]);
  const [isChatting, setIsChatting] = useState(true);
  const chatBlockRef = useRef(null);
  const handleToggle = () => {
    setIsChatting((isChatting) => !isChatting);
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setChatHistory((prevData) => [
        ...prevData,
        { owner: "user", responses: values.message },
      ]);
      const resp = predictedResponses.find(
        (predictedResponse) => predictedResponse.question === values.message
      )?.response;
      setTimeout(() => {
        if (resp) {
          setSubmitting(false);
          resetForm();
          setChatHistory((prevData) => [
            ...prevData,
            { owner: "bot", responses: resp },
          ]);
          chatBlockRef.current.scrollIntoView({
            block: "end",
          });
        } else {
          setSubmitting(false);
          resetForm();
          setChatHistory((prevData) => [
            ...prevData,
            {
              owner: "bot",
              responses:
                "Sorry, I have not been trained to respond to this type of question. However, I am constantly improving.",
            },
          ]);
          chatBlockRef.current.scrollIntoView({
            block: "end",
          });
        }
      }, 1000);
      setTimeout(() => {
        chatBlockRef.current.scrollIntoView({
          block: "end",
        });
      }, 2000);
    },
  });

  return (
    <>
      <div
        className={
          isChatting
            ? "chat-container max-h-[700px] overflow-hidden"
            : "chat-container max-h-0 overflow-hidden"
        }
      >
        <div className="chat-header">
          <span className="w-8 rounded-full overflow-hidden border-2 border-white">
            <img src={logo} alt="" className="w-full" />
          </span>{" "}
          TouchdownAI
        </div>

        <div
          className="chat-body bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div
            className="chat-block bg-cover"
            style={{ backgroundImage: `url${bgImg}` }}
            ref={chatBlockRef}
          >
            <h5 className="chat-timestamp text-center">
              {new Date().getHours() > 10
                ? new Date().getHours()
                : "0" + new Date().getHours()}
              :
              {new Date().getMinutes() > 10
                ? new Date().getMinutes()
                : "0" + new Date().getMinutes()}
            </h5>
            {chatHistory.map((item, i) => {
              if (item.owner === "user") {
                return <UserMessage key={i} message={item.responses} />;
              } else {
                return (
                  <BotMessage key={i}>
                    {ReactHtmlParser(item.responses)}
                  </BotMessage>
                );
              }
            })}
          </div>
          {formik.isSubmitting ? <Loading /> : null}
        </div>

        <div className="chat-footer">
          <form className="flex items-center" onSubmit={formik.handleSubmit}>
            <div className="w-[80%]">
              <input
                type="text"
                name="message"
                className="w-full h-10 rounded-s-xl px-5"
                placeholder="Tap 'Enter' to send a message"
                required
                {...formik.getFieldProps("message")}
              />
            </div>
            <div className="w-[20%]">
              <button
                type="submit"
                className="submit-btn"
                disabled={formik.isSubmitting}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="w-14 h-14 rounded-full border-2 fixed bottom-10 right-10 bg-primary flex items-center justify-center cursor-pointer animate-bounce"
        onClick={handleToggle}
      >
        <TbMessageCircle2Filled className="text-white text-4xl" />
      </div>
    </>
  );
};

export default Chatbot;
