
export const wrapLetters = (text: string) =>
    text.split('').map((letter, index) => (
        letter === "|" ? (<span key={index}>{" "}</span>) : (
            <span key={index} style={{ display: 'inline-block' }}>
                {letter}
            </span>
        )
    ));