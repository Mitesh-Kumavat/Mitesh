
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/data";
import Divider from "./divider";

const socialLinks = [
    { href: PERSONAL_DETAILS.socialLinks[0].url, icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: PERSONAL_DETAILS.socialLinks[1].url, icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: PERSONAL_DETAILS.socialLinks[2].url, icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
];

const generalLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
];

const projectLinks = [
    { href: "/projects/devhelp", label: "Devhelp" },
    { href: "/projects/movieverse", label: "MovieVerse" },
    { href: "/projects/landing-page", label: "Landing Page" },
    { href: "/projects/opinions", label: "Opinions" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-zinc-900 text-white/80 py-16 pb-0 relative "
        >
            <Divider />
            <div className="container mx-auto md:p-12 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4" >
                        <h2 className="text-2xl font-bold text-white">{PERSONAL_DETAILS.name}</h2>
                        <p className="text-sm">Creating seamless experiences where aesthetics & functionality come together.</p>
                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map(({ href, icon, label }, index) => (
                                <Link key={index} href={href} className="hover:text-white transition-colors">
                                    {icon}
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4" >
                        <h3 className="text-lg font-medium text-white">General</h3>
                        <nav className="flex flex-col space-y-2">
                            {generalLinks.map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-white/80 hover:text-white transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4" >
                        <h3 className="text-lg font-medium text-white">Projects</h3>
                        <nav className="flex flex-col space-y-2">
                            {projectLinks.map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-white/80 hover:text-white transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4" >
                        <p className="text-white">Feel free to reach out for inquiries or collaborations.</p>
                        <Link href={`mailto:${PERSONAL_DETAILS.socialLinks[3].url}`} target="_blank" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <Mail className="h-5 w-5 mr-2" /> {PERSONAL_DETAILS.socialLinks[3].url}
                        </Link>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60 relative">
                    <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
                    Copyright &copy; {currentYear} {PERSONAL_DETAILS.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;