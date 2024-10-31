import Shell from "@/components/shell";
import Creations from "./creations";
import Studio from "./studio";
import React from "react";  // 确保导入 React

const Page = () => {
  return (
    <Shell title="Create Music">
      <div className="my-4 grid grid-cols-3 2xl:grid-cols-2 gap-8">
        <Studio />
        <div className="col-span-2 2xl:col-span-1">
          <Creations />
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("message",function(t){var e=document.getElementById("openassistantgpt-chatbot-iframe"),s=document.getElementById("openassistantgpt-chatbot-button-iframe");"openChat"===t.data&&(console.log("Toggle chat visibility"),e&&s?(e.contentWindow.postMessage("openChat","*"),s.contentWindow.postMessage("openChat","*"),e.style.pointerEvents="auto",e.style.display="block",window.innerWidth<640?(e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="9999"):(e.style.position="fixed",e.style.width="30rem",e.style.height="65vh",e.style.bottom="0",e.style.right="0",e.style.top="",e.style.left="")):console.error("iframe not found")),"closeChat"===t.data&&e&&s&&(e.style.display="none",e.style.pointerEvents="none",e.contentWindow.postMessage("closeChat","*"),s.contentWindow.postMessage("closeChat","*"))});
          `}} 
      />
      <iframe
          src="https://www.openassistantgpt.io/embed/clzqoq3tj0003ev5a3ukcmnu4/button?chatbox=false"
          scrolling='no'
          id="openassistantgpt-chatbot-button-iframe"
          className="fixed bottom-0 right-0 mb-4 z-50 flex items-end inline-block mr-4 w-14 h-14 border border-gray-300 rounded-full shadow-md"
      ></iframe>
      <iframe
          src="https://www.openassistantgpt.io/embed/clzqoq3tj0003ev5a3ukcmnu4/window?chatbox=false&withExitX=true"
          style={{
            marginRight: '1rem',
            marginBottom: '6rem',
            display: 'none',
            position: 'fixed',
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            height: '65vh',
            border: '2px solid #e2e8f0',
            borderRadius: '0.375rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            width: '30rem'
          } as React.CSSProperties}  // 强制类型转换
          allow="clipboard-read; clipboard-write"
          className="z-50"
          id="openassistantgpt-chatbot-iframe"
      ></iframe>
    </Shell>
  );
};

export default Page;
