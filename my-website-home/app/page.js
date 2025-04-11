import Background from "./components/Background/Background.jsx";
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
                <section id="top-flex">
                    <Introduction />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section>
                    
                </section>
            </main>
            <footer>
                <p>©2025 flqyd.dev All Rights reserved</p>
            </footer>
        <Helix />
        <Background />
        </>
    );
}
