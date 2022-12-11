import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Author, AuthorRequest} from "../utils";
import {findElement} from "ngx-infinite-scroll/src/services/ngx-ins-utils";
import {AuthorsServiceService} from "../authors-service.service";

@Component({
  selector: 'ds-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {

  message = '';
  edit = false;
  @Input() author: AuthorRequest = {
    about: '',
    name: '',
    photo: '',
    id: '',
    photoType: ''
  };
  @ViewChild('abt') AboutInput: ElementRef;
  @ViewChild('name') NameInput: ElementRef;
  constructor(private a: AuthorsServiceService) { }

  ngOnInit(): void {
    this.edit = !(this.author.id === '');
    this.AboutInput.nativeElement.value = this.author.about;
    this.NameInput.nativeElement.value = this.author.name;
  }
  updateName = () => {
    this.author.name = this.NameInput.nativeElement.value;
  };
  updateAbout = () => {
    this.author.about = this.AboutInput.nativeElement.value;
  };
  upload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      const idx = reader.result.toString().indexOf(',');
      this.author.photo = reader.result.toString().substring(idx + 1);
      this.author.photo = reader.result.toString().substring(0, idx - 1);
    };
  };
  commit = () => {
    if (this.edit) {
      this.a.update(this.author);
    } else {
      this.a.create(this.author);
    }
  };
}
