import { Component, OnInit } from '@angular/core';
import { Card } from '../classes/Card';
import { CardService } from '../card.service';
import { ServiceScryFallService } from '../service-scry-fall.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit{
public card: Card = new Card();
constructor(private service: CardService, private route: ActivatedRoute, private navigate: Router){}
ngOnInit(): void
{
    this.route.params.subscribe((params) => {
        const ref = +params['ref'];
        const tmp = this.service.getCard(ref);
        if(tmp)
        {
            this.card = tmp;
        }
    })
}
back()
{
    this.navigate.navigateByUrl('/trade');
}

}
