export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface PostIt {
  id: string;
  userId: string;
  title: string;
  body: string;
  color: string;
  createdAt: string;
  likes: number;
  hasLiked: boolean;
}