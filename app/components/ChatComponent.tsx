"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useChat, Message } from "ai/react";

const ChatComponent = () => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();
  console.log(messages);

  return (
    <div>
      <div className="min-h-[90%] bg-salmon">
        {messages.map((message: Message) => {
          return (
            <div key={message.id}>
              {message.role === "assistant" ? (
                <h2 className="text-lg font-semibold text-[black] ">
                  Von Straten
                </h2>
              ) : (
                <UserButton />
              )}
              {message.content
                .split("\n")
                .map((currentText: string, i: number) => {
                  if (currentText === "") return <br key={message.id + i} />;
                  return (
                    <p
                      className="text-lg font-semibold text-[black] "
                      key={message.id + i}
                    >
                      {currentText}
                    </p>
                  );
                })}
            </div>
          );
        })}

        <div className="flex my-auto ">
          <div className="w-[100%] flex gap-1 absolute bottom-0 eft-0 right-0 m-auto">
            <form
              className="w-[100%] flex gap-1 absolute bottom-0 eft-0 right-0 m-auto"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-[#2eb3a9] text-2xl text-[white] placeholder-white rounded-md"
                placeholder="Ask me any law question 🤓"
                value={input}
                onChange={handleInputChange}
              />
              <button className="bg-[#ffa475] min-w-20 hover:bg-[#2eb3a9] hover:text-white">
                Ask
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
