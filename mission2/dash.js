let totalSalary = 0;
let expenses = [];
let myChart = null;


window.onload = function () {

    let savedSalary = localStorage.getItem("salary");
    if (savedSalary) {
        totalSalary = Number(savedSalary);
        document.getElementById("salary").value = totalSalary;
    }

    let savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);


        for (let i = 0; i < expenses.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = `${expenses[i].name} - ${expenses[i].amount}  <button class="delete" >remove</button><br>`;

            li.querySelector(".delete").addEventListener("click", function () {
                expenses.splice(i, 1);
                localStorage.setItem("expenses", JSON.stringify(expenses));
                li.remove();
                updateBalance();
                make_chart();
            });
            document.getElementById("expenselist").appendChild(li);
        }
        updateBalance();
        make_chart();
    }
};




async function setSalary() {
    totalSalary = Number(document.getElementById("salary").value);
    let currency1 = document.getElementById("currency1").value;
    let currency2 = document.getElementById("currency2").value;



    if (currency1 === "INR" && currency2 === "USD") {
        let res = await fetch("https://api.exchangerate-api.com/v4/latest/INR");
        let data = await res.json();
        let rate = data.rates.USD;
        totalSalary = totalSalary * rate;
        document.getElementById("salary").value = totalSalary;
        document.getElementById("currency").innerText = "(All amount in USD)"

    }

    if (currency1 === "USD" && currency2 === "INR") {
        let res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        let data = await res.json();
        let rate = data.rates.INR;
        totalSalary = totalSalary * rate;
        document.getElementById("salary").value = totalSalary;
        document.getElementById("currency").innerText = "(All amount in INR)"

    }

    localStorage.setItem("salary", totalSalary);
    updateBalance();
}




function addExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = Number(document.getElementById("expense-amt").value);

    if (name === "" || amount === 0) {
        alert("Enter valid data");
        return;
    }
    if (amount < totalSalary && amount > 0) {
        expenses.push({ name, amount });
        localStorage.setItem("expenses", JSON.stringify(expenses));
        make_list();
        updateBalance();
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amt").value = "";
        make_chart();
        alrt();
    }
    else {
        alert("Enter valid amount")
    }
}





function make_list() {

    let index = expenses.length - 1;
    let item = expenses[index];

    let li = document.createElement("li");

    li.innerHTML = `${item.name} -  ${item.amount}  
    <button class="delete">remove</button><br>`;

    li.querySelector(".delete").addEventListener("click", function () {

        expenses.splice(index, 1);

        localStorage.setItem("expenses", JSON.stringify(expenses));

        li.remove();

        updateBalance();
        make_chart();
    });

    document.getElementById("expenselist").appendChild(li);
}





function updateBalance() {

    let totalExpense = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalExpense += expenses[i].amount;
    }

    document.getElementById("total").innerText = `Total Expandature\n ${totalExpense}`;

    let bal = totalSalary - totalExpense
    if (bal > 0) {
        document.getElementById("balance").innerText = `Remaining Balance\n ${bal}`;
    }
    else {
        alert("!!...Please enter amount less than remaining balance...!!")
    }

}





function make_chart() {

    let total_exp = 0;

    for (let i = 0; i < expenses.length; i++) {
        total_exp += expenses[i].amount;
    }

    let remain = totalSalary - total_exp;

    const ctx = document.getElementById('Chart').getContext('2d');

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Total Expense", "Remaining Balance"],
            datasets: [{
                label: "expense_balance",
                data: [total_exp, remain],
                backgroundColor: ["red", "green"]
            }]
        }
    });
}




function pdf() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 10;

    doc.setFontSize(16);
    doc.text("Expense report", 10, y);

    y += 10;

    doc.setFontSize(12);
    for (let i = 0; i < expenses.length; i++) {
        let text = `${i + 1}. ${expenses[i].name} - ${expenses[i].amount}`;
        doc.text(text, 10, y);
        y += 8;
    }

    y += 10;

    let totalExpense = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalExpense += expenses[i].amount;
    }

    let balance = totalSalary - totalExpense;

    doc.text(`Total expense: ${totalExpense}`, 10, y);
    y += 8;
    doc.text(`Remaining ealance: ${balance}`, 10, y);

    doc.save("exp.pdf");
}

function alrt() {
    let exp = localStorage.getItem("expenses")
    let tx = 0;
    let nw_exp = [];


    if (exp) {
        nw_exp = JSON.parse(exp);
        for (let i = 0; i < nw_exp.length; i++) {
            tx += nw_exp[i].amount;
        }
        ts = localStorage.getItem("salary")
        if ((ts - tx) < (ts / 10)) {
            document.getElementById("balance").style.color = "red";
            alert("!!...Your balance is less than 10%...!!")
        }
    }
}