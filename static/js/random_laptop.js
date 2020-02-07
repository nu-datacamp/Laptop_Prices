// function new_laptop() {

var lp_max = laptops.length;

var rand_num = Math.floor(Math.random()* lp_max);

console.log(rand_num);

console.log(laptops[rand_num]);

var compspecs =  d3.select("#computerSpecs");
compspecs.html('');
var row = compspecs.append('tr');
row.append('td').text('Company')
row.append('td').text(`${laptops[rand_num]['Company']}`)

var row = compspecs.append('tr');
row.append('td').text('Memory Structure')
row.append('td').text(`${laptops[rand_num]['Memory_Structure_Categories']}`)

var row = compspecs.append('tr');
row.append('td').text('GPU')
row.append('td').text(`${laptops[rand_num]['Gpu_Company']} ${laptops[rand_num]['Gpu_Type']}`)

var row = compspecs.append('tr');
row.append('td').text('Operating System')
row.append('td').text(`${laptops[rand_num]['OpSys']}`)

var row = compspecs.append('tr');
row.append('td').text('RAM')
row.append('td').text(`${laptops[rand_num]['Ram_Numeric']} GB`)

var row = compspecs.append('tr');
row.append('td').text('Hard Drive')
row.append('td').text(`${laptops[rand_num]['Size_Numeric']} GB`)

var row = compspecs.append('tr');
row.append('td').text('Screen Size')
row.append('td').text(`${laptops[rand_num]['Inches']}"`)

var row = compspecs.append('tr');
row.append('td').text('Weight')
row.append('td').text(`${laptops[rand_num]['Weight_Numeric']} kg`)
// };