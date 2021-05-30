import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.set-model": this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder=${this.model.get("name")}/>
        <button class="set-name">Change name</button>
        <br>
        <br>
        <button class="set-age">Set Random Age</button>
        <br>
        <br>
        <button class="set-model">Save Model</button>
      </div>
    `;
  }
}
