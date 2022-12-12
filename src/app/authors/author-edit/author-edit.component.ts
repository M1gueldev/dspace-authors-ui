import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from "../authors-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ds-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

  author;
  constructor(
    private a: AuthorsServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.author = this.a.getById(id).pipe( (x) => {
      console.log(x);
      return x;
    });
  }

}
