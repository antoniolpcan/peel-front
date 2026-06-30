import type { PostIt, User } from "../../types";


interface PostPostIt{
    posts: PostIt[],
    activePostId: string | null,
    setActivePostId: React.Dispatch<React.SetStateAction<string | null>>,
    navigateToProfile: (user: User) => void;
    updateNote: (field: "title" | "body", value: string) => void,
    MOCK_USERS: Record<string, User>,
    LOGGED_IN_USER: User
}

export function PostPostIt({posts, activePostId, setActivePostId, navigateToProfile, updateNote, MOCK_USERS, LOGGED_IN_USER}: PostPostIt){
    const activePost = posts.find((post) => post.id === activePostId);
    const activePostAuthor = activePost ? (MOCK_USERS[activePost.userId] || LOGGED_IN_USER) : null;
    const isOwnPost = activePost ? activePost.userId === LOGGED_IN_USER.id : false;
    return (
    <div>
        {activePost && activePostAuthor && (
        <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={() => setActivePostId(null)}
        >
        <div
            className={`w-full max-w-lg aspect-square p-8 rounded-2xl shadow-2xl border flex flex-col justify-between relative ${activePost.color}`}
            onClick={(e) => e.stopPropagation()}
        >
        <button onClick={() => setActivePostId(null)} className="absolute top-4 right-4 text-sm font-bold opacity-40 hover:opacity-100 cursor-pointer">✕</button>
            <div className="flex flex-col flex-1 mt-2">
            <div 
                className="flex items-center gap-2 mb-4 cursor-pointer" 
                onClick={() => { setActivePostId(null); navigateToProfile(activePostAuthor); }}
            >
                <img src={activePostAuthor.avatar} alt={activePostAuthor.name} className="w-8 h-8 rounded-xl bg-black/5 p-0.5" />
                <div>
                    <h4 className="text-xs font-bold leading-none">{activePostAuthor.name}</h4>
                    <span className="text-[10px] opacity-60">@{activePostAuthor.username}</span>
                </div>
            </div>
            {isOwnPost ? (
                    <>
                    <input
                        type="text"
                        placeholder="Título do Post-it..."
                        value={activePost.title}
                        onChange={(e) => updateNote("title", e.target.value)}
                        className="text-xl font-bold bg-transparent border-none outline-none placeholder-black/20 mb-3 w-full"
                    />
                    <textarea
                        placeholder="Escreva sua nota aqui..."
                        value={activePost.body}
                        onChange={(e) => updateNote("body", e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none resize-none text-sm leading-relaxed placeholder-black/20 w-full"
                    />
                    </>
                ) : (
                    <div className="flex flex-col flex-1 overflow-y-auto">
                    <h3 className="text-xl font-bold mb-3">{activePost.title || "Sem título"}</h3>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap opacity-90">{activePost.body || "Nota vazia..."}</p>
                    </div>
                )}
                </div>

                <div className="flex justify-between items-center border-t border-black/5 pt-4 mt-2">
                <span className="text-[10px] opacity-40 font-medium">PostFeed App</span>
                <button
                    onClick={() => setActivePostId(null)}
                    className="bg-black/10 hover:bg-black/20 text-xs font-bold py-1.5 px-4 rounded-lg transition-colors cursor-pointer"
                >
                    {isOwnPost ? "Salvar" : "Fechar"}
                </button>
                </div>
            </div>
            </div>
        )}
    </div>
    )

}