"use client";

import { Facebook, Instagram } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col gap-3">
      <a
        href="https://www.facebook.com/profile.php?id=61587032191509"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-solar-slate-light/90 shadow-lg backdrop-blur flex items-center justify-center text-white hover:bg-solar-green hover:-translate-x-1 transition-all duration-300"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/naha_energy_solutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-solar-slate-light/90 shadow-lg backdrop-blur flex items-center justify-center text-white hover:bg-solar-green hover:-translate-x-1 transition-all duration-300"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/918089135003"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-solar-slate-light/90 shadow-lg backdrop-blur flex items-center justify-center text-white hover:bg-solar-green hover:-translate-x-1 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.061-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.096-.207.046-.389-.031-.546-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.046 21.6c-1.785 0-3.535-.48-5.07-1.38l-.36-.21-3.765.99.99-3.675-.225-.36a9.914 9.914 0 0 1-1.515-5.34C2.104 6.275 6.702 1.685 12.053 1.685c2.613 0 5.068 1.015 6.91 2.865 1.84 1.85 2.855 4.31 2.855 6.925-.002 5.345-4.6 9.935-11.772 9.935z" />
        </svg>
      </a>
    </div>
  );
}
