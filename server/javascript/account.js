

function makeAlert(){
    window.alert("Hey");
}

function clearActive() {
    let tab1 = document.getElementById("tabProfile");
    tab1.classList.remove("active-tab");

    let tab2 = document.getElementById("tabFriends");
    tab2.classList.remove("active-tab");

    let tab3 = document.getElementById("tabMakeCall");
    tab3.classList.remove("active-tab");

    let tab4 = document.getElementById("tabCallArea");
    tab4.classList.remove("active-tab");
}

function makeActive(tabName) {
    tabName.classList.add("active-tab");
}

function clearDiv(){
    let clr = document.getElementById("undeAfisez");
    clr.innerHTML = "";
}

function displayProfile(u_name, u_email) {
    clearActive();
    clearDiv();

    let tab1 = document.getElementById("tabProfile");
    makeActive(tab1);

    let clr = document.getElementById("undeAfisez");

    let y_usr = document.createElement("h3");
    let y_email = document.createElement("h3");

    y_usr.innerText = "Your username: " + u_name;
    y_usr.style.fontSize = 1.0 + "vw";
    y_email.innerText = "Your email address: " + u_email;
    y_email.style.fontSize = 1.0 + "vw";

    let bt = document.createElement("button");
    bt.className = "logout-button";
    bt.innerText = "Logout";
    bt.onclick= logoutUser;

    let dvParinte = document.createElement("div");
    dvParinte.className = "row";

    let dv = document.createElement("div");
    dv.className = "fit10 fltLeftStyle";

    let dv2 = document.createElement("div");
    dv2.className = "fit50 fltLeftStyle row";

    dvParinte.appendChild(dv2);

    dv2.appendChild(y_usr);
    dv2.appendChild(y_email);

    dv.appendChild(bt);

    clr.appendChild(dvParinte);
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
        if (nr % 7 === 0){
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
    clearActive();
    clearDiv();

    let tab1 = document.getElementById("tabFriends");
    makeActive(tab1);

    let clr = document.getElementById("undeAfisez");

    friends = transformToArray(friends);
    console.log(friends);

    let nrFriends = 1;

    for (let x of friends){
        let id_x = x[0];
        let email_x = x[1];
        let parola_x = x[2];
        let username_x = x[3];
        let onoff_x = x[4];
        let incall_x = x[5];


        let dvP = document.createElement("div");
        let has = document.createElement("h2");
        has.innerText = "" + nrFriends + ". " + username_x.capitalize();
        has.style.fontSize = 1.2 + "vw";

        let unp = document.createElement("p");
        unp.style.fontSize = 1.0 + "vw";
        if (onoff_x === 1){
            unp.style.color = "green";
            unp.innerText = "Online";
            has.appendChild(unp);
        }
        else{
            unp.style.color = "red";
            unp.innerText = "Offline";
            has.appendChild(unp);
        }

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

function displayMakeCall(friends) {
    clearActive();
    clearDiv();

    let tab1 = document.getElementById("tabMakeCall");
    makeActive(tab1);

    let clr = document.getElementById("undeAfisez");

    friends = transformToArray(friends);
    console.log(friends);

    let nrFriends = 1;

    for (let x of friends){
        let id_x = x[0];
        let email_x = x[1];
        let parola_x = x[2];
        let username_x = x[3];
        let onoff_x = x[4];
        let incall_x = x[5];


        let dvP = document.createElement("div");
        let has = document.createElement("h2");
        has.innerText = "" + nrFriends + ". " + username_x.capitalize();
        has.style.fontSize = 1.2 + "vw";

        let unp = document.createElement("p");
        unp.style.fontSize = 1.0 + "vw";
        if (onoff_x === 1){
            unp.style.color = "green";
            unp.innerText = "Online";
            has.appendChild(unp);

            dvP.appendChild(has);

            if (incall_x === 1){
                unp.innerText += " - in a call";
            }
            else{
                unp.innerText += " - not in a call";

                let bt_call = document.createElement("button");
                bt_call.className = "call-button";
                bt_call.innerText = "Start call";

                dvP.appendChild(bt_call);
            }

            clr.appendChild(dvP);

            nrFriends += 1;
        }
    }
}

function initialPendingCall() {
    let pnd = document.getElementById("tabCallArea");

    let tr_fr = transformToArray(prieteni);
    let one_least = 0;

    for (let x of tr_fr) {
        let id_x = x[0];
        let email_x = x[1];
        let parola_x = x[2];
        let username_x = x[3];
        let onoff_x = x[4];
        let incall_x = x[5];

        if (incall_x === ut_id){
            one_least += 1;
        }
    }
    if (one_least !== 0){
        pnd.innerText += " - pending (" + one_least + ")";
    }
    else{
        pnd.innerText += " - pending (0) ";
    }
}

function displayPendingCall(){
    clearActive();
    clearDiv();

    let tab1 = document.getElementById("tabCallArea");
    makeActive(tab1);

    let clr = document.getElementById("undeAfisez");
    let tx = document.createElement("h3");
    tx.classList.add("mic-text");

    if (tab1.innerText === "Call area - pending (0)"){
        tx.innerText = "No friend is calling.";
        clr.appendChild(tx);

        tx.innerText += " If you want to start a call go to 'Make call' section";

        return;
    }

    //else
    tx.innerText = "List of pending calls: ";
    clr.appendChild(tx);

    let arr_call = [];
    let nr_call = 1;

    let tr_fr = transformToArray(prieteni);
    for (let x of tr_fr) {
        let id_x = x[0];
        let email_x = x[1];
        let parola_x = x[2];
        let username_x = x[3];
        let onoff_x = x[4];
        let incall_x = x[5];

        if (incall_x === ut_id) {



            nr_call += 1;
        }
    }
}

window.onload = function () {
    initialPendingCall();
};