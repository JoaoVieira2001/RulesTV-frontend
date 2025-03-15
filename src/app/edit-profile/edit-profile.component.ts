import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  profileName: string = '';
  selectedLanguage: string = 'English';
  contentRating: boolean = false;
  profilePIN: boolean = false;

  languages = ["English", "Portuguese", "Spanish", "Italian", "Deutsch"];

}
