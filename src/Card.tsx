import Button from "./Button";

interface CardProps {
    imageUrl: string;
    alt: string;
    title: string;
    residence: string;
    description: string;
}

const Card: React.FC<CardProps> = ({
    imageUrl,
    alt,
    title,
    residence,
    description,
}) => {
    return (
        <article className="card">
            <div className="card__user--img">
                <img src={imageUrl} alt={alt} />
            </div>
            <h1 className="card__user--name">{title}</h1>
            <h2 className="card__user--residence">{residence}</h2>
            <p className="card__user--description">{description}</p>
            <div className="card__user--button-warp">
                <Button
                    text="GitHub"
                    url="https://github.com/Ryusei-Hosokawa"
                />
                <Button
                    text="Frontend Mentor"
                    url="https://www.frontendmentor.io/home"
                />
                <Button text="LinkedIn" />
                <Button
                    text="Twitter"
                    url="https://twitter.com/hosokawa_ryusei"
                />
                <Button
                    text="Instagram"
                    url="https://www.instagram.com/ryusei____web/"
                />
            </div>
        </article>
    );
};

export default Card;
