//---------------------------------------Menue
let menue = document.querySelector("#menue");
let navul = document.querySelector("nav ul");
menue.addEventListener("click", function () {
  navul.classList.toggle("display");
});
//hide menue
let hid = document.querySelector("nav i");
document.addEventListener("click", function (e) {
  if (e.target != hid) {
    if (navul.className == "display") {
      navul.classList.toggle("display");
    }
  }
});
///////////////////==================================
let linkToHome = document.querySelector(".linkToHome");
let home = document.querySelector(".home");
let linkToSend = document.querySelector(".linkToSend");
let sendmoney = document.querySelector(".sendmoney");
let sendmoneypage = document.querySelector(".sendmoneypage");
let linkToCustomers = document.querySelector(".linkToCustomers");
let linkToAllCustomers = document.querySelector(".linkToAllCustomers");
let viewAllCustomers = document.querySelector(".viewAllCustomers");
let linkToTransactions = document.querySelector(".linkToTransactions");
let transactions = document.querySelector(".transactions");
let sendInTable = document.querySelectorAll("table tr td a");
let checkbal = document.querySelector(".getcheckBalance ");
let link1getcheckBalance = document.querySelector(".link1getcheckBalance ");
let link2getcheckBalance = document.querySelector(".link2getcheckBalance ");

// console.log(sendInTable);
link1getcheckBalance.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.add("visibile");
});
link2getcheckBalance.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.add("visibile");
});

linkToHome.addEventListener("click", function () {
  home.classList.add("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
});
linkToSend.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.add("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
});
sendmoney.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.add("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
});
linkToCustomers.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.add("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
});
linkToAllCustomers.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.add("visibile");
  transactions.classList.remove("visibile");
  checkbal.classList.remove("visibile");
});
linkToTransactions.addEventListener("click", function () {
  home.classList.remove("visibile");
  sendmoneypage.classList.remove("visibile");
  viewAllCustomers.classList.remove("visibile");
  transactions.classList.add("visibile");
  checkbal.classList.remove("visibile");
});
sendInTable.forEach(function (e) {
  e.addEventListener("click", function () {
    checkbal.classList.remove("visibile");
    home.classList.remove("visibile");
    sendmoneypage.classList.add("visibile");
    viewAllCustomers.classList.remove("visibile");
    transactions.classList.remove("visibile");
    let chaild = e.parentElement;
    let parent = chaild.parentElement;
    // console.log(parent.children[2].textContent);
    sendersAccountNumber.value = parent.children[2].textContent;
  });
});
///////////////////==============================
let mina = document.querySelector(".mina");
let btnTransfer = document.querySelector(".btnTransfer");
let sendersAccountNumber = document.querySelector(`.sendersAccountNumber`);
let recieversAccountNumber = document.querySelector(".recieversAccountNumber");
let amount = document.querySelector(".amountToTransfer");
let balancemina = document.querySelector(".balancemina");
let transaction = document.querySelector(".transactions tbody");

// console.log(
//   (transaction.innerHTML = ` <tr>
// <td>${sendersAccountNumber.value}</td>
// <td>${recieversAccountNumber.value}</td>
// <td>${amount.value}</td>
// <td>succes</td>
// </tr>`)
// );

// console.log(sendersAccountNumber.value);

// mina.textContent = parseInt(mina.textContent) + 2;
// console.log(parseInt(mina.textContent) + 2);
// console.log(btnTransfer);
// console.log(sendersAccountNumber.value);
// btnTransfer.addEventListener("click", function () {
//   // console.log(amount.value);
//   // if (sendersAccountNumber.value == "162020655") {
//   //   balancemina.textContent = parseInt(balancemina.textContent - amount.value);
//   // }
//   let balance = document.querySelector(`num${sendersAccountNumber.value}`);
//   console.log(balance);
// });
btnTransfer.addEventListener("click", function () {
  let balsender = document.querySelector(`.balan${sendersAccountNumber.value}`);
  let balreciever = document.querySelector(
    `.balan${recieversAccountNumber.value}`
  );
  let amount = document.querySelector(".amountToTransfer");

  console.log(balsender.textContent);
  console.log(balreciever.textContent);
  if (
    parseInt(balsender.textContent) >= parseInt(amount.value) &&
    eval(amount.value * 1) > 0 &&
    sendersAccountNumber.value != recieversAccountNumber.value
  ) {
    balsender.textContent = parseInt(balsender.textContent - amount.value);
    balreciever.textContent =
      parseInt(balreciever.textContent) + parseInt(amount.value);

    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color:  green ;">succeed</td>
    </tr>`;
    sendersAccountNumber.value = "";
    recieversAccountNumber.value = "";
    amount.value = "";
  } else if (sendersAccountNumber.value == recieversAccountNumber.value) {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red ;">Failed</td>
    </tr>`;
    alert("You try to send to the same account !");
  } else if (eval(amount.value * 1) <= 0) {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red ;">Failed</td>
    </tr>`;
    alert("Enter Avalid Balance");
  } else {
    transaction.innerHTML += ` <tr>
    <td>${sendersAccountNumber.value}</td>
    <td>${recieversAccountNumber.value}</td>
    <td>${amount.value}</td>
    <td style="color: red  ;">Failed</td>
    </tr>`;
    alert("Not Sufficient Balance in Account !");
  }
});
//////////////////============================
let check = document.querySelector(".getcheckBalance .accountNumber");
let paragraphInCheck = document.querySelector(".getcheckBalance p");
let submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  console.log(check.value);
  let userbalance = document.querySelector(`.balan${check.value}`);
  console.log(userbalance.textContent);
  paragraphInCheck.textContent = `Account Balance is ${userbalance.textContent}`;
});
