const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const lastRow = document.createElement("tr")
const tdata = document.createElement("td")

document.body.appendChild(tdata);
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
    return tdata.innerHTML = total;
    
};

    
getSumBtn.addEventListener("click", getSum);

