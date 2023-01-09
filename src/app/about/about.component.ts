import { Component } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'About',
      meta: [
        { name: 'description', content: 'This is the home page of my site.' }
      ]
    });
  }
}
