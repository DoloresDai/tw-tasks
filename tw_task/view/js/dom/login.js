function isLoginSuccess(username,password) {
  return username === "123" && password === "123";
}

function showLoginResult() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (isLogicSuccess(username, password)){
      alert("登录成功！");
  }
  alert("账号或密码错误！");
  password.outerHTML = password.outerHTML;
}