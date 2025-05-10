import { useEffect, useState } from "react";
import styles from "./style.module.css";

/*
const sections = [
    { id: "intro", label: "Introduction" },
    { id: "enjeux", label: "Les enjeux de la sécurité en RTC" },
    { id: "responsabilites", label: "Django : quelles responsabilités côté backend ?" },
    { id: "techniques", label: "Techniques de sécurisation" },
    { id: "conclusion", label: "Conclusion" }
];
*/

const ScrollSpy = ({ sections }: { sections: { id: string, label: string }[] }) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let currentSectionId: null | string = null;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && el.offsetTop <= scrollPosition) {
                    currentSectionId = section.id;
                }
            }

            setActiveId(currentSectionId);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={`${styles.link} ${activeId === section.id ? styles.active : ""
                                }`}
                        >
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ScrollSpy;
