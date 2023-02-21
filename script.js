const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const lastRow = document.createElement("tr")

document.body.appendChild(lastRow);
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
    return lastRow.innerHTML = "Total Price: " + total;
    
};

    
getSumBtn.addEventListener("click", getSum);

