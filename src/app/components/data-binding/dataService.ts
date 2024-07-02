import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fullNameSource = new BehaviorSubject<string>('Default Name');
  currentFullName = this.fullNameSource.asObservable();

  changeFullName(name: string) {
    this.fullNameSource.next(name);
  }
}
