import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  setMetaTags(config: { title: string; meta: MetaDefinition[]; }) {
    this.title.setTitle(config.title);
    this.meta.addTags(config.meta);
  }
}
