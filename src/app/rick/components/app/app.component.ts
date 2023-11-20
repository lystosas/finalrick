import { Component, OnInit } from '@angular/core';
import { RickService } from '../../services/rick.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';



@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personajes: any;

  constructor(
    private rickSer: RickService,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
      this.rickSer.getCharacters().subscribe(respuesta => {
        console.log(respuesta)
        this.personajes = respuesta;
      })
  }

  openDialogo(character: any){
    this.dialog.open(DialogoComponent, {data: {character}})
  }
}
