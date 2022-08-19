export const items = [
  {
    id: 1,
    name: 'Spider-Man',
    price: 5.00,
    image: 'assets/images/Spider-Man.png',
    category: 'Common',
    quantity: 20
  },
  {
      id: 2,
      name: 'Smigol',
      price: 5.00,
      image: 'assets/images/Smigol.png',
      category: 'Common',
      quantity: 25
  },
  {
    id: 3,
    name: 'Fenix',
    price: 18.00,
    image: 'assets/images/Fenix.png',
    category: 'Rare',
    quantity: 10
  },
  {
      id: 4,
      name: 'Sauron',
      price: 14.00,
      image: 'assets/images/Sauron.png',
      category: 'Rare',
      quantity: 8
    },
  {
    id: 5,
    name: 'Mr-Sinister',
    price: 20.00,
    image: 'assets/images/Mr-Sinister.png',
    category: 'Chase',
    quantity: 4
  },
  {
      id: 6,
      name: 'Deathstroke',
      price: 25.00,
      image: 'assets/images/Deathstroke.png',
      category: 'Chase',
      quantity: 2
  }
]

export function localItems(){
  return JSON.parse( window.localStorage.getItem('products') )
}

export function findLocalItem(id){
  return localItems().find(itm => itm.id == id)
}