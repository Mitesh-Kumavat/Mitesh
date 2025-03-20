"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSending, setIsSending] = useState(false);

    const validateEmail = (email: string) => {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const handleSend = async () => {
        setError("");

        if (!email || !message) {
            setError("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email address.");
            return;
        }

        try {
            setIsSending(true);
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
                setError(`Error: ${data.error}`);
            }
        } catch (error) {
            setError("Failed to send message. Try again later.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-[9998] flex justify-center items-end transition-all duration-300 ${isOpen ? "backdrop-blur-sm bg-black/50 visible opacity-100" : "invisible opacity-0"
                }`}
            onClick={onClose}
        >
            <motion.div
                className="fixed lg:w-xl bottom-0 w-[90%] bg-zinc-950 shadow-black text-white shadow-lg rounded-t-xl p-6 lg:px-8 z-[9999]"
                initial={{ y: "100%" }}
                animate={{ y: isOpen ? "0%" : "100%" }}
                onClick={(e) => e.stopPropagation()}
                exit={{ y: "50%", transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
                    <button onClick={onClose} className="text-gray-300 cursor-pointer hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="mt-4">
                    <div className="relative">
                        <label className="text-sm text-zinc-300/80 mb-9"> Email Address</label>
                        <input
                            type="email"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 bg-zinc-800/40 text-white px-3 transition-all duration-300 p-2 text-sm font-light rounded-lg border border-zinc-700 ring-0 ease-in-out focus:ring-1 focus:ring-neutral-700"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="relative">
                        <label className="text-sm text-zinc-300/80 mb-9">Your Message</label>
                        <textarea
                            placeholder="I would like to connect with you..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full mt-1 bg-zinc-800/40 text-white px-3 transition-all duration-300 p-2 text-sm font-light rounded-lg border border-zinc-700 ring-0 ease-in-out focus:ring-1 focus:ring-neutral-700"
                            rows={3}
                        />
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <motion.button
                    onClick={handleSend}
                    disabled={isSending}
                    className={`w-full mt-6 py-2 text-black text-sm font-medium rounded-lg ${isSending ? "bg-zinc-300/90 cursor-not-allowed" : "bg-zinc-100 cursor-pointer hover:bg-zinc-200"}`}
                    whileTap={{ scale: 0.95 }}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Drawer;
