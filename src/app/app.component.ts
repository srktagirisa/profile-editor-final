import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-editor';

  user: User = {name: "Krrish", age: 25, favoriteColor: "black"};

  formUser: User = {name: "Krrish", age: 25, favoriteColor: "black"};

  displayEdit = false;

  toggleEdit(): void {
    if (this.displayEdit)
    {
      this.displayEdit = false;
    } else {
      this.displayEdit = true;
    }

  }

  saveChanges(editForm: NgForm): void {
    this.user.name = editForm.form.value.name;
    this.user.age = editForm.form.value.age;
    this.user.favoriteColor = editForm.form.value.favoriteColor;
  }
}
