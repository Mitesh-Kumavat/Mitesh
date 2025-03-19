"use client";

import { motion } from "framer-motion";
import { X, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const socialLinks = [
    { href: "https://github.com/yourusername", label: "GitHub", icon: <i className="fa-brands fa-github"></i> },
    { href: "https://linkedin.com/in/yourusername", label: "LinkedIn", icon: <i className="fa-brands fa-linkedin"></i> },
    { href: "https://instagram.com/yourusername", label: "Instagram", icon: <i className="fa-brands fa-instagram"></i> },
];

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isButtonDisabled = email.trim() === "" || message.trim() === "";

    const handleSend = async () => {
        if (!email || !message) return;

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Email sent successfully!");
                setEmail("");
                setMessage("");
                onClose();
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert("Failed to send message. Try again later.");
        }
    };


    return (
        <motion.div
            className="fixed lg:w-4xl bottom-0 w-full bg-zinc-900 text-white shadow-lg rounded-t-2xl p-6 z-50"
            initial={{ y: "100%" }}
            animate={{ y: isOpen ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            {/* Close Button */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
                <button onClick={onClose} className="text-gray-300 hover:text-white">
                    <X size={24} />
                </button>
            </div>

            {/* Email Input */}
            <div className="mt-4">
                <label className="block text-sm mb-1">Your Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-800 text-white px-10 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-white"
                    />
                </div>
            </div>

            {/* Message Input */}
            <div className="mt-4">
                <label className="block text-sm mb-1">Your Message</label>
                <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-zinc-800 text-white px-10 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-white"
                        rows={3}
                    />
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-6">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank" className="text-xl hover:text-gray-400 transition-all">
                        {link.icon}
                    </Link>
                ))}
            </div>

            {/* Send Button */}
            <motion.button
                onClick={handleSend}
                disabled={isButtonDisabled}
                className={`w-full mt-6 py-2 text-white font-semibold rounded-lg ${isButtonDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                whileTap={{ scale: 0.95 }}
            >
                Send Message
            </motion.button>
        </motion.div>
    );
};

export default Drawer;
