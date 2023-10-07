"use script";

let student = {
    name:'Fred',
    favoriteFood:"Orange",
    city:"Oraison",
}

let values = Object.values(student);
let nbr_carac = 0;
for (let i = 0; i < values.length; i++) {
    nbr_carac += values[i].length;
}

if (nbr_carac%2 == 0) {
    console.log("pair");
} else {
    console.log("impaire");
}
