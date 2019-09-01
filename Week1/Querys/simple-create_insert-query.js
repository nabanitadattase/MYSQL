let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});
connection.connect();
// 1. create a database world
let create_database = 'create database world';
connection.query(create_database, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('the reply is ', results[0]);
});
let connection1 = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});
// 2. create a table country
let create_country =
  'create table country (country_code int(5) NOT NULL, country_name varchar(40) NOT NULL,country_population INT NOT NULL,country_continent varchar(20),country_surface_area INT NOT NULL, PRIMARY KEY (country_code))';

connection1.query(create_country, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('the reply is ', results[0]);
});
// 3. create a table city
let create_city =
  'create table city (city_id int(11) NOT NULL, city_name varchar(40) NOT NULL,city_population INT NOT NULL,country_code int(5) NOT NULL, PRIMARY KEY (city_id))';

connection1.query(create_city, function(error, results, fields) {
  if (error) {
    ROLLBACK;
    throw error;
  }
  console.log('the reply is ', results[0]);
});

// 4. insert into a table country
let insert_country = [
  "insert into country values (93, 'AFGHANISTAN', 36998069,'Asia', 652237)",
  "insert into country values (355, 'ALBANIA', 2937435,'Europe', 28748)",
  "insert into country values (213, 'ALGERIA',42008054,'Africa', 2381741)",
  "insert into country values (376, 'ANDORRA', 76965,'Europe', 468)",
  "insert into country values (244, 'NETHERLANDS', 31517233,'Europe', 42508)",
  "insert into country values (1264, 'ANGUILLA', 14764,'North America', 91)",
  "insert into country values (0, 'ANTARCTICA', 1000,'Antarctica', 14000000)",
  "insert into country values (54, 'ARGENTINA', ‎43847430,'South America', 2780400)",
  "insert into country values (374, 'ARMENIA', 2936075,'Asia', 29743)",
  "insert into country values (297, 'ARUBA', 105264,'South America', 178.9)",
  "insert into country values (61, 'AUSTRALIA', 25010840,'Australia', 7741220)",
  "insert into country values (43, 'AUSTRIA', 185000,'Europe', 83879)",
  "insert into country values (880, 'BANGLADESH', 162951560,'Asia', 147570)",
  "insert into country values (1246, 'BARBADOS', 285719,'North America', 431 )",
  "insert into country values (32, 'BELGIUM', 11546979,'Europe', 30688)",
];
for (let i in insert_country) {
  console.log('Going to run ', insert_country[i]);
  connection1.query(insert_country[i], function(error, results, fields) {
    if (error) {
      ROLLBACK;
      throw error;
    }
    COMMIT;
    console.log('the reply is ', results[0]);
  });
}
// 4. insert into a table city
let insert_city = [
  "insert into city values (1, 'kolkata', 5000000,91)",
  "insert into city values (2, 'Delhi', 18000000,91)",
  "insert into city values (3, 'North Brabant', 7000000,244)",
  "insert into city values (4, 'Banglore',12000000,91 )",
  "insert into city values (5, 'Pune', 3000000,91)",
  "insert into city values (6, 'Ahmedabad', 5000000,91)",
  "insert into city values (7, 'Hyderabad', 6000000,91)",
  "insert into city values (8, 'Gelderland', 3000000, 244)",
  "insert into city values (9, 'Rotterdam', 1000000,31)",
  "insert into city values (10, 'Ranchi', 1000000,91)",
  "insert into city values (11, 'Durgapur', 580990,91)",
  "insert into city values (12, 'Medinipur', 169127,91)",
  "insert into city values (13, 'Dhanbad', 1000000,91)",
  "insert into city values (14, 'Hoogeveen', 1000000, 244)",
  "insert into city values (15, 'Mumbai', 18000000,91)",
];

for (let i in insert_city) {
  console.log('Going to run ', insert_city[i]);
  connection1.query(insert_city[i], function(error, results, fields) {
    if (error) {
      ROLLBACK;
      throw error;
    }
    COMMIT;
    console.log('the reply is ', results[0]);
  });
}
connection.end();
