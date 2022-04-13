import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { DeskInterface } from 'src/assets/data/Desks'
import { DataService } from '../service/data/data.service'
import { Observable, of } from 'rxjs'

@Component({
    selector: 'app-floor-plan',
    templateUrl: './floor-plan.component.html',
    styleUrls: ['./floor-plan.component.scss'],
})
export class FloorPlanComponent implements OnInit {
    myThumbnail = 'assets/images/20-floor.png'
    myFullresImage = 'assets/images/20-floor.png'
    desks$: Observable<DeskInterface[]> = of()

    selectedDate = new Date()
    selectedDesk = new FormControl('', [Validators.required])

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.desks$ = this.dataService.loadDesks()
    }

    onSubmit() {
        localStorage.setItem('deskId', this.selectedDesk.value)
        localStorage.setItem(
            'booking_date',
            this.selectedDate.toISOString().slice(0, 10)
        )
    }
}
