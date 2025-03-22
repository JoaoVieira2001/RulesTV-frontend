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
      description: 'When agents of the Empire pose a new threat, Obi-Wan Kenobi' +
        'emerges after years of hiding',
      details: 'During the reign of the empire, Obi-Wan Kenobi embarks on a crucial mission.' +
      'There are certain scenes in this fictional series that some viewers find upsetting.' +
      'Some flashing lights sequences or patterns may affect photosensitive viewers.',
      releaseDate: '2022',
      genre: 'Action, Adventure, Science Fiction',
      rating: '6+',
      creator: 'Dave Filoni',
      starring: 'Ashley Eckstein, Corey Burton',
      episodes: [
        {
          title: '1. Part 1',
          image: 'assets/images/Series_Episodes/ObiWan/Episode1.png',
          description: 'When agents of the Empire pose a new threat, Obi-Wan Kenobi emerges after years of hiding.'
        },
        { title: '2. Part 2',
          image: 'assets/images/Series_Episodes/ObiWan/Episode2.png',
          description: 'On a dangerous crime-ridden world, Obi-Wan becomes a target.'
        },
        {
          title: '3. Part 3',
          image: 'assets/images/Series_Episodes/ObiWan/Episode3.png',
          description: 'Obi-Wan searches for allies.'
        },
        {
          title: '4. Part 4',
          image: 'assets/images/Series_Episodes/ObiWan/Episode4.png',
          description: 'Obi-Wan plotes a mission.'
        },
        {
          title: '5. Part 5',
          image: 'assets/images/Series_Episodes/ObiWan/Episode5.png',
          description: 'Imperial forces attempt to draw Obi-Wan out'
        },
        {
          title: '6. Part 6',
          image: 'assets/images/Series_Episodes/ObiWan/Episode6.png',
          description: 'The action-packed special event finale.'
        }
      ]
    },
    3: {
      title: 'Star Wars: The Book of Boba Fett',
      image: 'assets/images/BrowseImages/BobaFett.png',
      description: 'A story set in the Star Wars universe...',
      episodes: [
        { title: '1. Stranger in a Strange Land', image: 'assets/images/Series_Episodes/BobaFett/Episode1.png', description: 'Boba Fett holds court.' },
        { title: '2. The Tribes of Tatooine', image: 'assets/images/Series_Episodes/BobaFett/Episode2.png', description: 'Boba Fett faces new challengers on Tatooine.' },
        { title: '3. The Streets of Mos Espa', image: 'assets/images/Series_Episodes/BobaFett/Episode3.png', description: 'Boba Fett must deal with two very different threats..' },
        { title: '4. The Gathering Storm', image: 'assets/images/Series_Episodes/BobaFett/Episode4.png', description: 'Boba Fett partners with Fennec Shand.' },
        { title: '5. Return of the Mandalorian', image: 'assets/images/Series_Episodes/BobaFett/Episode5.png', description: 'An unexcepted ally emerges.' },
        { title: '6. From the Desert comes a Stranger', image: 'assets/images/Series_Episodes/BobaFett/Episode6.png', description: 'Mysteries are explored and Boba Fett learns new information.' },
        { title: '7. In the name of Honor', image: 'assets/images/Series_Episodes/BobaFett/Episode7.png', description: 'Boba Fett and Fennec Shand face an escalating conflit.' },
      ]
    },
    4: {
      title: 'Star Wars: A New Hope Episode IV',
      image: 'assets/images/BrowseImages/StarWarsIV.png',
      description: 'Luke Skywalker begins in a journey that will change the galaxy.',
      duration: '2h 6m',
      details: 'Nineteen years after the formation of the Empire, Luke is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet Tatooine.',
      releaseDate: '1977',
      genre: 'Action, Adventure, Science Fiction',
      rating: '12+',
      creator: 'George Lucas',
      starring: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    },
    5: {
      title: 'Star Wars: The Empire Strikes Back V',
      image: 'assets/images/BrowseImages/StarWarsV.png',
      description: 'Luke Skywalker trains as a Jedi and confronts Darth Vader.',
      duration: '2h 9m',
      details: 'After the destruction of the Death Star, Imperial forces continue to persue the Rebels.',
      releaseDate: '1980',
      genre: 'Action, Adventure, Science Fiction',
      rating: '12+',
      creator: 'Irvin Kershner',
      starring: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    },
    6: {
      title: 'Star Wars: The Mandalorian',
      image: 'assets/images/BrowseImages/Mandalorian.png',
      description: 'A story set in the Star Wars universe that begins with our little "Yoda" green guy and his companion in a far far away galaxy',
      details: 'After the fall of the Empire, a lone Mandalorian makes his way throught the lawless galaxy with his founding, Grogu.'
      + 'Some fleshing lights sequences or patterns may affect photosensitive viewers.',
      releaseDate: '2019-2023',
      genre: 'Action, Adventure, Science Fiction',
      rating: '14+',
      creator: 'John Favreau',
      starring: 'Pedro Pascal, Katee Sackhoff, Carl Weathers',
      episodes: [
        { title: '1. The Mandalorian', image: 'assets/images/Series_Episodes/TheMandalorian/Episode1.png', description: 'A Mandalorian bounty hunter tracks a target for a well-paying, mysterious client.' },
        { title: '2. The Child', image: 'assets/images/Series_Episodes/TheMandalorian/Episode2.png', description: 'Having tracked down a valuable quarry, the Mandalorian must now contend with thieving.' },
        { title: '3. The Sin', image: 'assets/images/Series_Episodes/TheMandalorian/Episode3.png', description: 'The battered Mandalorian returns to his client for reward, but some deals don`t end neatly' },
        { title: '4. Sanctuary', image: 'assets/images/Series_Episodes/TheMandalorian/Episode4.png', description: 'The Mandalorian teams up with an ex-soldier to protect a farming village from raiders.' },
        { title: '5. The Gunslinger', image: 'assets/images/Series_Episodes/TheMandalorian/Episode5.png', description: 'On a familiar desert planet, the Mandalorian helps a rookie bounty hunter who is in over his head.' },
        { title: '6. The Prisoner', image: 'assets/images/Series_Episodes/TheMandalorian/Episode6.png', description: 'The Mandalorian is part of a crew of mercenaries springing a convict from a prison ship.' },
        { title: '7. The Reckoning', image: 'assets/images/Series_Episodes/TheMandalorian/Episode7.png', description: 'An old contact extends an invitation for the Mandalorian to make peace with the enemies.' },
        { title: '8. The Redemption', image: 'assets/images/Series_Episodes/TheMandalorian/Episode8.png', description: 'The Mandalorian and his allies come to know their true enemy, who already knows much about them.' },
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
        this.selectedTab = this.pageData?.episodes ? 'episodes' : 'details';
      });
  }
}
