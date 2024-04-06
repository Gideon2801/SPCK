$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

function signup(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var user = {
        user: username,
        password: password,
        email: email,

    }

    var userinfor = JSON.stringify(user);
    localStorage.setItem("username", userinfor);
    alert("dang ky thanh cong");
    window.location.href = "home.html"
}
var form1 = document.getElementById("form1");
form1.addEventListener("submit", function (e) {
    signup(e)
})

function login(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem("username");
    var data = JSON.parse(user);
    console.log(user)
    if (user == null) {
        alert("vui long dien day du thong tin");
    } else if (username == data.user && password == data.password) {
        alert("dang nhap thanh cong");
        window.location.href = "home.html"
    } else {
        alert("dang nhap that bai");
    }
}

var form2 = document.getElementById("form2");
form2.addEventListener("submit", function (e) {
    login(e)
})

