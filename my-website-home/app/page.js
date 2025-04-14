import Background from "./components/Background/Background.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Helix from "./components/Helix/Helix.js";
import Introduction from "./components/Introduction/Introduction.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./page.css"

export default function Home() {
    return (
        <>
            <header>
            </header>
            <main>
                <section id="introduction">
                    <Introduction />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="contact-me">
                    <ContactMe />
                </section>
            </main>
            <footer>
                <p>©2025 flqyd.dev All Rights reserved</p>
            </footer>
        <Background />
        </>
    );
}
