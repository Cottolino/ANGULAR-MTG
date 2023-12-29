export interface CardInterface
{
    name: string;
    imageUrl: string;
    prezzo: number;
    rarity: string;
    id: string;
    ref: number;
    setName: string;
    prezzo_consigliato: number
    manaCost: string
    type: string
    text: string
    flavor: string
}

export interface CardMTG
{
    cards: []
}
export interface CardItem
{
    name: string
    rarity: string
    set: string
    imageUrl: string
    id: string
    setName: string
    manaCost: string
    type: string
    text: string
    flavor: string
}