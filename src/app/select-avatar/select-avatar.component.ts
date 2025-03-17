import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-avatar',
  standalone: false,
  templateUrl: './select-avatar.component.html',
  styleUrl: './select-avatar.component.css'
})
export class SelectAvatarComponent {

  avatarsList = [
    { title: 'Avatar1', image: 'assets/images/avatars/Avatar1.png' },
    { title: 'Avatar2', image: 'assets/images/avatars/Avatar2.png' },
    { title: 'Avatar3', image: 'assets/images/avatars/Avatar3.png' },
    { title: 'Avatar4', image: 'assets/images/avatars/Avatar4.png' },
    { title: 'Avatar5', image: 'assets/images/avatars/Avatar5.png' },
    { title: 'Avatar6', image: 'assets/images/avatars/Avatar6.png' },
    { title: 'Avatar7', image: 'assets/images/avatars/Avatar7.png' },
    { title: 'Avatar8', image: 'assets/images/avatars/Avatar8.png' },
    { title: 'Avatar9', image: 'assets/images/avatars/Avatar9.png' },
    { title: 'Avatar10', image: 'assets/images/avatars/Avatar10.png' },
    { title: 'Avatar11', image: 'assets/images/avatars/Avatar11.png' },
    { title: 'Avatar12', image: 'assets/images/avatars/Avatar12.png' },
    { title: 'Avatar13', image: 'assets/images/avatars/Avatar13.png' },
    { title: 'Avatar14', image: 'assets/images/avatars/Avatar14.png' },
    { title: 'Avatar15', image: 'assets/images/avatars/Avatar15.png' }
  ]

  constructor(private router: Router) {}

  navigateToEditProfile(){
    this.router.navigate(['/edit-profile'])
  }

  selectAvatar(avatar: any){
    localStorage.setItem('selectedAvatar',avatar.image);
    this.router.navigate(['/edit-profile'])
  }

}
