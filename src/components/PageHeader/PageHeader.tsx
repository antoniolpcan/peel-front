

interface PageHeaderProps {
  currentView: "feed" | "profile";
}

export function PageHeader({currentView}: PageHeaderProps){
    return (
        <div>
        {currentView === "feed" && (
            <div className="max-w-6xl mx-auto px-6 mt-8 mb-4">
              <h2 className="text-xl font-extrabold text-slate-700">Mural Público</h2>
              <p className="text-xs text-slate-400">Veja o que as pessoas andam colando por aí.</p>
            </div>
        )}
        </div>
    )
};