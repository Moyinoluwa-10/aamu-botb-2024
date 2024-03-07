import PropTypes from "prop-types";
import { motion } from "framer-motion";

const BotMessage = ({ message }) => {
  return (
    <motion.p
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="bot-starter-message"
      className="bot-message text-black mb-3 self-start rounded-lg p-3 bg-[#e0e0e0] max-w-[80%]"
    >
      <span>{message}</span>
      <small></small>
    </motion.p>
  );
};

BotMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default BotMessage;
