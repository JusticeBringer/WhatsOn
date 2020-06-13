

function makeAlert(){
    window.alert("Hey");
}

function clearDiv(){
    let clr = document.getElementById("undeAfisez");
    clr.innerHTML = "";
}

function displayProfile() {
    clearDiv();
    let clr = document.getElementById("undeAfisez");

    let bt = document.createElement("button");
    bt.className = "logout-button";
    bt.innerText = "Logout";
    bt.onclick= logoutUser;

    let dv = document.createElement("div");
    dv.className = "fit10 fltLeftStyle";

    dv.appendChild(bt);
    clr.appendChild(dv);
}

function logoutUser() {
    window.location.href="http://localhost:5000/logout";
}

function transformToArray(jsonFriends){
    let newArr = [];
    let obj = [];
    let nr = 1;

    JSON.parse(jsonFriends, (key, value) =>{
        if (nr % 5 === 0){
            nr = 1;
            newArr.push(obj);
            obj = [];
        }
        else{
            obj.push(value);
            nr += 1;
        }
    });

    return newArr;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function displayFriends(friends) {
    clearDiv();
    let clr = document.getElementById("undeAfisez");

    friends = transformToArray(friends);
    console.log(friends);

    let nrFriends = 1;

    for (let x of friends){
        let id_x = x[0];
        let email_x = x[1];
        let parola_x = x[2];
        let username_x = x[3];


        let dvP = document.createElement("div");
        let has = document.createElement("h2");
        has.innerText = "" + nrFriends + ". " + username_x.capitalize();
        has.style.fontSize = 1.2 + "vw";

        let p_e = document.createElement("a");
        p_e.innerHTML = email_x;
        p_e.href ="mailto:" + email_x;

        let ct = document.createElement("p");
        ct.innerText = "Contact him at his email address: ";
        ct.style.fontSize = 1 + "vw";
        ct.style.color = "black";

        ct.appendChild(p_e);

        dvP.appendChild(has);
        dvP.appendChild(ct);
        clr.appendChild(dvP);

        nrFriends += 1;
    }



}