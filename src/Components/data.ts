import type { Chat, User, inbox } from "./types";
const userId = 0;
export const chats: Chat[] = [
  {
    id: 1,
    userId,
    otherUserId: 1,
    messages: [
      { id: 1, text: "Hey! How are you?", time: "09:00 AM" },
      { id: 2, text: "Are we meeting today?", time: "09:05 AM" },
    ],
  },
  {
    id: 2,
    userId,
    otherUserId: 2,
    messages: [
      { id: 1, text: "Hello!", time: "10:30 AM" },
      { id: 2, text: "Don't forget the report.", time: "10:45 AM" },
    ],
  },
  {
    id: 3,
    userId,
    otherUserId: 3,
    messages: [
      { id: 1, text: "Good morning!", time: "08:15 AM" },
      { id: 2, text: "Did you see my last email?", time: "08:20 AM" },
    ],
  },
  {
    id: 4,
    userId,
    otherUserId: 4,
    messages: [{ id: 1, text: "Let's catch up later.", time: "11:00 AM" }],
    loading: true, // optional field
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    isOnline: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    isOnline: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    isOnline: true,
  },
  {
    id: 4,
    name: "Bob Williams",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    isOnline: false,
  },
];

export const inboxs: inbox[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: {
      createdAt: "2years ago",
      text: "typing",
    },
    unreadMessages: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: {
      createdAt: "recently",
      text: "text",
    },
    unreadMessages: 0,
  },
  {
    id: 3,
    name: "Alice Johnson",
    lastMessage: {
      createdAt: "3min",
      text: "photo",
    },
    unreadMessages: 1,
  },
  {
    id: 4,
    name: "Bob Williams",
    lastMessage: {
      createdAt: "2h ago",
      text: "text",
    },
    unreadMessages: 3,
  },
];
