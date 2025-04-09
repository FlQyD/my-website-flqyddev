import Demo1 from "./components/Demos/Demo1/Demo1.jsx";
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
                <div>
                    <Demo1 />
                </div>
           </main>
            <footer>

            </footer>
        <Helix/>
        </>
    );
}
