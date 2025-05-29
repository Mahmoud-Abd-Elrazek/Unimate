import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";


const ChatbotIframe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* زر التحكم */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[99] w-14 h-14 rounded-full text-2xl flex items-center justify-center shadow-2xl bg-white border transition duration-300 hover:scale-110"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <IoIosArrowDown size={30} className="text-[#e2606d]"/> : <TbMessageChatbot className="text-[#e2606d]" size={30}/>}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[90%] max-w-md h-[76%] bg-white rounded-xl overflow-hidden shadow-md z-[100]">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/mmxgFf-wRNPfCTfGJjPhf"
            className="w-full h-full border-0"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotIframe;
