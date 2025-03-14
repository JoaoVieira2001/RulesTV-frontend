import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  categories:string[] = ['Action','Adventure','Comedy','Kids','Music','Science Fiction','Sports'];
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
}
