import { IPathway } from "../interfaces/pathway";
import Pathway from "./Pathway";

import "./Pathways.css";

const Pathways = ({ pathways }: { pathways: IPathway[] }) => {
  return (
    <section className="pathways">
      {pathways.map((pathway) => (
        <Pathway pathway={pathway} />
      ))}
    </section>
  );
};

export default Pathways;
