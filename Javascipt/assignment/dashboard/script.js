function submit() {
    let um = document.getElementById("userName");
    let pass = document.getElementById("userPass");
    const users = [{
        id: 101,
        user: "harsh",
        password: "harsh1322"
    },{
        id: 102,
        user: "arsh",
        password: "arsh2213"
    },{
        id: 103,
        user: "simran",
        password: "simran001"
    }]
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == um.value.trim() && users[i].password == pass.value.trim()) {
            console.log("correct username")
            location.href = "dashboard.html"
            break;
        }
    }    
        if (i >= 3)
        console.log("sorry")
}