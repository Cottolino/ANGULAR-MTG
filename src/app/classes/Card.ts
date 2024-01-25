import { CardInterface } from "../interfaces/card";

export class Card implements CardInterface
{
    name: string;
    imageUrl: string;
    prezzo: number;
    rarity: string;
    id: string;
    foil: number;
    ref: number;
    setName: string;
    prezzo_consigliato: number;
    manaCost: string;
    type: string;
    text: string;   
    flavor: string

    constructor()
    {
        this.imageUrl = '';
        this.name = '';
        this.prezzo = 1;
        this.rarity = '';
        this.id = '';
        this.foil = 0;
        this.ref = 0;
        this.setName = '';
        this.prezzo_consigliato = 0;
        this.manaCost = '';
        this.type = '';
        this.text = '';
        this.flavor = '';
    }
}