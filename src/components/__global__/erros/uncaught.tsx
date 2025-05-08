import { BLOG_OWNER_DATA } from '../../../lib/enums'
import style from './style.module.css'
import ParentErrorComponent, { mailTo } from './_parent'

const UncaughtError = () => {
    return (
        <ParentErrorComponent title='Erreur fatale'>
            Oups ! Il semble que l'action que vous venez de réaliser a causé une erreur.  <br />
            Contactez-moi sur mon <a className={style.link} href={`tel:${BLOG_OWNER_DATA.PHONE}`}>numéro de téléphone</a> ou sur mon <a className={style.link} href={mailTo('ERREUR NON CAPTUREE')}>adresse email</a>.
        </ParentErrorComponent>
    )
}

export default UncaughtError