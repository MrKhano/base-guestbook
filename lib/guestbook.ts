export const guestbookAddress =
  "0x54ea18621D15a9Bd41B0ca09d926704a584f38e2" as const;

export const guestbookAbi = [
  {
    type: "function",
    name: "addMessage",
    stateMutability: "nonpayable",
    inputs: [{ name: "_text", type: "string" }],
    outputs: [],
  },
  {
    type: "function",
    name: "getMessages",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        components: [
          { name: "user", type: "address" },
          { name: "text", type: "string" },
          { name: "timestamp", type: "uint256" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "getMessagesCount",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
] as const;
