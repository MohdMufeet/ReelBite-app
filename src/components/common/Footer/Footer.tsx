const Footer = () => {
  return (
    <footer>
      <div className="px-2 bg-black py-2 text-[11px] text-white font-medium space-x-3 text-center lg:text-left">
        <span>© {new Date().getFullYear()} Reelbites Core</span>
        <span>•</span>
        <a href="#privacy" className="hover:underline">
          Kitchen Policy
        </a>
        <span>•</span>
        <a href="#terms" className="hover:underline">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;
