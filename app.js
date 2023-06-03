var BudgetAmount = document.getElementById("BudgetAmount")
BudgetAmount.innerHTML = "00"
var totalExpensesAmount = document.getElementById("totalExpensesAmount")
totalExpensesAmount.innerHTML = "00"
var Balance = document.getElementById("Balance")
Balance.innerHTML = "00"




//-----set Budget Function

function setBudgetFun() {
    var userBudget = document.getElementById("userBudget")
    if (userBudget.value) {

        BudgetAmount.innerHTML = Number(BudgetAmount.innerHTML) + Number(userBudget.value)
        Balance.innerHTML = BudgetAmount.innerText - totalExpensesAmount.innerText
        userBudget.value = ""
    }
    else {
        alert(" Please Enter Your Budget")
    }
}




// array in which we push multiple object 

var arry = []

// ----- Add Epenses Function

function addEpenses() {
    var categoryValue = document.getElementById("category")
    var expensesAmountValue = document.getElementById("expensesAmount")
    var expensesDateValue = document.getElementById("expensesDate")

    if (categoryValue.value && expensesAmountValue.value && expensesDateValue.value) {

// ---------constructor
        function Obj(categoryValue, expensesAmountValue, expensesDateValue) {

            this.category = categoryValue;
            this.amount = expensesAmountValue;
            this.date = expensesDateValue;

        }

    
        var callObj = new Obj(categoryValue.value, expensesAmountValue.value, expensesDateValue.value)


//-------- push object in arry 

        arry.push(callObj)

// --------edit method in prototype
        Obj.prototype.edit = function () {
            var userCategory = prompt("Enter Your Category", callObj.category)
            var userExpenseAmount = prompt("Enter Your Amount", callObj.amount)
            var userDate = prompt("Enter Date YYYY-MM-DD", callObj.date)



            callObj.category = userCategory
            callObj.amount = userExpenseAmount
            callObj.date = userDate

            categoryDiv.innerHTML = ""
            expenseamountDiv.innerHTML = ""
            dateDiv.innerHTML = ""

            textnodeCategory = document.createTextNode(`${callObj.category}`);
            categoryDiv.appendChild(textnodeCategory);

            textnodeAmount = document.createTextNode(`$ ${callObj.amount}`);
            expenseamountDiv.appendChild(textnodeAmount);

            textnodeDate = document.createTextNode(`${callObj.date}`);
            dateDiv.appendChild(textnodeDate);




            var changeSum = 0
            for (let i = 0; i < arry.length; i++) {
                changeSum += +arry[i].amount;
            }

            totalExpensesAmount.innerText = changeSum
            Balance.innerHTML = BudgetAmount.innerText - totalExpensesAmount.innerText


            console.log(arry);

        }


// --------delete method in prototype

        Obj.prototype.delete = function () {

            MyExpenses.remove()

            var index = arry.findIndex(obj => obj.category === callObj.category && obj.amount === callObj.amount && obj.date === callObj.date);

            arry.splice(index, 1)

            var delSum = 0
            for (let i = 0; i < arry.length; i++) {
                delSum += +arry[i].amount;
            }

            totalExpensesAmount.innerText = delSum
            Balance.innerHTML = BudgetAmount.innerText - totalExpensesAmount.innerText
            console.log(arry);
        }

        

        var espensesContainer = document.querySelector(".espensesContainer")
        espensesContainer.style.display="block";



        var MyExpenses = document.createElement("li")
        MyExpenses.classList.add("MyExpenses")
        espensesContainer.appendChild(MyExpenses)


        var starIconDiv = document.createElement("div")
        starIconDiv.classList.add('fa', 'fa-star')
        starIconDiv.classList.add("starIcon")
        MyExpenses.appendChild(starIconDiv)



        var categoryDiv = document.createElement("div")
        categoryDiv.classList.add("category")
        var textnodeCategory = document.createTextNode(`${callObj.category}`);
        categoryDiv.appendChild(textnodeCategory);
        MyExpenses.appendChild(categoryDiv)




        var expenseamountDiv = document.createElement("div")
        expenseamountDiv.classList.add("amount")
        var textnodeAmount = document.createTextNode(`$ ${callObj.amount}`);
        expenseamountDiv.appendChild(textnodeAmount);
        MyExpenses.appendChild(expenseamountDiv)



        var dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        var textnodeDate = document.createTextNode(`${callObj.date}`);
        dateDiv.appendChild(textnodeDate);
        MyExpenses.appendChild(dateDiv);



        var editBtn = document.createElement("div")
        editBtn.addEventListener('click', callObj.edit);
        editBtn.classList.add("editBtn")
        editBtn.classList.add('fa', 'fa-pen')
        MyExpenses.appendChild(editBtn)


        var delBtn = document.createElement("div")
        delBtn.addEventListener('click', callObj.delete);
        delBtn.classList.add("delBtn")
        delBtn.classList.add('fa', 'fa-xmark')
        MyExpenses.appendChild(delBtn)


        var sum = 0
        for (let i = 0; i < arry.length; i++) {
            sum += +arry[i].amount;
        }

        totalExpensesAmount.innerText = sum
        Balance.innerHTML = BudgetAmount.innerText - totalExpensesAmount.innerText
        if (Balance.innerHTML < 0) {
            alert("Your expenses is out of budget Please add some budget")
        }



        categoryValue.value = ""
        expensesAmountValue.value = ""
        expensesDateValue.value = ""
        console.log(arry);
    }


    else {
        alert("Please Enter your Category, Amount and Date.")
    }


}
















// -----Reset All 

function reset() {

    BudgetAmount.innerHTML = "00"
    totalExpensesAmount.innerHTML = "00"
    Balance.innerHTML = "00"
    var espensesContainer = document.querySelector(".espensesContainer")
    if(espensesContainer){
        
        espensesContainer.remove()
        arry.length = 0
    }

}


