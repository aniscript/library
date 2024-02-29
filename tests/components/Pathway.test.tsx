import { render, screen } from "@testing-library/react";

import Pathway from "../../src/components/Pathway/Pathway";

describe("Pathway", () => {
  const pathway = {
    id: 1,
    title: "Test Pathway",
    internal_title: "Test Pathway",
    duration: "3 min",
    type: "pathway",
    intro: "This is a test pathway.",
    url: "https://example.com",
    image: "https://example.com/image.jpg",
    has_summative_assessment: false,
  };
  it("should render a pathway.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
  it("should render a pathway with an image.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByAltText("Test Pathway")).toBeInTheDocument();
  });
  it("should render a pathway with a duration.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByText("3 min")).toBeInTheDocument();
  });
  it("should render a pathway with a type.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByText("pathway")).toBeInTheDocument();
  });
  it("should render a pathway with a title.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByText("Test Pathway")).toBeInTheDocument();
  });
  it("should render a pathway with an intro.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByText("This is a test pathway.")).toBeInTheDocument();
  });
  it("should render a pathway with a url.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
  it("should render a pathway with a right arrow icon.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByAltText(/right arrow icon/i)).toBeInTheDocument();
  });
  it("should render a pathway with a book icon.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByAltText(/book icon/i)).toBeInTheDocument();
  });
  it("should render a pathway with a clock icon.", () => {
    render(<Pathway pathway={pathway} />);
    expect(screen.getByAltText(/clock icon/i)).toBeInTheDocument();
  });
  it("should render a pathway with a summative assessment.", () => {
    const pathwayWithSummativeAssessment = {
      ...pathway,
      has_summative_assessment: true,
    };
    render(<Pathway pathway={pathwayWithSummativeAssessment} />);
    expect(
      screen.getByText(/includes summative assessment/i)
    ).toBeInTheDocument();
  });
  it("should render a pathway without a summative assessment.", () => {
    render(<Pathway pathway={pathway} />);
    expect(
      screen.queryByText(/includes summative assessment/i)
    ).not.toBeInTheDocument();
  });
});
