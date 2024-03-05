import "./SkeletonPathway.css";

const SkeletonPathway = () => {
  return (
    <div className="pathway-card loading">
      <div className="skeleton-image"></div>
      <div className="pathway-card__content">
        <div className="skeleton-info"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonPathway;
