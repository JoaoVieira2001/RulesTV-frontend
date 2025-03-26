import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Series} from '../../api/series';
import {Watchlist, WatchlistAPI} from '../../api/watchlist';

@Component({
  selector: 'app-watchlist',
  standalone: false,
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent implements OnInit {
  categories:string[] = ['All','Series','Movies'];
  selectedCategory: string = 'All';
  watchlistListAPI: Watchlist[] = [];

  seriesList = [
    { title: 'Thousand_Blades', image: 'assets/images/DisneyPlus/series/A_THousand_Blows.png' },
    { title: 'DAredevil', image: 'assets/images/DisneyPlus/series/DAredevil.png' },
    { title: 'Doctor_Oddysey', image: 'assets/images/DisneyPlus/series/Doctor_Oddysey.png' },
    { title: 'EliteForce', image: 'assets/images/DisneyPlus/series/EliteForce.png' },
    { title: 'Fleud', image: 'assets/images/DisneyPlus/series/Fleud.png' },
    { title: 'Futurama', image: 'assets/images/DisneyPlus/series/Futurama.png' },
    { title: 'Gannibal', image: 'assets/images/DisneyPlus/series/Gannibal.png' },
    { title: 'Goosebumps', image: 'assets/images/DisneyPlus/series/Goosebumps.png' },
    { title: 'Grid', image: 'assets/images/DisneyPlus/series/Grid.png' },
    { title: 'Guardians_of_the_Galaxy', image: 'assets/images/DisneyPlus/series/Guardians_of_the_Galaxy.png' },
    { title: 'Hulk_Smash', image: 'assets/images/DisneyPlus/series/Hulk_Smash.png' },
    { title: 'I_Am_Groot', image: 'assets/images/DisneyPlus/series/I_Am_Groot.png' },
    { title: 'InHumans', image: 'assets/images/DisneyPlus/series/InHumans.png' },
    { title: 'Kardashians', image: 'assets/images/DisneyPlus/series/Kardashians.png' },
    { title: 'LabRats', image: 'assets/images/DisneyPlus/series/LabRats.png' },
    { title: 'Lilo_Sticth', image: 'assets/images/DisneyPlus/series/Lilo_Sticth.png' },
    { title: 'Loki', image: 'assets/images/DisneyPlus/series/Loki.png' },
    { title: 'Lost', image: 'assets/images/DisneyPlus/series/Lost.png' },
    { title: 'OsCrimesDePembrokeshire', image: 'assets/images/DisneyPlus/series/OsCrimesDePembrokeshire.png' },
    { title: 'Poldark', image: 'assets/images/DisneyPlus/series/Poldark.png' },
    { title: 'SharedCustody', image: 'assets/images/DisneyPlus/series/SharedCustody.png' },
    { title: 'Skeleton_Crew', image: 'assets/images/DisneyPlus/series/Skeleton_Crew.png' },
    { title: 'SpiderMan_FriendlyNieghtbour', image: 'assets/images/DisneyPlus/series/SpiderMan_FriendlyNieghtbour.png' },
    { title: 'WhiskeyOnTheRocks', image: 'assets/images/DisneyPlus/series/WhiskeyOnTheRocks.png' },
  ]

  moviesList = [
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

  constructor(private watchlistService: WatchlistAPI) {}

  ngOnInit(){
    this.fetchWatchlist();
  }

  fetchWatchlist(){
    this.watchlistService.getWatchlist().subscribe(
      (watchlist: Watchlist[])=> {
        console.log('Fetched Watchlist:', watchlist);
        this.watchlistListAPI = watchlist;
      },
      error => console.error('Error fetching movies:', error)
    );
  }

  filterCategory(category: string): void{
    this.selectedCategory = category;
    console.log('Selected Category:', this.selectedCategory);
    console.log('Selected Category:', this.selectedCategory.length);
    setTimeout(() => this.logImageCounts());
  }


  @ViewChildren('seriesLenght') seriesImages ! : QueryList<ElementRef>
  @ViewChildren('moviesLenght') moviesImages ! : QueryList<ElementRef>
  @ViewChildren('allLenght') allCategoriesImages ! : QueryList<ElementRef>

  ngAfterViewInit(): void {
    this.logImageCounts();
  }

  private logImageCounts(): void {

  }

}
