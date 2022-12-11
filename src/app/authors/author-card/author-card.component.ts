import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Author, AuthorsPath} from '../utils';
import MarkdownIt from 'markdown-it';

@Component({
  selector: 'ds-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  @HostBinding('class') class = 'panel panel-default';
  @Input() author: Author;
  url = '';
  about = '';
  link = '';

  ngOnInit(): void {
    const md = new MarkdownIt();
    this.url = this.author.photoType.concat(',', this.author.photo.toString());
    this.about = md.render(this.author.about).substring(0,255).concat('...');
    this.link = AuthorsPath.concat('/id/', this.author.id);
  }

}
