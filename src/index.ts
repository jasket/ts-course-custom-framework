import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const parent = document.getElementById("root");

if (parent) {
  const userEdit = new UserEdit(
    parent,
    User.buildUser({ name: "Name", age: 20 })
  );

  userEdit.render();

  console.log(userEdit);
} else {
  throw Error("Render error");
}
