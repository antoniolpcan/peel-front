import type { PostIt, User } from "../../types";

interface PostItCardProps {
    displayedPosts: PostIt[],
    MOCK_USERS: Record<string, User>,
    LOGGED_IN_USER: User,
    setActivePostId: React.Dispatch<React.SetStateAction<string | null>>;
    navigateToProfile: (user: User) => void;
    toggleLike: (postId: string) => void;
    deleteNote: (idToDelete: string) => void;
}

export function PostItCard({displayedPosts, MOCK_USERS, LOGGED_IN_USER, setActivePostId, navigateToProfile, toggleLike, deleteNote}: PostItCardProps){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPosts.map((post) => {
            const author = MOCK_USERS[post.userId] || LOGGED_IN_USER;
            return (
              <div
                key={post.id}
                onClick={() => setActivePostId(post.id)}
                className={`group aspect-square p-5 rounded-2xl shadow-xs border hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer relative transform hover:-translate-y-1 ${post.color}`}
              >
            <div 
                className="flex items-center gap-2 mb-3 z-10 hover:opacity-80 transition-opacity"
                onClick={(e) => {
                e.stopPropagation();
                navigateToProfile(author);
                }}>
                <img src={author.avatar} alt={author.name} className="w-7 h-7 rounded-lg bg-black/5 p-0.5" />
                <span className="text-xs font-bold truncate">@{author.username}</span>
            </div>
            <div className="overflow-hidden flex-1 pr-1">
                {post.title && <h3 className="font-bold text-base mb-1 line-clamp-1">{post.title}</h3>}
                <p className="text-xs opacity-80 line-clamp-5 whitespace-pre-wrap leading-relaxed">
                {post.body || "Post-it vazio..."}
                </p>
            </div>
                <div className="mt-3 border-t border-black/5 pt-2 flex items-center justify-between z-10">
                    <small className="text-[10px] opacity-40 font-medium">{post.createdAt}</small>
                    <div className="flex gap-2">
                    <button
                        onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(post.id);
                        }}
                        className={`text-xs flex items-center gap-1 font-bold rounded-md px-1.5 py-0.5 transition-colors cursor-pointer ${post.hasLiked ? 'bg-black/10 text-rose-600' : 'opacity-40 hover:opacity-100'}`}
                    >
                        📌 <span>{post.likes}</span>
                    </button>

                    {post.userId === LOGGED_IN_USER.id && (
                        <button
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteNote(post.id);
                        }}
                        className="opacity-20 hover:opacity-100 hover:text-red-600 text-xs p-0.5 transition-opacity cursor-pointer">
                        🗑️
                        </button>
                    )}
                </div>
            </div>
        </div>);
        })}
    </div>
    )
};