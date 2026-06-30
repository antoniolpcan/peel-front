import type { PostIt, User } from "../../types";
import { PostItCard } from "../PostItCard";

interface PinboardProps {
    MOCK_USERS: Record<string, User>,
    LOGGED_IN_USER: User,
    currentView: string,
    targetUser: User,
    posts: PostIt[],
    setActivePostId: React.Dispatch<React.SetStateAction<string | null>>;
    navigateToProfile: (user: User) => void;
    toggleLike: (postId: string) => void;
    deleteNote: (idToDelete: string) => void;
}

export function Pinboard({MOCK_USERS, 
                    LOGGED_IN_USER, currentView, targetUser, posts,
                    setActivePostId, navigateToProfile, 
                    toggleLike, deleteNote}: PinboardProps){

    const displayedPosts = currentView === "feed" ? posts : posts.filter(post => post.userId === targetUser.id);

    return (
        <main className="max-w-6xl mx-auto px-6 mt-6">
            {displayedPosts.length === 0 ? (
                <div className="text-center py-20 text-slate-400">
                    <p className="text-lg font-medium">Nenhum post-it por aqui... 🎈</p>
                </div>
            ) : (
            <PostItCard
                displayedPosts={displayedPosts} 
                MOCK_USERS={MOCK_USERS}
                LOGGED_IN_USER={LOGGED_IN_USER}
                setActivePostId={setActivePostId}
                navigateToProfile={navigateToProfile}
                toggleLike={toggleLike}
                deleteNote={deleteNote}
            />
            )}
        </main>
    )
};