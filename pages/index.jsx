import MisaLogo from "../comps/misa-logo";
import SubmitButton from "../comps/button";
import Text from "../comps/text";
import Input from "../comps/input";
import React from "react";

export default function Index() {
  const [state, setState] = React.useState(null);
  const empty = "Oooops.... Can't submit an empty form!";
  const error = "Oooops.... Something went wrong.. Try Again.";

  const submit = (event) => {
    event.preventDefault();

    if (!state) {
      alert(empty);
    } else if (state) {
      if (event.keyCode == 13) {
        processer();
        return true;
      } else {
        processer();
        return false;
      }
    } else {
      alert(error);
    }
  };

  const processer = () => {
    const itemRows = state.split("\n");

    const processed = [];

    itemRows.forEach((item) => {
      const row = item.split("\t");

      const chep = row.map(() => ({
        date: row[0],
        ref: row[1],
        qty: row[2],
      }));

      processed.push(chep[0]);
    });
    alert("Processed");
    console.log("Processed: ", processed);
  };

  return (
    <main className="form-signin text-center">
      <form>
        <MisaLogo />
        <Text text="Chep Processer" />
        <Input setState={(x) => setState(x)} submit={submit} />
        <SubmitButton submit={submit} />
      </form>
    </main>
  );
}
