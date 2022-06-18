import SubmitButton from "../comps/button";
import MisaLogo from "../comps/misa-logo";
import Input from "../comps/input";
import Text from "../comps/text";
import Swal from "sweetalert2";
import React from "react";

export default function Index() {
  const [state, setState] = React.useState(null);

  const submit = (event) => {
    event.preventDefault();

    if (!state || !state.trim()) {
      Swal.fire({
        title: "Oooops....",
        text: "Can't submit an empty form!",
        icon: "error",
        confirmButtonText: "Re-try",
      });
    } else if (state) {
      if (event.keyCode == 13) {
        processer();
        return true;
      } else {
        processer();
        return false;
      }
    } else {
      Swal.fire({
        title: "Oooops....",
        text: "Theres an error on our end... try again...",
        icon: "error",
        confirmButtonText: "Re-try",
      });
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
    Swal.fire({
      icon: "success",
      title: "Processed!",
      text: "We successfully processed the below orders.",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Finish!',
      html: `<pre class="text-start">
      ${JSON.stringify(processed, undefined, 1)}
      </pre>`,
      showCloseButton: true,
    });
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
