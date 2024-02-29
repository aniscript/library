import { IPathway } from "../../interfaces/pathway";
import Pathway from "../Pathway/Pathway";

import "./Pathways.css";

const Pathways = ({ pathways }: { pathways: IPathway[] }) => {
  if (pathways.length === 0)
    return <p className="message">No pathways found.</p>;

  return (
    <section className="pathways">
      {pathways.map((pathway) => (
        <Pathway pathway={pathway} key={pathway.id} />
      ))}
    </section>
  );
};

export default Pathways;
