var rand_num;

var losingHorn = new Audio();
losingHorn.src = "Price-is-right-losing-horn.mp3" ;

var winningTheme = new Audio();
winningTheme.src = "price-is-right-trimmed.mp3" ;

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
    row.append('td').text('Product')
    row.append('td').text(`${laptops[rand_num]['Product']}`)

    var row = compspecs.append('tr');
    row.append('td').text('CPU')
    row.append('td').text(`${laptops[rand_num]['Cpu_Full']}`)

    var row = compspecs.append('tr');
    row.append('td').text('Memory/RAM')
    row.append('td').text(`${laptops[rand_num]['Memory_Full']}`)

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
    d3.select('#actualRetailPrice').html('');
    d3.select('#actualRetailWinner').html('');
    d3.select(`#${first_border}`).classed('first_place', false);
    d3.select(`#${second_border}`).classed('second_place', false);
    d3.select(`#${third_border}`).classed('third_place', false);
    d3.select(`#${fourth_border}`).classed('fourth_place', false);
    d3.select('#userDisplay').html('User');
    d3.select('#rfDisplay').html('Random Forest');
    d3.select('#lrDisplay').html('Linear Regression');
    d3.select('#nnDisplay').html('Nueral Network');
});

var user_guess = d3.select('#userPriceSelector');
var rslt_button = d3.select('#results_button');
var uGuess;
var winners_ordered;
var first_border;
var second_border;
var third_border;
var fourth_border;

var winners_ordered;
rslt_button.on('click', function() {
    console.log(user_guess.property("value"));
    uGuess = user_guess.property("value");
    d3.select('#userDisplay').html(`$${uGuess}`);
    d3.select('#rfDisplay').html(`$${laptops[rand_num]['Predicted_RF']}`);
    d3.select('#lrDisplay').html(`$${laptops[rand_num]['Predicted_LR']}`);
    d3.select('#nnDisplay').html(`$${laptops[rand_num]['Predicted_NN']}`);
    // d3.select('#actualRetailPrice').html('');
    // d3.select('#actualRetailWinner').html('');
    d3.select('#actualRetailPrice').html(`<b>Actual Price:</b><br>$${laptops[rand_num]['Price_dollars']}`);
    var ugabs = Math.abs(laptops[rand_num]['Price_dollars'] - uGuess);
    var results_dict = {"User": ugabs, "Random Forest": Math.abs(laptops[rand_num]['Diff_RF']), "Neural Network": Math.abs(laptops[rand_num]['Diff_NN']), "Linear Regression": Math.abs(laptops[rand_num]['Diff_LR'])}
    winners_ordered = Object.keys(results_dict).map(function(key) {
        return [key, results_dict[key]];
      });
      
      // Sort the array based on the second element
      winners_ordered.sort(function(first, second) {
        return first[1] - second[1];
      });
      
      // Create a new array with only the first 5 items
      console.log(winners_ordered.slice(0, 4));
      d3.select('#actualRetailWinner').html(`<b>Winner:</b><br>${winners_ordered[0][0]}<br><br><b>Difference:</b><br>$${winners_ordered[0][1]}`)
      console.log(winners_ordered[0][0])
      first_border = (winners_ordered[0][0]).replace(' ','_')
      second_border = (winners_ordered[1][0]).replace(' ','_')
      third_border = (winners_ordered[2][0]).replace(' ','_')
      fourth_border = (winners_ordered[3][0]).replace(' ','_')
      d3.select(`#${first_border}`).classed('first_place', true)
      d3.select(`#${second_border}`).classed('second_place', true)
      d3.select(`#${third_border}`).classed('third_place', true)
      d3.select(`#${fourth_border}`).classed('fourth_place', true)

      
      if ((winners_ordered[0][0]) !== "User"){
        losingHorn.play()
      }
      else{
          winningTheme.play()
      }
});

var winners_ordered;
// var wnr_button = d3.select('#winner_button');
// wnr_button.on('click', function() {
//     d3.select('#bbarker').html('<img src="../images/0_BP.png"  width="100%">')
//     d3.select('#actualRetailPrice').html(`Actual Price: <br> $${laptops[rand_num]['Price_dollars']}`);
//     var ugabs = Math.abs(laptops[rand_num]['Price_dollars'] - uGuess);
//     var results_dict = {"User": ugabs, "Random Forest": Math.abs(laptops[rand_num]['Diff_RF']), "Neural Network": Math.abs(laptops[rand_num]['Diff_NN']), "Linear Regression": Math.abs(laptops[rand_num]['Diff_LR'])}
//     var winners_ordered = Object.keys(results_dict).map(function(key) {
//         return [key, results_dict[key]];
//       });
      
//       // Sort the array based on the second element
//       winners_ordered.sort(function(first, second) {
//         return first[1] - second[1];
//       });
      
//       // Create a new array with only the first 5 items
//       console.log(winners_ordered.slice(0, 4));
//       d3.select('#actualRetailWinner').html(`First Place: ${winners_ordered[0][0]}`)
//       console.log(winners_ordered)

//     });
