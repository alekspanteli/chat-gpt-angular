import { Component } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMetaTags({
      title: 'Contact',
      meta: [
        { name: 'description', content: 'This is the home page of my site.' }
      ]
    });
  }
}
