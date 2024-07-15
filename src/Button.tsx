interface ButtonProps {
    url?: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ url, text }) => {
    const handleClick = () => {
        window.open(url, "_blank");
    };
    return (
        <button className="card__user--button" onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;
