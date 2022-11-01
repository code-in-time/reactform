import { useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="ReactHookForm">
      ReactHookForm
      <br /><br />
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("firstName")} placeholder="First name" /><br />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select><br />
        <textarea {...register("aboutYou")} placeholder="About you" /><br />
        <p>{data}</p><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;