import style from './style.module.css'
import SampleElement from '../element'

const SampleContent = () => {
    return (
        <article className={style.section} id='no__padding'>
            <p>
                En écoutant des vieilles chansons R&B un soir tranquille, je suis retombé sur deux morceaux que j'adore,
                et en creusant un peu, je me suis rendu compte qu'ils partageaient une vibe assez spéciale, directement liée aux samples utilisés.
                C'est fou comme un simple sample peut capturer une émotion, et comment les artistes peuvent le transformer en quelque chose de totalement unique.
                J'avais envie de partager avec vous ces découvertes !
            </p>

            <h3>Sample 1 : "Too Deep for the Intro" – J. Cole</h3>
            <p>
                Dans ce morceau d'ouverture de sa mixtape <em>Friday Night Lights</em> (2010),
                J. Cole utilise un sample magnifique de <strong>Didn't Cha Know</strong> de <strong>Erykah Badu</strong>.
                Le sample apporte une chaleur soul qui colle parfaitement avec l'introspection de Cole sur ses débuts et ses ambitions.
            </p>

            <h3>Sample 2 : "Didn't Cha Know" – Erykah Badu</h3>
            <p>
                Produit par le légendaire J Dilla, "Didn't Cha Know" contient à son un sample de "Dreamflower" du groupe Tarika Blue.
                Le morceau dégage une sensation de quête spirituelle, renforcée par la douceur presque hypnotique du sample original.
            </p>

            <SampleElement
                videoId='Np21rH7Ldto'
                title="Didn't cha know"
                singers={['Erykah Badu']}
                releaseYear={2010}
                sample={false}
            />

            <SampleElement
                videoId='isViE_8vDQk'
                title='Too Deep For the intro'
                singers={['J Cole']}
                releaseYear={2024}
                sample
            />
        </article>
    )
}

export default SampleContent