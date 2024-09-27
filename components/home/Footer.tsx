import Logo from '../ui/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="border-t-[rgba(0,0,0,0.20)] border-t border-solid pt-4">
      <div className="container flex flex-col sm:flex-row justify-between items-center sm:h-[77px] pt-3 pb-6 sm:pt-0 px-2 sm:px-0 sm:space-y-0 space-y-4 mx-auto">
        <Logo />
        <span className="sm:text-xl text-lg sm:text-left text-center">
          Powered by{' '}
          <a
            href="https://dub.sh/together-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition hover:text-black/50"
          >
            Together AI
          </a>
          ,{' '}
          <a
            href="https://mistral.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition hover:text-black/50"
          >
            Mixtral
          </a>
          ,{' '}
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition hover:text-black/50"
          >
            MongoDB
          </a>
          ,{' '}
          <a
            href="https://www.langchain.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition hover:text-black/50"
          >
            Langchain
          </a>
          .
        </span>
        <div className="flex items-center gap-[22px] sm:gap-[39px]">
          <div className="flex space-x-4 pb-4 sm:pb-0">

            <Link
              href="https://github.com/seeker53"
              className="group"
              aria-label="Visit our GitHub repository"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
