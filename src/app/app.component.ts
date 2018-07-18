import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private query: QueryService) { }

  urlResult: any[];
  urlList: any[] = [
    'http://www.google.com',
    'https://www.amazon.com',
    'www.microsoft.com',
    '/',
    'https://somedomain/api/Values',
    'info.azurewebsites.net',
    '/myproxy/myservice',
    '/values',
    '/home/values'
  ]

  ngOnInit() {
    this.urlList.forEach(url => {
      this.query.runQuery(url).subscribe(result => {
        // this.urlResult.push(result);
      }, error => console.log(error));
    }
    )
  }

}
