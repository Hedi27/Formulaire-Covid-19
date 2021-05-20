function test() {
    alpha = /^[A-Za-z]+$/;
    num = /[^0-9]/;

    x = document.getElementById('prenom').value;
    if (x.length < 3 || !(x.match(alpha))) {
        alert("Votre prénom n'est pas valide");
        return false;
    }

    y = document.getElementById('nom').value;
    if (y.length < 3 || !(y.match(alpha))) {
        alert("Votre nom n'est pas valide");
        return false;
    }

    a = document.getElementById('age').value;
    if (a.length == 0 || parseInt(a) <= 0 || a.match(alpha)) {
        alert("Votre âge n'est pas valide");
        return false;
    }

    m = document.getElementById('email').value;
    if ((m.length == 0) || (m.length > 50) || (m.indexOf("@") > m.lastIndexOf(".")) || (m.indexOf("@") == -1)) {
        alert("Votre email n'est pas valide");
        return false;
    }

    z = document.getElementById('adresse').value.length;
    if (z < 10) {
        alert("Votre adresse n'est pas valide");
        return false;
    }

    n = document.getElementById('num').value;
    if ((n.match(alpha)) || (n.length != 8) || ((n.charAt(0).toString()) == "0") || ((n.charAt(0).toString()) == "1")) {
        alert("Votre numéro n'est pas valide");
        return false;
    }
    score = 0;
    pts1 = document.querySelectorAll(".para1");
    pts2 = document.querySelectorAll(".para2");
    pts3 = document.querySelectorAll(".para3");
    pts5 = document.querySelectorAll(".para5");
    checkb = document.querySelectorAll(".chai");
    mc = 0;
    for (let d = 0; d < checkb.length; d++) {
        if (checkb[d].checked == true) {
            mc = mc + 1;
        }
    }

    for (let i = 0; i < pts1.length; i++) {
        if (pts1[i].checked == true) {
            score = score + 1;
        }
    }
    for (let j = 0; j < pts2.length; j++) {
        if (pts2[j].checked == true) {
            score = score + 2;
        }
    }
    for (let k = 0; k < pts3.length; k++) {
        if (pts3[k].checked == true) {
            score = score + 3;
        }
    }
    for (let b = 0; b < pts5.length; b++) {
        if (pts5[b].checked == true) {
            score = score + 5;
        }
    }
    lw = window.localStorage
    lw.setItem('age', a);
    lw.setItem('pol', pol)
    lw.setItem('pts', pts);

}