import { AuthenticatedUserType } from "../../lib/@type";
import { LOCAL_STORAGE_KEYS } from "../../lib/enums";
import { getFromLocalStorage } from "../../lib/storage";


export async function getAUser(uid: string): Promise<AuthenticatedUserType | null> {
    console.log(uid)
    return getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
}
