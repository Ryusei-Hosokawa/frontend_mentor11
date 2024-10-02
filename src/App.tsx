import React from "react";

// 画像のインポート
import RectangleImage from "./assets/images/Rectangle.png";
import CombinedImage from "./assets/images/Combined.png";
import ShapeImage from "./assets/images/Shape.png";
import CreatorImage from "./assets/images/DSC02731-Enhanced.jpg";

function App() {
    const daysLeft = 3;
    const creatorName = "Ryusei";
    
    return (
        <>
            <div className="page-background">
                <article className="card__object">
                    <div className="card__img--cover">
                        <img
                            src={RectangleImage}
                            className="card__img--content"
                            alt="Rectangle"
                        />
                    </div>
                    <h2 className="card__text--main">Equilibrium #3429</h2>
                    <p className="card__text--sub">
                        Our Equilibrium collection promotes <br />
                        balance and calm.
                    </p>
                    <div className="card__data--cover">
                        <div className="card__ethereum--cover">
                            <div className="card__ethereum--img">
                                <img src={CombinedImage} alt="Ethereum" />
                            </div>
                            <div className="card__ethereum--data">
                                <span className="card__ethereum--points">
                                    0.041
                                </span>
                                ETH
                            </div>
                        </div>
                        <div className="card__days-left--cover">
                            <img src={ShapeImage} className="card__days-left--icon" alt="Days Left Icon"/>
                            <p className="card__days-left--text">
                                {daysLeft} days left
                            </p>
                        </div>
                    </div>
                    <div className="creator__contents">
                        <div className="creator__contents--icon">
                            <img src={CreatorImage} alt="Creator" />
                        </div>
                        <div className="creator__contents--text">
                            Creation of <h3>{creatorName}</h3>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default App;
