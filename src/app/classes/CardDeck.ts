

export class CardDeck
{
    name: string;
    qty: number;
    imageUrl: string;
    rarity: string;
    ref: number;
    setName: string;
    prezzo_consigliato: number;
    manaCost: string;
    type: string;
    text: string;   
    flavor: string;
    deck_id: number;
    group_id: number;

    constructor()
    {
        this.imageUrl = '';
        this.name = '';
        this.qty = 1;
        this.rarity = '';
        this.ref = 0;
        this.setName = '';
        this.prezzo_consigliato = 0;
        this.manaCost = '';
        this.type = '';
        this.text = '';
        this.flavor = '';
        this.deck_id = -1;
        this.group_id = -1;
    }
}