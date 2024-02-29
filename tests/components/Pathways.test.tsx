import { render, screen } from "@testing-library/react";

import Pathways from "../../src/components/Pathways/Pathways";
import { IPathway } from "../../src/interfaces/pathway";

describe("Pathways", () => {
  it("should render no pathways found when the pathways array is empty.", () => {
    render(<Pathways pathways={[]} />);
    expect(screen.getByText(/no pathways found/i)).toBeInTheDocument();
  });

  it("should render a list of pathways.", () => {
    const pathways: IPathway[] = [
      {
        id: 1,
        title: "Test Pathway",
        internal_title: "Test Pathway",
        duration: "3 min",
        type: "pathway",
        intro: "This is a test pathway.",
        url: "https://example.com",
        image: "https://example.com/image.jpg",
        has_summative_assessment: false,
      },
      {
        id: 2,
        title: "Test Pathway 2",
        internal_title: "Test Pathway",
        duration: "5 min",
        type: "pathway",
        intro: "This is a test pathway.",
        url: "https://example.com",
        image: "https://example.com/image.jpg",
        has_summative_assessment: true,
      },
    ];
    render(<Pathways pathways={pathways} />);
    expect(screen.queryByText(/no pathways found/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole("article").length).toBe(2);
  });
});
