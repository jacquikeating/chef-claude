const Main = () => {
  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul></ul>
    </main>
  );
};

export default Main;
