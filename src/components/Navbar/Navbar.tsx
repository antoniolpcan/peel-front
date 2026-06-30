import { LOGGED_IN_USER } from "../../constants";
import type { User } from "../../types";


interface NavbarProps {
  currentView: "feed" | "profile";
  targetUser: User;
  onViewChange: (view: "feed" | "profile") => void;
  onNavigateToProfile: (user: User) => void;
  onCreateNote: () => void;
}

export function Navbar({ currentView, targetUser, onViewChange, onNavigateToProfile, onCreateNote }: NavbarProps) {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-black text-indigo-400 tracking-tight cursor-pointer" onClick={() => onViewChange("feed")}>
          🌿 Peel
        </div>
        <div className="flex items-center gap-6 font-semibold text-sm">
          <button onClick={() => onViewChange("feed")} className={`cursor-pointer transition-colors ${currentView === "feed" ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"}`}>
            Feed Global
          </button>
          <button onClick={() => onNavigateToProfile(LOGGED_IN_USER)} className={`cursor-pointer transition-colors ${currentView === "profile" && targetUser.id === LOGGED_IN_USER.id ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"}`}>
            Meu Perfil
          </button>
          <button onClick={onCreateNote} className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl shadow-xs cursor-pointer text-xs transition-all">
            + Novo Post-it
          </button>
        </div>
      </div>
    </nav>
  );
}