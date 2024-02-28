import useFetchPathways from "../actions/useFetchPathways";
import Pathway from "./Pathway";

import "./Pathways.css";

const Pathways = () => {
  const { isLoading, data, isError } = useFetchPathways();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>There was an error loading the data.</p>;
  }

  return (
    <section className="pathways">
      {data.length ? (
        data.map((pathway) => <Pathway pathway={pathway} />)
      ) : (
        <p>No pathways found</p>
      )}
    </section>
  );
};

export default Pathways;
