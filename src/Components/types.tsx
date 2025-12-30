export type medaQuery = {
  isMobile: boolean;
};

export type Message = {
  id: number;
  text: string;
  image?: string;
  time: string;
  senderId: number;
};

export type ChatState = {
  messages: Message[];
  loading?: boolean;
};

export type Chat = {
  id: number;
  userId: number;
  otherUserId: number;
  messages: Message[];
  loading?: boolean;
};

export type User = {
  id: number;
  name: string;
  avatarUrl?: string;
  isOnline?: boolean;
  phoneNumber: string;
};

export type inbox = {
  id: number;
  name: string;
  lastMessage: {
    createdAt: string;
    text: string;
    isTyping?: boolean;
    isImage?: boolean;
  };
  unreadMessages: number;
  avatarUrl?: string;
  isOnline?: boolean;
  contactId: number;
};
