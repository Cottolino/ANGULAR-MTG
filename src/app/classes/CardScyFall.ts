import { CardInterface } from "../interfaces/card";
import { CardScryFall } from "../interfaces/card-scry-fall";

export class CardScryFallClass
{
    id: string
    name: string
    url: string
    prezzo: number

    constructor()
    {
        this.id = '';
        this.name = '';
        this.url = '';
        this.prezzo = 0;
    }
}
