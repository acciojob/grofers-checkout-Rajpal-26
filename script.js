const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const newRow = document.createElement('tr');
const totalCell1 = document.createElement('td');
totalCell1.append("Total Price");
const totalCell2 = document.createElement('td');

newRow.appendChild(totalCell1);
newRow.appendChild(totalCell2);

// Add the new row to the table
const table = document.querySelector('table');
table.appendChild(newRow);
let total = 0;
const getSum = () => {
//Add your code here
    let price = document.querySelectorAll(".price");
    // let total = 0;
    for (let i = 0; i < price.length; i++) {
        total += parseFloat(price[i].innerHTML);
       
    }   
    // console.log(total)
    // return total;
    return totalCell2.innerHTML = total;
    
};

    
getSumBtn.addEventListener("click", getSum);

