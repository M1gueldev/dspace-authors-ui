import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from '../authors-service.service';
import {Author} from '../utils';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ds-authors-detail',
  templateUrl: './authors-detail.component.html',
  styleUrls: ['./authors-detail.component.scss']
})
export class AuthorsDetailComponent implements OnInit {
  url = '';
  author: Author = {
    id: '',
    photo: Buffer.from(''),
    photoType: '',
    about: '',
    name: '',
  };
  constructor(
    private a: AuthorsServiceService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.a.getById(id).subscribe((x) => {
      this.author = x;
      this.url = this.author.photoType.concat(',', this.author.photo.toString());
    });
  }
}
