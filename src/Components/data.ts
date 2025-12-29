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

export const contacts: User[] = [
  {
    id: 1,
    name: "Michael Brown",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    isOnline: false,
    phoneNumber: "+1234567890",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    isOnline: true,
    phoneNumber: "+1987654321",
  },
  {
    id: 3,
    name: "David Miller",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    isOnline: true,
    phoneNumber: "+1122334455",
  },
  {
    id: 4,
    name: "Lisa Anderson",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    isOnline: false,
    phoneNumber: "+1222333444",
  },
  {
    id: 5,
    name: "Emma Davis",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    isOnline: true,
    phoneNumber: "+1555666777",
  },
];
