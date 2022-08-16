const abc = new XMLHttpRequest();
abc.open("GET","https://restcountries.com/v3.1/all");
// abc.open("GET","https://restcountries.com/v3.1/capital/{capital}");
abc.send();
abc.responseType = "json";
abc.onload=function displayResult(){
    const countries = abc.response;
    console.log(countries);
    // console.log(countries.length);
    
    for ( var i in countries){
    console.log(countries[i].flags.png);
    console.log(countries[i].name.common,countries[i].region,countries[i].subregion,countries[i].population);
    // console.log(countries[i].region);
    // console.log(countries[i].subregion);
    // console.log(countries[i].population);



    }

}