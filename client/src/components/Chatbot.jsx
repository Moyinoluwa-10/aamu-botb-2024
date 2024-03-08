import { useFormik } from "formik";
import * as Yup from "yup";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import { useRef, useState } from "react";
import Loading from "./Loading";
import predictedResponses from "../data/data.json";
import ReactHtmlParser from "react-html-parser";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatting, setIsChatting] = useState(false);
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
            { owner: "bot", responses: "I don't understand" },
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
        <div className="chat-header ">TouchdownAI</div>

        <div className="chat-body">
          <div className="chat-block" ref={chatBlockRef}>
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
