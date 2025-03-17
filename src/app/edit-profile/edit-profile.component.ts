import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  profileName: string = '';
  selectedLanguage: string = 'English';
  contentRating: boolean = false;
  profilePIN: boolean = false;
  userAvatar: string = 'assets/images/avatars/Avatar1.png';

  languages = ["English", "Portuguese", "Spanish", "Italian", "Deutsch"];

  constructor(private router: Router) {}

  navigateToSelectAvatar(){
    this.router.navigate(['/select-avatar'])
  }

  ngOnInit(){
    const storedAvatar = localStorage.getItem('selectedAvatar');
    if(storedAvatar){
      this.userAvatar = storedAvatar;
    }
  }

}
