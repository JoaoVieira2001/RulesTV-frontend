import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  images = [
    { id: 1, src: 'assets/images/DisneyPlus/A_THousand_Blows.png', title: 'A Thousand Blows', subtitle: '' },
    { id: 2, src: 'assets/images/DisneyPlus/Alien_Romulus.png', title: 'Alien Romulus', subtitle: '' },
    { id: 3, src: 'assets/images/DisneyPlus/Inside_Out_2.png', title: 'Inside Out 2', subtitle: '' },
    { id: 4, src: 'assets/images/DisneyPlus/Paradise.png', title: 'Paradise', subtitle: '' }
  ];

  movies = [
    { id: 1,src: 'assets/images/DisneyPlus/Tales Of the Jedi.png', title: 'Profile Avatar' },
    { id: 2,src: 'assets/images/DisneyPlus/ObiWan.png', title: 'Logo 2' },
    { id: 3, src: 'assets/images/DisneyPlus/boba_fett.png', title: 'Auth Page' },
    { id: 4,src: 'assets/images/DisneyPlus/A New Hope.png', title: 'Logo 1' },
    { id: 5,src: 'assets/images/DisneyPlus/The Empire Strikes Back.png', title: 'Profile Avatar' },
    { id: 6,src: 'assets/images/DisneyPlus/Mandalorian.png', title: 'Profile Avatar' },
    { id: 7,src: 'assets/images/DisneyPlus/boba_fett.png', title: 'Auth Page' },
    { id: 8,src: 'assets/images/DisneyPlus/A New Hope.png', title: 'Logo 1' },
    { id: 9,src: 'assets/images/DisneyPlus/ObiWan.png', title: 'Logo 2' },
    { id: 10,src: 'assets/images/DisneyPlus/The Empire Strikes Back.png', title: 'Profile Avatar' },
    { id: 11,src: 'assets/images/DisneyPlus/Mandalorian.png', title: 'Profile Avatar' },
    { id: 12,src: 'assets/images/DisneyPlus/Tales Of the Jedi.png', title: 'Profile Avatar' },
  ];

  constructor(private router: Router) {}

  navigateToBrowsePage(movieId:number): void {
    this.router.navigate([`/browse/${movieId}`]);
    localStorage.setItem("MovieID", movieId.toString());
  }

  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @ViewChild('swiperContainer2', { static: false }) swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3', { static: false }) swiperContainer3!: ElementRef;

  ngAfterViewInit() {
    new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });


    new Swiper(this.swiperContainer2.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    new Swiper(this.swiperContainer3.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

  }
}
