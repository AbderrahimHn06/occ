import type { Chat, User, inbox } from "./types";

const userId = 0; // current logged-in user

export const chats: Chat[] = [
  {
    id: 1,
    userId,
    otherUserId: 1,
    messages: [
      { id: 1, text: "Hey! How are you?", time: "09:00 AM", senderId: 0 },
      { id: 2, text: "Are we meeting today?", time: "09:05 AM", senderId: 1 },
    ],
  },
  {
    id: 2,
    userId,
    otherUserId: 2,
    messages: [
      { id: 1, text: "Hello!", time: "10:30 AM", senderId: 2 },
      {
        id: 2,
        text: "Don't forget the report.",
        time: "10:45 AM",
        senderId: 0,
      },
    ],
  },
  {
    id: 3,
    userId,
    otherUserId: 3,
    messages: [
      { id: 1, text: "Good morning!", time: "08:15 AM", senderId: 0 },
      {
        id: 2,
        text: "Did you see my last email?",
        time: "08:20 AM",
        senderId: 3,
      },
    ],
  },
  {
    id: 4,
    userId,
    otherUserId: 4,
    messages: [
      { id: 1, text: "Let's catch up later.", time: "11:00 AM", senderId: 4 },
    ],
    loading: true,
  },
];

export const inboxs: inbox[] = [
  {
    id: 1,
    name: "Mohammed",
    lastMessage: {
      createdAt: "2y ago",
      text: "typing",
      isTyping: true,
    },
    unreadMessages: 2,
    contactId: 1,
  },
  {
    id: 2,
    name: "Ali",
    lastMessage: {
      createdAt: "recently",
      text: " what's about react native  ",
    },
    unreadMessages: 0,
    contactId: 2,
  },
  {
    id: 3,
    name: "Omar",
    lastMessage: {
      createdAt: "3 min ago",
      text: "photo",
      isImage: true,
    },
    unreadMessages: 1,
    contactId: 3,
  },
  {
    id: 4,
    name: "Teacher",
    lastMessage: {
      createdAt: "2h ago",
      text: "صل على رسول الله",
    },
    unreadMessages: 3,
    contactId: 4,
  },
];

export const contacts: User[] = [
  {
    id: 1,
    name: "Mohammed",
    avatarUrl: "",
    isOnline: false,
    phoneNumber: "+1234567890",
  },
  {
    id: 2,
    name: "Ali",
    avatarUrl: "",
    isOnline: true,
    phoneNumber: "+1987654321",
  },
  {
    id: 3,
    name: "Omar",
    avatarUrl: "",
    isOnline: true,
    phoneNumber: "+1122334455",
  },
  {
    id: 4,
    name: "Teacher",
    avatarUrl: "",
    isOnline: false,
    phoneNumber: "+1222333444",
  },
];
