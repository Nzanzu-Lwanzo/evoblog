import style from './style.module.css'
import ParentErrorComponent from './_parent'

const PageNotFound = ({ is }: { is: "page" | "ressource" }) => {
    return (
        <ParentErrorComponent title='Erreur 404'>
            Désolé ! La {is} que vous avez requêtée est introuvable ou temporairement indisponible. <br />
            Si vous pensez que ceci est une erreur, contactez-moi sur mon <a className={style.link} href="tel:0977210519">numéro de téléphone</a> ou sur mon <a className={style.link} href="mailto:nzanzu.lwanzo.work@gmail.com">adresse email</a>.
        </ParentErrorComponent>
    )
}

export default PageNotFound