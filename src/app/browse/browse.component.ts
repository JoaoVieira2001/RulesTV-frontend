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
      details: 'A 6 episode event featuring parables built around Jedi from the prequel era. Journey into the lives' +
        'of two distincly different Jedi -- Ashoka Tano and Count Dooku. Each will be put to the test as they make choices ' +
        'that will define their destinies.' + '\n' + 'Some flashing lights sequences or patterns may affect photosensitive viewers.' ,
      description: 'A child goes throught a rite of passage with unexpected results',
      releaseDate: '2022',
      genre: 'Action, Anthology, Animation, Science Fiction',
      rating: '6+',
      creator: 'Dave Filoni',
      starring: 'Ashley Eckstein, Corey Burton',
      episodes: [
        {
          title: '1. Life and Death',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode1.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        {
          title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode2.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        {
          title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode3.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        {
          title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode4.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        {
          title: 'The Bad Batch',
          image: 'assets/images/Series_Episodes/TalesOfTheJedi/Episode5.png',
          description: 'Captain Rex and the Bad Batch must infiltrate an enemy base on Anaxes.'
        },
        {
          title: 'The Bad Batch',
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

  recommendedSeries = [
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/TheRevenant.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/WinterSoldier.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Moana2.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/LifeOfPi.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Moana.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Inside_Out2.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/ELtonJohn.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Deadpool_Wolverine.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/alien_romulus.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/another_you.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/BansheesOfInisherin.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Black_Swan.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/BohemianRhapsody.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/CHrisDiStefano.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/drop_dead_years.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/Elemental.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/KindOfKindness.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/lilo_stitch.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/NIghtBitch.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/planet__of_the_apes.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/SUgarCane.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/TheLastKingOfScotland.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/movies/ThreeBillboards.png' },
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/Paradise.png' },
  ]

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
