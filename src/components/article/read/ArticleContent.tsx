import style from './style.module.css'
import ActionsPad from '../../__global__/actionsPad'

const ArticleContent = () => {
    return (
        <article className={style.article}>
            <h2 id='intro'>Introduction</h2>
            <p>
                Les applications web en temps réel, qu’il s’agisse de visioconférences, de chats vidéo ou de partages d'écran, reposent souvent sur des technologies RTC (Real-Time Communication) comme WebRTC. Intégrer de telles fonctionnalités dans un projet Django ouvre des perspectives puissantes, mais soulève aussi de nombreuses questions de sécurité.
            </p>

            <img src="/img/django-logo.png" alt="Django logo" />

            <h2 id='enjeux'>Les enjeux de la sécurité en RTC</h2>
            <ul>
                <li><strong>Confidentialité :</strong> protéger les flux audio/vidéo contre les écoutes ou interceptions.</li>
                <li><strong>Authentification :</strong> s'assurer que seuls les utilisateurs autorisés accèdent à une communication.</li>
                <li><strong>Intégrité :</strong> prévenir toute modification ou injection de données dans les flux.</li>
                <li><strong>Disponibilité :</strong> éviter les attaques de type DoS sur les serveurs de signalisation ou TURN/STUN.</li>
            </ul>

            <h2 id='responsabilites'>Django : quelles responsabilités côté backend ?</h2>
            <p>
                Bien que WebRTC fonctionne en peer-to-peer pour les flux médias, Django joue un rôle crucial dans :
            </p>
            <ul>
                <li>La <strong>signalisation</strong> : échange des informations de session (SDP, ICE candidates).</li>
                <li>L’<strong>authentification</strong> des utilisateurs via les sessions ou les tokens JWT.</li>
                <li>La <strong>gestion des autorisations</strong> (permissions d'accès aux rooms).</li>
                <li>La <strong>distribution des tokens d’accès</strong> aux serveurs TURN sécurisés.</li>
            </ul>

            <div className="standout">
                <h4>Quid un server TURN ?</h4>
                <p>
                    Un serveur TURN (Traversal Using Relays around NAT) est un composant clé dans les communications WebRTC qui permet de relayer le trafic audio, vidéo ou de données entre deux pairs (clients) lorsqu’une connexion directe peer-to-peer est impossible. Cela peut se produire à cause de pare-feux stricts ou de configurations réseau complexes (comme le NAT symétrique). <br />

                    Contrairement au serveur STUN, qui aide à découvrir l'adresse publique d’un client, le serveur TURN agit comme un intermédiaire en transmettant les flux entre les clients via son propre réseau. Cela garantit que la communication fonctionne dans presque tous les environnements réseau, au prix d’une plus grande latence et d’un coût serveur plus élevé. <br />

                    Le serveur TURN est donc essentiel pour la fiabilité des applications WebRTC, notamment en entreprise ou sur mobile, où les réseaux sont souvent verrouillés. Il doit être sécurisé, avec authentification et chiffrement, pour éviter les abus ou l’interception de données. <br />
                </p>
            </div>

            <h2 id='techniques'>Techniques de sécurisation</h2>

            <h3>1. Utilisation du HTTPS & WSS</h3>
            <p>
                Toute communication entre le client et Django (signalisation, WebSocket, REST API) doit passer par TLS (HTTPS/WSS). Cela garantit la confidentialité et l’intégrité des échanges.
            </p>

            <h3>2. Authentification avec JWT</h3>
            <p>
                Utiliser des tokens JWT signés permet de s'assurer que seules les sessions authentifiées peuvent démarrer des communications RTC. Cela s’intègre bien avec Django REST Framework et des bibliothèques comme <code>django-rest-framework-simplejwt</code>.
            </p>

            <h3>3. STUN & TURN sécurisés</h3>
            <p>
                Les serveurs STUN et TURN doivent eux aussi être sécurisés. Le TURN (utilisé quand le P2P échoue) doit nécessiter une authentification dynamique, avec des tokens valides à durée limitée générés côté serveur Django.
            </p>

            <h3>4. Isolation des rooms et contrôle d’accès</h3>
            <p>
                Implémentez un système robuste d’autorisations par salle (room) avec des permissions côté Django. Par exemple, un utilisateur ne peut rejoindre une room que s’il y est explicitement invité.
            </p>

            <h3>5. Surveillance et logging</h3>
            <p>
                Intégrez des outils de surveillance des connexions RTC, loggez les accès, les tentatives échouées, les patterns suspects. Cela permet de réagir rapidement aux attaques ou abus.
            </p>

            <div className="warning">
                <h4>Attention avec les outils de surveillance</h4>
                <p>
                    Les outils de surveillance dans les applications RTC permettent de collecter des données sur les connexions, les performances, ou les comportements suspects afin d'assurer la qualité et la sécurité du service. Cependant, leur utilisation soulève des enjeux éthiques et légaux. Surveiller des flux audio/vidéo ou enregistrer des métadonnées sensibles (identifiants, durées, IP, géolocalisation) peut entrer en conflit avec les principes de vie privée des utilisateurs. <br />

                    Il est essentiel de respecter les réglementations comme le RGPD, d’informer clairement les utilisateurs, de limiter la collecte aux données strictement nécessaires, et d’assurer un stockage sécurisé. La transparence et la minimisation sont les clés pour équilibrer sécurité et respect des droits fondamentaux. Un excès de surveillance peut nuire à la confiance dans votre service : à manier avec responsabilité.
                </p>
            </div>

            <h2 id='conclusion'>Conclusion</h2>
            <p>
                Django n’est pas directement impliqué dans les flux WebRTC, mais il en est le gardien. Signalisation, authentification, autorisation et distribution sécurisée des accès sont des éléments clés à mettre en place pour garantir la sécurité d’une application RTC moderne. Une approche rigoureuse combinant TLS, JWT, TURN sécurisé et contrôle d’accès est indispensable pour répondre aux enjeux actuels.
            </p>

            <ActionsPad />
        </article>
    )
}

export default ArticleContent