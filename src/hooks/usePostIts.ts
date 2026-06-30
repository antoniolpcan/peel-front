import { useState } from "react";
import { LOGGED_IN_USER, INITIAL_POST_ITS, POST_IT_COLORS } from "../constants";
import type { PostIt, User } from "../types";

export function usePostIts() {
  const [posts, setPosts] = useState<PostIt[]>(INITIAL_POST_ITS);
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<"feed" | "profile">("feed");
  const [targetUser, setTargetUser] = useState<User>(LOGGED_IN_USER);

  const createNote = () => {
    const randomColor = POST_IT_COLORS[Math.floor(Math.random() * POST_IT_COLORS.length)];
    const newNote: PostIt = {
      id: Date.now().toString(),
      userId: LOGGED_IN_USER.id,
      title: "",
      body: "",
      color: randomColor,
      createdAt: "Agora mesmo",
      likes: 0,
      hasLiked: false,
    };
    setPosts([newNote, ...posts]);
    setActivePostId(newNote.id);
  };

  const updateNote = (field: "title" | "body", value: string) => {
    setPosts(
      posts.map((post) =>
        post.id === activePostId ? { ...post, [field]: value } : post
      )
    );
  };

  const navigateToProfile = (user: User) => {
    setTargetUser(user);
    setCurrentView("profile");
  };

  const deleteNote = (idToDelete: string) => {
    setPosts(posts.filter((post) => post.id !== idToDelete));
    if (activePostId === idToDelete) setActivePostId(null);
  };

  const toggleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
              hasLiked: !post.hasLiked,
            }
          : post
      )
    );
  };

  return {
    posts,
    activePostId,
    setActivePostId,
    currentView,
    setCurrentView,
    targetUser,
    createNote,
    updateNote,
    deleteNote,
    toggleLike,
    navigateToProfile,
  };
}