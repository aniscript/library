import { IPathway } from "../../interfaces/pathway";
import BookIcon from "../../assets/icons/book.svg";
import RightArrowIcon from "../../assets/icons/right-arrow.svg";
import ClockIcon from "../../assets/icons/clock-icon.svg";

import "./Pathway.css";

const Pathway = ({ pathway }: { pathway: IPathway }) => {
  return (
    <div className="pathway-card">
      <div className="pathway-card__image-wrapper">
        <img
          src={pathway.image}
          alt={pathway.title}
          className="pathway-card__image"
        />
        {pathway.has_summative_assessment && (
          <span>Includes Summative Assessment </span>
        )}
      </div>

      <div className="pathway-card__content">
        <div className="pathway-card__info">
          <img
            src={BookIcon}
            alt="Book icon"
            className="pathway-card__book_icon"
          />
          <h5>{pathway.type}</h5>
          <img
            src={ClockIcon}
            alt="Clock icon"
            className="pathway-card__book_icon"
          />
          <h5>{pathway.duration}</h5>
        </div>
        <h2 className="pathway-card__title">{pathway.title}</h2>
        <p className="pathway-card__intro">{pathway.intro}</p>
        <a href={pathway.url} className="pathway-card__url">
          View {pathway.type}
          <img
            src={RightArrowIcon}
            alt="Right arrow icon"
            className="pathway-card__arrow_icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Pathway;
