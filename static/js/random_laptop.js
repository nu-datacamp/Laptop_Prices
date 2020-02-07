var rand_num;

function new_laptop() {

    var lp_max = laptops.length;

    rand_num = Math.floor(Math.random()* lp_max);

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
};

new_laptop();

var nl_button = d3.select('#new_laptop_button');
nl_button.on('click', function() {
    new_laptop();
});

var user_guess = d3.select('#userPriceSelector');
var rslt_button = d3.select('#results_button');
var uGuess;
rslt_button.on('click', function() {
    console.log(user_guess.property("value"));
    uGuess = user_guess.property("value");
    d3.select('#userDisplay').html(`User Guess: <br> $${uGuess}`);
    d3.select('#rfDisplay').html(`Random Forest Guess: <br> $${laptops[rand_num]['Predicted_RF']}`);
    d3.select('#lrDisplay').html(`Linear Regression Guess: <br> $${laptops[rand_num]['Predicted_LR']}`);
    d3.select('#nnDisplay').html(`Neural Network Guess: <br> $${laptops[rand_num]['Predicted_NN']}`);
});

var wnr_button = d3.select('#winner_button');
wnr_button.on('click', function() {
    d3.select('#actualRetailPrice').html(`Actual Price: <br> $${laptops[rand_num]['Price_dollars']}`);
    var 


    })
});
