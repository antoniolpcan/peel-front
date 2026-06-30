import { Navbar } from "./components/Navbar";
import { PageHeader } from "./components/PageHeader";
import { Pinboard } from "./components/Pinboard";
import { PostPostIt } from "./components/PostPostIt/PostPostIt";
import { ProfileHeader } from "./components/ProfileHeader/ProfileHeader";
import { LOGGED_IN_USER, MOCK_USERS } from "./constants";
import { usePostIts } from "./hooks/usePostIts";

function App() {
  const { 
      currentView, 
      targetUser, 
      posts,
      setCurrentView, 
      navigateToProfile, 
      activePostId,
      setActivePostId,
      toggleLike,
      createNote,
      updateNote,
      deleteNote
    } = usePostIts();

  return (
  <div>
    <Navbar 
        currentView={currentView}
        targetUser={targetUser}
        onViewChange={setCurrentView}
        onNavigateToProfile={navigateToProfile}
        onCreateNote={createNote}
    />
    <ProfileHeader
      currentView={currentView}
      targetUser={targetUser}
    />
    <PageHeader 
      currentView={currentView}
    />
    <Pinboard
      MOCK_USERS={MOCK_USERS}
      LOGGED_IN_USER={LOGGED_IN_USER}
      currentView={currentView}
      targetUser={targetUser}
      posts={posts}
      setActivePostId={setActivePostId}
      navigateToProfile={navigateToProfile}
      toggleLike={toggleLike}
      deleteNote={deleteNote}
    />
    <PostPostIt
      posts={posts}
      activePostId={activePostId}
      setActivePostId={setActivePostId}
      navigateToProfile={navigateToProfile}
      updateNote={updateNote}
      MOCK_USERS={MOCK_USERS}
      LOGGED_IN_USER={LOGGED_IN_USER}
    />
  </div>
  );
}

export default App;