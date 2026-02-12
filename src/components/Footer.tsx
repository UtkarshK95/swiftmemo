import { FaGithub, FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-t border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs">
      <span>by Utkarsh Katiyar</span>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/UtkarshK95"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          <FaGithub size={14} />
        </a>

        <a
          href="https://buymeacoffee.com/utkarshk95"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-600 dark:hover:text-yellow-400 transition"
        >
          <FaCoffee size={14} />
        </a>
      </div>
    </div>
  );
}
