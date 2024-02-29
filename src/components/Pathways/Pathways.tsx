import { IPathway } from "../../interfaces/pathway";
import Pathway from "../Pathway/Pathway";

import "./Pathways.css";

const Pathways = ({ pathways }: { pathways: IPathway[] }) => {
  return (
    <section className="pathways">
      {pathways.map((pathway) => (
        <Pathway pathway={pathway} key={pathway.id} />
      ))}
    </section>
  );
};

export default Pathways;
