export default function Button({ submit }) {
  return (
    <button type="button" className="mt-3 btn btn-lg btn-dark" onClick={submit}>
      Submit
    </button>
  );
}
