import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  categories:string[] = ['Action','Comedy','Adventure','Kids','Music','Science Fiction','Sports'];
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
}
