import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: false,
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit{
    browseId: number = 0;
    pageData: any;
    selectedTab: string = 'episodes';

  constructor(private route: ActivatedRoute) {
  }

  pagesData: Record<number, any> = {
    1: {
      title: 'Star Wars: Tales of the Jedi',
      image: 'assets/images/BrowseImages/talesOfTheJedi.png',
      description: 'A profound explorations of characters like Ahsoka Tano and Count Dooku, set across two entirely new and captivating universes.',
      episodes: [
        { title: '1. Life and Death',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode1.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        { title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode2.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        { title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode3.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        { title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode4.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        { title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode5.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        { title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode6.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },

      ]
    },
    2: {
      title: 'Star Wars: Obi-Wan Kenobi',
      image: 'assets/images/BrowseImages/ObiWan.png',
      description: 'A story set in the Star Wars universe...',
      episodes: [
        { title: 'Episode 1', image: 'assets/images/episode1.jpg', description: 'First episode description' },
        { title: 'Episode 2', image: 'assets/images/episode2.jpg', description: 'Second episode description' }
      ]
    },
    3: {
      title: 'Star Wars: The Book of Boba Fett',
      image: 'assets/images/BrowseImages/BobaFett.png',
      description: 'A story set in the Star Wars universe...',
      episodes: [
        { title: 'Episode 1', image: 'assets/images/episode1.jpg', description: 'First episode description' },
        { title: 'Episode 2', image: 'assets/images/episode2.jpg', description: 'Second episode description' }
      ]
    },
    4: {
      title: 'Star Wars: A New Hope Episode IV',
      image: 'assets/images/BrowseImages/StarWarsIV.png',
      description: 'A story set in the Star Wars universe...',
    },
    5: {
      title: 'Star Wars: The Empire Strikes Back V',
      image: 'assets/images/BrowseImages/StarWarsV.png',
      description: 'A story set in the Star Wars universe...',
    },
    6: {
      title: 'Star Wars: The Mandalorian',
      image: 'assets/images/BrowseImages/Mandalorian.png',
      description: 'A story set in the Star Wars universe...',
      episodes: [
        { title: 'Episode 1', image: 'assets/images/episode1.jpg', description: 'First episode description' },
        { title: 'Episode 2', image: 'assets/images/episode2.jpg', description: 'Second episode description' }
      ]
    },
  }

  recommendedShows = [
    { title: 'Andor', image: 'assets/images/BrowseImages/Andor.png' },
    { title: 'The Mandalorian', image: 'assets/images/BrowseImages/Mandalorian.png' },
    { title: 'Ahsoka', image: 'assets/images/BrowseImages/Ahsoka.png' }
  ];

  selectTab(tab: string){
    this.selectedTab = tab;
  }


  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.browseId = Number(params.get('id'));
        this.pageData = this.pagesData[this.browseId] || null;
      });
  }
}
