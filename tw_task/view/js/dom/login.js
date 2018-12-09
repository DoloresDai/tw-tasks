function isLoginSuccess(username, password) {
    return username === "123" && password === "123";
}

function showLoginResult() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (isLoginSuccess(username, password)) {
        getFeedback("登录成功！");
    } else {
        getFeedback("用户或密码错误！");
        cleanPassword();
    }
}

function getFeedback(feedbackString) {
    let feedback = document.createElement("p");
    feedback.id = "feedback";
    let result = document.createTextNode(feedbackString);
    feedback.appendChild(result);
    document.body.appendChild(feedback);
}

function cleanPassword() {
    document.getElementById("password").innerHTML = "";
}