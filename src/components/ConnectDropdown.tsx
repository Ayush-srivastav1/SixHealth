import { Link } from "react-router-dom";

export default function ConnectDropdown() {
  return (
    <div className="absolute top-0 left-0 mt-2 w-[1100px] bg-[#f9f6f2] border border-gray-200 rounded-lg shadow-lg p-8 text-black">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-bold text-2xl">Find Your Community</span>
        <Link to="/connect" className="font-bold text-lg flex items-center gap-1 hover:underline">ALL <span>→</span></Link>
      </div>
      <p className="mb-4 text-base">Connect with communities and resources tailored to your health needs.</p>
      <hr className="mb-6 border-gray-400" />
      <div className="grid grid-cols-3 gap-8 mb-8">
        <Link to="#" className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-[#e94b6a] flex items-center justify-center"><img src="/bezzy.svg" alt="Bezzy" className="w-10 h-10" /></span>
          <span className="text-xl font-semibold">Breast Cancer</span>
        </Link>
        <Link to="#" className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-[#f28c28] flex items-center justify-center"><img src="/bezzy.svg" alt="Bezzy" className="w-10 h-10" /></span>
          <span className="text-xl font-semibold">Multiple Sclerosis</span>
        </Link>
        <Link to="#" className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-[#0082c8] flex items-center justify-center"><img src="/bezzy.svg" alt="Bezzy" className="w-10 h-10" /></span>
          <span className="text-xl font-semibold">Depression</span>
        </Link>
      </div>
      <div className="mb-2 font-bold text-xl">Follow us on social media</div>
      <p className="mb-4 text-base">Can't get enough? Connect with us for all things health.</p>
      <hr className="mb-6 border-gray-400" />
      <div className="flex gap-8 text-3xl">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="X"><i className="fab fa-x-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
}
