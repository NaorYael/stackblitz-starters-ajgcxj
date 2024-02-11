import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

export interface UserElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  users: UserElement[] = [];

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.users = [
      { position: 1, name: 'David', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Moshe', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Gorge', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'John', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Lorem', weight: 10.811, symbol: 'B' },
    ];
    this.addData();
  }

  addData() {
    setTimeout(() => {
      console.log('starting...');
      const user = { position: 6, name: 'New', weight: 12.0107, symbol: 'C' };
      // this.users =
      this.users.push(user);

      this.users = [];

      // this.ref.detectChanges();

      console.log('this.users', this.users);
    }, 1000);
  }
}
