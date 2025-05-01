import { ToastContainer } from "react-fox-toast"

const style = {
    padding: '.5rem .8rem',
    fontSize: '.8rem '
}

const ToastMessage = () => {
    return (
        <ToastContainer
            toastTypeTheming={{
                success: { style, className: '' },
                error: { style, className: '' },
                info: { style, className: '' },
                custom: { style, className: '' },
            }}
            position="bottom-left"
        />
    )
}

export default ToastMessage