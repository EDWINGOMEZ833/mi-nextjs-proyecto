// api/tours.js
export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        title: 'Tour por España',
        price: '$1,600 USD',
        image: '/tour-España.jpg',
      },
      {
        id: 2,
        title: 'Tour por México',
        price: '$1,100 USD',
        image: '/tour-Mexico.jpg',
      },
      {
        id: 3,
        title: 'Tour por Buenos Aires',
        price: '$1,450 USD',
        image: '/tour-Buenos Aires.jpg',
      },
      {
        id: 4,
        title: 'Tour por Roma/Italia',
        price: '$1,700 USD',
        image: '/tour-Roma.jpg',
      },
      {
        id: 5,
        title: 'Tour por New York/ UU.EE',
        price: '$1,700 USD',
        image: '/tour-newYork.jpg',
      },
      {
        id: 6,
        title: 'Tour por Santiago Chile',
        price: '$1,450 USD',
        image: '/tour-Santiago Chile.jpg',
      },
      {
        id: 7,
        title: 'Tour por Medellin/ Colombia',
        price: '$1,400',
        image: '/tour-Medellin.jpg',
      },
      {
        id: 8,
        title: 'Tour por Cusco/ Peru',
        price: '$1,200 USD',
        image: '/tour-Cusco.jpg',
      },
     
    ]);
  }
  