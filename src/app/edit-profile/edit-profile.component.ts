import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {User, userAuthAPI} from '../../api/userAuth';
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
  isUserNameEdited: boolean = false;

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

  editUserName() {
    if (!this.userId || !this.profileName) {
      alert('Please provide a profile name');
      return;
    }

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('No user data found.');
      return;
    }
    const user = JSON.parse(storedUser);

    const updatedUser: User = {
      id: this.userId,
      email: user.email || '',
      add: user.add || '',
      password: user.password || '', // Preserve password (it shouldn't be empty if not changing)
      role: user.role || '', // Preserve role
      fullName: this.profileName, // Update the profile name
      profile_picture: user.profile_picture || '', // Preserve profile picture
      phone_number: user.phone_number || '', // Preserve phone number
    };

    lastValueFrom(this.userAuthAPI.editUser(updatedUser))
      .then((updatedUser) => {
        alert('Profile name updated!');
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.profileName = updatedUser.fullName;
      })
      .catch((error) => {
        console.error('Error updating profile name:', error);
        alert('Failed to update profile name. Please try again.');
      });
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
