"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import toast from 'react-hot-toast';

import 'aos/dist/aos.css';
import "./ContactMe.css"

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [status, setStatus] = useState("");
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !message) return setStatus("All fields are required.");
        try {
            const response = await fetch('https://fqyd.dev/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                }),
            });

            const data = await response.json();
            if (data.code === 200) {
                setName('');
                setEmail('');
                setMessage('');

                toast.success("Message was sent!");
            } else {
                if (data.msg) {
                    return toast.error("ERROR: "+data.msg);
                }
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error(error);
        }
    };

    return (
        <div id='contact-me-wrapper'>
            <div data-aos="fade-up" id='contact-me-container'>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit} id='contact-me-form'>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message..."
                        required
                    >
                    </textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
