import { CardInterface } from "../interfaces/card";

export class Card implements CardInterface
{
    name: string;
    imageUrl: string;
    prezzo: number;
    rarity: string;
    id: string;
    foil: boolean;
    ref: number;
    setName: string;
    prezzo_consigliato: number;
    
    constructor()
    {
        this.imageUrl = '';
        this.name = '';
        this.prezzo = 1;
        this.rarity = '';
        this.id = '';
        this.foil = false;
        this.ref = 0;
        this.setName = '';
        this.prezzo_consigliato = 0;
    }
}