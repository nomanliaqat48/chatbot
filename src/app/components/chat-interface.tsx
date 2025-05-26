"use client"

import { useState } from "react"
import PaperclipIcon from "@/app/components/icons/paperclip-icon"
import SparklesIcon from "@/app/components/icons/sparkles-icon"
import SmileIcon from "@/app/components/icons/smile-icon"
import AtSignIcon from "@/app/components/icons/at-sign-icon"
import HashIcon from "@/app/components/icons/hash-icon"
import RotateCcwIcon from "@/app/components/icons/rotate-ccw-icon"
import BoldIcon from "@/app/components/icons/bold-icon"
import ItalicIcon from "@/app/components/icons/italic-icon"
import LinkIcon from "@/app/components/icons/link-icon"
import SendIcon from "@/app/components/icons/send-icon"

export default function ChatInterface() {
  const [message, setMessage] = useState("Typing")

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[800px] mx-auto space-y-6">
        {/* AI Message Container */}
        <div className="w-full">
          <div className="bg-[#f0f4ff] border border-[#e1e8ff] rounded-[12px] p-4 sm:p-5 lg:p-6 relative shadow-sm">
            {/* Header with AI name and Regenerate button */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[15px] sm:text-[16px] text-[#1a1a1a] leading-tight">
                  Vanilla AI
                </span>
                <span className="text-[13px] sm:text-[14px] text-[#6b7280] font-medium">Suggested</span>
              </div>

              <button
                className="flex justify-center items-center h-8 px-3 text-[13px] sm:text-[14px] text-[#6b7280] hover:text-[#374151] hover:bg-[#e5e7eb] transition-colors duration-200 font-medium rounded"
              >
                <RotateCcwIcon />
                Regenerate
              </button>
            </div>

            {/* AI Message Content */}
            <div className="mb-4 sm:mb-5">
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#1a1a1a] leading-[1.5] sm:leading-[1.6]">
                Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if
                you have one? Or email that you've used to make this purchase.
              </p>
            </div>

            {/* Reply Button */}
            <a
              href="#"
              className="text-black font-medium underline cursor-pointer text-[14px]"
            >
              Reply with this message
            </a>
          </div>
        </div>

        {/* Message Input Container */}
        <div className="w-full border border-[#d1d5db] rounded-[12px] bg-white shadow-sm overflow-hidden">
          {/* Input Area */}
          <div className="p-3 sm:p-4 lg:p-6">
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full border-0 p-0 text-[14px] sm:text-[15px] lg:text-[16px] text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:ring-0 focus:border-transparent focus-visible:ring-0 focus-visible:border-transparent shadow-none bg-transparent font-normal leading-[1.5]"
              placeholder="Type your message..."
            />
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between px-3 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 bg-[#fafbfc]">
            {/* Left Toolbar Icons */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide">
              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <PaperclipIcon />
              </button>

              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <BoldIcon />
              </button>

              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <ItalicIcon />
              </button>

              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <LinkIcon />
              </button>

              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <SmileIcon />
              </button>

              <button
                className="p-0 text-[#6b7280] rounded-[6px] flex-shrink-0 flex justify-center items-center cursor-pointer"
              >
                <AtSignIcon />
              </button>
              <div className="flex items-center flex-shrink-0">
                <button
                  className="border-l-2 border-[#000B3618] h-7 sm:h-8 px-2 sm:px-3 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#6b7280] rounded-r-[6px] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap justify-center cursor-pointer"
                >
                  <SparklesIcon />
                  <span className="hidden xs:inline sm:hidden lg:hidden text-[#000107E1]">AI</span>
                  <span className="hidden sm:inline lg:hidden text-[#000107E1]">Quick AI</span>
                  <span className="hidden lg:block text-[#000107E1]">Quick reply with AI</span>
                </button>
              </div>
            </div>

            {/* Right Toolbar - Send Button Only */}
            <div className="flex items-center flex-shrink-0 ml-2">
              {/* Send Button */}
              <button
                className="flex justify-center items-center h-7 w-7 sm:h-8 sm:w-8 p-0 text-[#6b7280] bg-[#e5e7eb] transition-colors duration-200 rounded-[6px] cursor-pointer"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
