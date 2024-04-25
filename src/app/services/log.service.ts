import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private messageSource = new BehaviorSubject<string[]>([]);
  currentMessages = this.messageSource.asObservable();

  constructor() {
  }

  addMessage(name: string, hours: number, minutes: number, isActive: boolean) {
    const currentMessages = this.messageSource.value;
    this.messageSource.next([...currentMessages, `${name} ${isActive ? 'désactivé' : 'activé'} à ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`]);
  }
}
