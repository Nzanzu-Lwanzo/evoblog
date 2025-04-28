export default function Loader({
    width = 18,
    height = 18,
}) {
    return (
        <div className="loader-container">
            <div
                className="loader"
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                }}
            ></div>
        </div>
    );
}