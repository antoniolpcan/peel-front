import type { User } from "../../types";


interface ProfileHeaderProps {
  currentView: "feed" | "profile";
  targetUser: User;
}

export function ProfileHeader({currentView, targetUser}: ProfileHeaderProps){
    return (
        <div>
            {currentView === "profile" && (
            <div className="bg-white border-b border-slate-200 py-8 px-6 mb-8 shadow-xs">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <img src={targetUser.avatar} alt={targetUser.name} className="w-24 h-24 rounded-2xl bg-slate-100 border p-2 shadow-xs" />
                    <div>
                        <h2 className="text-2xl font-black text-slate-800">{targetUser.name}</h2>
                        <p className="text-indigo-600 font-medium text-sm">@{targetUser.username}</p>
                        <p className="text-slate-500 mt-2 max-w-xl text-sm">{targetUser.bio}</p>
                    </div>
                </div>
            </div>
              )}
        </div>
    )
};