const database = 'banco';
const collection = 'Filiais';
use(database);

db.createCollection(collection);
db.Filiais.insertMany([
  {
  "Loja":"1",
  "Localização":"Campinas",
  "Vendedores":"4",
  "Lucro mensal":20.000,
},
  {
    "Loja":"2",
    "Localização":"Indaituba",
    "Vendedores":"2",
    "Lucro mensal":10.000

 },
  {
    "Loja":"3",
    "Localização":"São Paulo",
    "Vendedores":"7",
    "Lucro mensal":45.000
  }
])
