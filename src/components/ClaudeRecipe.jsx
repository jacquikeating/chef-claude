import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
