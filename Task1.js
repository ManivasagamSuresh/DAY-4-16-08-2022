var obj1 = {
    name : "person 1",
    age : 5,
    }
    
    var obj2 = {
        age : 5,
        name : "person 1",
        }
    
        m=JSON.stringify(obj1);
        n=JSON.stringify(obj2);
        console.log(m);
        console.log(n);
        console.log(m===n); //  false
        console.log(m==n); //  false


