const express = require('express');
const app = express();
const port = 3000;

const foodData = [
  { name: 'Pizza Margherita', price: 12 },
  { name: 'Cheese Burger', price: 8 },
  { name: 'Sushi Roll', price: 15 },
  { name: 'Chicken Biryani', price: 10 },
  { name: 'Veggie Pasta', price: 9 }
];

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/foods', (req, res) => {
  res.render('foods', { foods: foodData });
});

app.get('/', (req, res) => {
  res.redirect('/foods');
});

app.listen(port, () => {
  console.log(`Food Delivery App running at http://localhost:${port}/foods`);
});

