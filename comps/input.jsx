export default function Input({ setState, submit }) {
  return (
    <textarea
      onChange={(e) => setState(e.target.value)}
      onKeyPress={submit}
      placeholder="FORMAT: DATE | PO # | QTY"
      className="form-control text-center"
      rows="9"
    ></textarea>
  );
}
