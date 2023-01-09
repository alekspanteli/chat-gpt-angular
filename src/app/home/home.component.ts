import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'Home',
      meta: [
        { name: 'description', content: 'This is the home page of my site.' }
      ]
    });
  }
}
