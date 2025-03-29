import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { userAuthAPI } from '../../api/userAuth';
import {lastValueFrom} from 'rxjs';

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
  userId: number | null = null;
  isModalOpen: boolean = false;

  constructor(private router: Router,
              private userAuthAPI: userAuthAPI) {}

  navigateToSelectAvatar(){
    this.router.navigate(['/select-avatar'])
  }

  ngOnInit(){
    const storedAvatar = localStorage.getItem('selectedAvatar');
    if(storedAvatar){
      this.userAvatar = storedAvatar;
    }
    this.loadUserLocalStorage()
  }

  loadUserLocalStorage() {
    const userStored = localStorage.getItem('user');
    if (userStored) {
      const user = JSON.parse(userStored);
      this.profileName = user.name || '';
      this.userId = user.id || null;
    }
  }

  openDeleteModal() {
    this.isModalOpen = true;
  }

  closeDeleteModal() {
    this.isModalOpen = false;
  }

  async deleteProfile(){
    if (!this.userId) {
      alert("Error: User ID not found.");
      return;
    }

    try {
      await lastValueFrom(this.userAuthAPI.deleteUser(this.userId));
      alert("Your profile has been deleted.");
      localStorage.clear();
      this.router.navigate(['/sign-in'])
    } catch (err) {
      console.error("Error deleting profile:", err);
      alert("Failed to delete profile. Please try again.");
    }

  }

}
