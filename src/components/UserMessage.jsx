import PropTypes from "prop-types";
import { motion } from "framer-motion";

const UserMessage = ({ message }) => {
  return (
    <motion.p
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="bot-starter-message"
      className="user-message text-white mb-3 self-end rounded-lg p-3 bg-primary max-w-[80%]"
    >
      <span>{message}</span>
      <small></small>
    </motion.p>
  );
};

UserMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default UserMessage;
