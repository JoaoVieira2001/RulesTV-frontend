import { Component} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: { id: number; src: string; title: string; subtitle: string }[] = [];

  movies = [
    { src: 'assets/images/DisneyPlus/boba_fett.png', title: 'Auth Page' },
    { src: 'assets/images/DisneyPlus/A New Hope.png', title: 'Logo 1' },
    { src: 'assets/images/DisneyPlus/ObiWan.png', title: 'Logo 2' },
    { src: 'assets/images/DisneyPlus/The Empire Strikes Back.png', title: 'Profile Avatar' },
    { src: 'assets/images/DisneyPlus/Mandalorian.png', title: 'Profile Avatar' },
    { src: 'assets/images/DisneyPlus/Tales Of the Jedi.png', title: 'Profile Avatar' },
    { src: 'assets/images/DisneyPlus/boba_fett.png', title: 'Auth Page' },
    { src: 'assets/images/DisneyPlus/A New Hope.png', title: 'Logo 1' },
    { src: 'assets/images/DisneyPlus/ObiWan.png', title: 'Logo 2' },
    { src: 'assets/images/DisneyPlus/The Empire Strikes Back.png', title: 'Profile Avatar' },
    { src: 'assets/images/DisneyPlus/Mandalorian.png', title: 'Profile Avatar' },
    { src: 'assets/images/DisneyPlus/Tales Of the Jedi.png', title: 'Profile Avatar' },
  ];

  groupedMovies: any[] = [];

  constructor(private router: Router) {}

  navigateToFAQ(): void {
    this.router.navigate(['/faq']); // Navigate to FAQ page
  }

  ngOnInit(): void {
    this.images = [
      { id: 1, src: 'assets/images/DisneyPlus/A_THousand_Blows.png', title: 'A Thousand Blows', subtitle: '' },
      { id: 2, src: 'assets/images/DisneyPlus/Alien_Romulus.png', title: 'Alien Romulus', subtitle: '' },
      { id: 3, src: 'assets/images/DisneyPlus/Inside_Out_2.png', title: 'Inside Out 2', subtitle: '' },
      { id: 4, src: 'assets/images/DisneyPlus/Paradise.png', title: 'Paradise', subtitle: '' },
    ];

    this.groupedMovies = this.chunkArray(this.movies, 6);
  }

  private chunkArray(arr: any[], size: number): any[] {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  }

}
