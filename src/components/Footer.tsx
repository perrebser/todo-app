import FooterIcon from "../assets/github.svg";
const Footer: React.FC = () => {
  return (
    <div className="w-full fixed bottom-0 flex justify-center gap-8">
      <a
        className="text-sm hover:text-cyan-200 visited:text-gray-400 flex justify-center gap-2"
        href="https://github.com/perrebser"
        target="_blank"
      >
        <img className="w-3 " src={FooterIcon} alt="Footer Icon" />
        GitHub
      </a>

      <span className="text-sm">Project By: perrebser</span>
    </div>
  );
};

export default Footer;
