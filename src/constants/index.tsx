import type { PostIt, User } from "../types";


export const LOGGED_IN_USER: User = {
  id: "user-1",
  username: "antonio_dev",
  name: "Antonio",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=antonio",
  bio: "👨‍💻 Desenvolvendo ideias um Post-it de cada vez. React & Tailwind fã.",
};

export const MOCK_USERS: Record<string, User> = {
  "user-1": LOGGED_IN_USER,
  "user-2": {
    id: "user-2",
    username: "clara_codes",
    name: "Clara Mendes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5lara",
    bio: "✨ Criando designs minimalistas e códigos limpos.",
  },
  "user-3": {
    id: "user-3",
    username: "soph_art",
    name: "Sophia Rocha",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5saf",
    bio: "🎨 Ilustrador de pixel art e amante de café forte.",
  },
};

export const INITIAL_POST_ITS: PostIt[] = [
  {
    id: "post-1",
    userId: "user-2",
    title: "Dica de React",
    body: "Sempre que usar useEffect, lembre-se de limpar os listeners ou intervalos na função de retorno para evitar memory leaks!",
    color: "bg-amber-100 text-amber-950 border-amber-200",
    createdAt: "24/06 · 14:20",
    likes: 12,
    hasLiked: false,
  },
  {
    id: "post-2",
    userId: "user-3",
    title: "Ideia de Paleta 🎨",
    body: "Tentando usar tons pastéis no meu novo projeto. Azul céu (#e0f2fe) com texto grafite escuro fica super confortável para leitura.",
    color: "bg-sky-100 text-sky-950 border-sky-200",
    createdAt: "24/06 · 11:05",
    likes: 8,
    hasLiked: true,
  },
];

export const POST_IT_COLORS = [
  "bg-amber-100 text-amber-950 border-amber-200",
  "bg-rose-100 text-rose-950 border-rose-200",
  "bg-emerald-100 text-emerald-950 border-emerald-200",
  "bg-sky-100 text-sky-950 border-sky-200",
  "bg-violet-100 text-violet-950 border-violet-200",
];