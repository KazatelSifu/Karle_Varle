import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Přidej sem něco špekoune!"
        />

        <Button type="submit" text="Přidat"/>

      </div>
    </Form>
  );
};

export default AddTodo;
