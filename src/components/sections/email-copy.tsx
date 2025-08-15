"use client";

import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const EmailCopy = () => {
  const [isCopied, setIsCopied] = useState<true | false>(false);

  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("monirhrabby.personal@gmail.com");

    toast("Copied to clipboard", {
      description: "Email address copied successfully",
      action: {
        label: "Send Email",
        onClick: () => {
          window.location.href = "mailto:monirhrabby.personal@gmail.com";
        },
      },
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 7000);
  };
  return (
    <div className="flex- flex-col items-center mx-auto">
      <div className="flex items-center gap-[10px] md:gap-x-[15px] text-[15px] md:text-[17px] font-rajdhani text-white/80">
        <button
          onClick={onCopy}
          disabled={isCopied}
          className="flex items-center gap-x-2 hover:text-white transition-all duration-300"
        >
          {isCopied ? (
            <CheckCheck className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <p className="font-light">
            {isCopied
              ? "Copied to clipboard"
              : "monirhrabby.personal@gmail.com"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default EmailCopy;
