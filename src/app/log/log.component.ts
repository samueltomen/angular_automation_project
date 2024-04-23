import { Component } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {

  bathroom = {
    on:'Salle de bain allumée',
    off:'Salle de bain éteinte'
  };
  livingRoom = { 
    on: 'Salle à manger allumée', 
    off: 'Salle à manger éteinte' 
  };
  garage = { 
    on: 'Garage allumé', 
    off: 'Garage éteint' 
  };
  heatPump = { 
    on: 'Pompe à chaleur allumée', 
    off: 'Pompe à chaleur éteinte' 
  };
  laundryRoom = { 
    on: 'Buanderie allumée', 
    off: 'Buanderie éteinte' 
  };
  swimmingPool = { 
    on: 'Piscine allumée', 
    off: 'Piscine éteinte' 
  };

}
