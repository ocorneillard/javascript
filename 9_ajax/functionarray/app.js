const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
let people = "";

// xhr.ReadyStateChange
// xhr.fetch()
xhr.onload = function () {

    // if connection is correct
    if (xhr.status === 200) {
        console.log(this.readyState);
        // Take data from json
        console.log(this.responseText);
       let people = JSON.parse(this.responseText);
       console.log(people);

       // Give persons a random score
        for (i = 0 ; i < people.length; i++) {
            people[i].score = Math.floor(Math.random() * 1000);
        }

        // Order people by score
        people.sort( function(a,b) {
            return b.score - a.score;
        });


        // Display people 
        for (i = 0; i < people.length; i++){
            if (people[i].score > 750) {
                
                let displayPerson = document.createElement("li");
                 let newContent = document.createTextNode(`
                     Name : ${people[i].name} ,
                     Birthday : ${people[i].birthday},
                      Country : ${people[i].country} ,
                     Score : ${people[i].score}.
                `);

                displayPerson.appendChild(newContent);
                let placePerson = document.querySelector(".morethan750");
                placePerson.appendChild(displayPerson);

            } else if (people[i].score >= 500) {
                let displayPerson = document.createElement("li");
                 let newContent = document.createTextNode(`
                     Name : ${people[i].name} ,
                     Birthday : ${people[i].birthday},
                      Country : ${people[i].country} ,
                     Score : ${people[i].score}.
                `);

                displayPerson.appendChild(newContent);
                let placePerson = document.querySelector(".between");
                placePerson.appendChild(displayPerson);

            } else if (people[i].score < 500) {
                let displayPerson = document.createElement("li");
                 let newContent = document.createTextNode(`
                     Name : ${people[i].name} ,
                     Birthday : ${people[i].birthday},
                      Country : ${people[i].country} ,
                     Score : ${people[i].score}.
                `);

                displayPerson.appendChild(newContent);
                let placePerson = document.querySelector(".less500");
                placePerson.appendChild(displayPerson); 
            }
        }
        
        console.log(people);
    }
}


xhr.send();



// Add to an object in an array
// let ar = [ {"data" : 10}, {"data" : 20}];
// console.log(ar.length)
// ar[1].score = 10  ;

// console.log(ar);

// let table = document.querySelector("table");
// table.style.border = "5px solid black";
// let tr = document.querySelectorAll("tr");
// tr[0].style.border = "3px solid black";
// console.log(table)
