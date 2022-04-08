import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharacterInterface } from 'src/assets/data/Character';
import { isThisTypeNode } from 'typescript';
import { TestService } from '../service/test/test.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  character$: Observable<CharacterInterface> = of();

  constructor(private testService: TestService) { }

  ngOnInit(): void {

    /*this.testService.loadCharacters().subscribe((data: any[]) => {
      console.log(data);
      this.characters = data;
    })*/

    this.getCharacter();
  }

  getCharacter(): void {
    this.character$ = this.testService.getCharacter('2');
    //console.log(this.character$);
  }

}
