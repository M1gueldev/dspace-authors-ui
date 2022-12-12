import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { AuthorRequest} from '../utils';
import {AuthorsServiceService} from '../authors-service.service';
import { Router } from '@angular/router';
import { SiteAdministratorGuard } from 'src/app/core/data/feature-authorization/feature-authorization-guard/site-administrator.guard';

@Component({
  selector: 'ds-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit{

  message = '';
  isAdmin;
  edit = false;
  private _author: AuthorRequest;
  get author(): AuthorRequest {
    return this._author;
  }
  @Input() set author(a: AuthorRequest ) {
    if (!a) {
      return;
    }
    this.edit = true;
    this._author = a;
    this.AboutInput.nativeElement.value = this.author.about;
    this.NameInput.nativeElement.value = this.author.name;
  };
  @ViewChild('abt') AboutInput: ElementRef;
  @ViewChild('name') NameInput: ElementRef;
  constructor(
    private a: AuthorsServiceService,
    private guard: SiteAdministratorGuard,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.guard.canActivate(this.route.routerState.snapshot.root, this.route.routerState.snapshot);
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
      const idx = reader.result.toString().indexOf(',');
      this.author.photo = reader.result.toString().substring(idx + 1);
      this.author.photoType = reader.result.toString().substring(0, idx);
    };
  };
  commit = () => {
    if (this.edit) {
      this.a.update(this.author).subscribe((x) => {
        if (x.name) {
          this.message = `El autor ${x.name}`;
        }
        alert('El Autor se edito con exito');
        this.message = `El autor ${x.name} se edito con exito`;
        console.log('Response: ', x);
      });
    } else {
      this.a.create(this.author).subscribe((x) => {
        if (x.name) {
          this.message = `El autor ${x.name} se creo con exito`;
        }
        alert('Autor Creado con Exito');
        console.log('Response: ', x);
      });
    }
  };
  delete() {
    if (confirm('¿Esta seguro de que desea eliminar el Autor?. Esta accion NO se puede deshacer')) {
      // Save it!
      this.a.delete(this.author.id).subscribe((x) => {
      this.route.navigate(['/home']).then(() => {
        alert('Se elimino con exito');
      }).catch((e) => console.error(e));
    });
    } else {
      alert('Error no se pudo eliminar');
    }
  }
}
