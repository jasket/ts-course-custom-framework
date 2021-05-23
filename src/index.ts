import { User } from "./models/User";

const users = User.buildUserCollection();

users.on("change", () => {
  console.log("User was changed");
});

users.fetch();
