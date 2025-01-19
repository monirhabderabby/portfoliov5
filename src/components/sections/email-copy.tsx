"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

const EmailCopy = () => {
  const [isCopied, setIsCopied] = useState<true | false>(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("monirhrabby.personal@gmail.com");

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <div className="flex- flex-col items-center mx-auto">
      <div className="flex items-center gap-[10px] md:gap-x-[20px] text-[20px] md:text-[20px] font-rajdhani text-white/80">
        <Mail />
        <p>monirhrabby.personal@gmail.com</p>
        <button onClick={onCopy} disabled={isCopied}>
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default EmailCopy;
