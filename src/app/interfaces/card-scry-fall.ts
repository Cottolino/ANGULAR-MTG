export interface CardScryFall {
    id: string
    name: string
    image_uris: imageScryFall
    prices: Prices
}

export interface imageScryFall
{
  normal: string
}
export interface Prices
{
  usd: number
  usd_foil: number
  eur: number
  eur_foil: number
}

export interface CardItemScryFall
{
    id: string
    name: string
    image_uris: imageScryFall
    prices: Prices

}

export interface CardMTGScryFall
{
    data: []
}