import { useEffect } from "react";

const ChatbaseWidget = () => {
  useEffect(() => {
    if (!window.chatbase) {
      window.chatbase = (...args: unknown[]) => {
        if (window.chatbase) {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        }
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: unknown[]) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "mmxgFf-wRNPfCTfGJjPhf";
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      const script = document.getElementById("mmxgFf-wRNPfCTfGJjPhf");
      if (script) {
        script.remove();
      }
    };
  }, []);


  return null; // لأنه مجرد سكريبت، مش بيعرض UI هنا
};

export default ChatbaseWidget;
