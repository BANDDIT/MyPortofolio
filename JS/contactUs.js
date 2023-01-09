let nama = document.getElementById('nama');
let email = document.getElementById('email');
let no_telp = document.getElementById('no_telp');
let message = document.getElementById('message');

let btn = document.querySelector('#button');

const firebaseConfig = {
    apiKey: "AIzaSyAwDmriW_ZE42ceJdNYoKlrf6hvrOWGwlk",
    authDomain: "finalprojectfe-bncc.firebaseapp.com",
    databaseURL: "https://finalprojectfe-bncc-default-rtdb.firebaseio.com",
    projectId: "finalprojectfe-bncc",
    storageBucket: "finalprojectfe-bncc.appspot.com",
    messagingSenderId: "1014846714083",
    appId: "1:1014846714083:web:978176c6f870922175d5d6",
    measurementId: "G-GKWVZYFWSV"
};

function stay() {
    nama.value = '';
    email.value = '';
    no_telp.value = '';
    message.value = '';
}

function auth(){
    let checker = 1;
    if (nama.value == "" || nama.value == null) {
        alert('Name is required');
        checker = 0;
    } else if (!(email.value.includes('@'))) {
        alert('Email is required');
        checker = 0;
    } else if (no_telp == null || no_telp.value[0] != '0' || no_telp.value[1] != '8') {
        alert('Phone number is required');
        checker = 0;
    }
    // console.log(nama.value);
    // console.log(nama.value);
    // console.log(email.value);
    // console.log(no_telp.value);

    if (checker == 1) {
        firebase.initializeApp(firebaseConfig);
        let database = firebase.database().ref('data');
        let inputan = database.push();
        inputan.set({
            nama: nama.value,
            email: email.value,
            no_telp: no_telp.value,
            message: message.value
        });
        //alert(nama.value);
        //alert(inputan);
        alert('Submit Successfully Done');
        stay();
    }    
}

btn.addEventListener("click",function(){
    auth();
});
/*
btn.onclick= function(){
    auth();
}
*/

/*
btn.addEventListener('submit', function(event) {

    event.preventDefault();

    let checker = 1;
    if (nama.value == "" || nama.value == null) {
        alert('Name is required');
        checker = 0;
    } else if (!(email.value.includes('@'))) {
        alert('Email is required');
        checker = 0;
    } else if (no_telp == null || no_telp.value[0] != '0' || no_telp.value[1] != '8') {
        alert('Phone number is required');
        checker = 0;
    }
    //console.log(nama.value);

    if (checker == 1) {
        firebase.initializeApp(firebaseConfig);
        let database = firebase.database().ref('data');
        let inputan = database.push();
        inputan.set({
            nama: nama.value,
            email: email.value,
            no_telp: no_telp.value,
            message: message.value
        });
        alert('Submit Successfully Done');
        stay();
        /*
        $.post("https://finalprojectfe-bncc-default-rtdb.firebaseio.com/", {
                nama: nama.value,
                email: email.value,
                no_telp: no_telp.value,
                message: message.value
            },
            function() {
                alert("Berhasil");
            }
        );
        */
    //}
//});

/*
Kalau ada yang diklik, itu lebih prioritas buat dijalanin lebih dulu
dibandingin console2 yang lain*/

/*
function check() {
    let checker = 1;
    if (nama.value == "" || nama.value == null) {
        checker = 0;
        alert('Name is required');

    } else if (!(email.value.includes('@'))) {
        alert('Email is required');
        checker = 0;
    } else if (no_telp == null || no_telp.value[0] != '0' || no_telp.value[1] != '8') {
        alert('Phone number is required');
        checker = 0;
    }

    if (checker == 1) {
        alert('Submit Successfully Done');
        stay();
        /*
        firebase.intializeApp(firebaseConfig);
        let database = firebase.database().ref('data');
        let inputan = database.push();
        inputan.set({ nama, email, no_telp, message });
    }
} 
*/