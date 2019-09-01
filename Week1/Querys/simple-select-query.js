let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world',
});
connection.connect();
// 1. What are the names of countries with population greater than 8 million
let select_name = 'select name from country where population>8000000';
connection.query(select_name, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});

// 2. What are the names of countries that have “land” in their names ?
let select_land = "select name from country where name LIKE '%land%'";
connection.query(select_land, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
// 3. What are the names of the cities with population in between 500,000 and 1 million ?
let select_city = 'select name from city where population between 500000 and 1000000';

connection.query(select_city, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
//
// 4. What's the name of all the countries on the continent ‘Europe’ ?
let select_continent = "select name from country where continent = 'Europe';";

connection.query(select_continent, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
//
// 5. List all the countries in the descending order of their surface areas.
let select_surface = 'select name from country ORDER BY SurfaceArea DESC';

connection.query(select_surface, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
//
// 6. What are the names of all the cities in the Netherlands?
// Natural Join
// let select_common =
// "select city.name from city, country where country.Code = city.CountryCode and country.name = 'Netherlands'";
// Inner Join
let select_common =
  "select city.name from city INNER JOIN country ON country.Code = city.CountryCode and country.name = 'Netherlands'";

connection.query(select_common, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
//
// 7. What is the population of Rotterdam ?
let select_population = "select population from city where name ='Rotterdam'";

connection.query(select_population, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
//
// 8. What's the top 10 countries by Surface Area ?
let select_surface_area =
  'select country_name from country ORDER BY country_surface_area DESC LIMIT 10';
connection.query(select_surface_area, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});

// 9. What's the top 10 most populated cities?
let select_popular = 'select name from country ORDER BY SurfaceArea DESC LIMIT 10';
connection.query(select_popular, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
// 10. What is the population of the world ?
let select_world = 'select SUM(population) from country';
connection.query(select_world, function(error, results, fields) {
  if (error) {
    throw error;
  }
  for (let i in results) {
    console.log(results[i]);
  }
});
connection.end();
