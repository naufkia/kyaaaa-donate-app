
const amountBtn = document.querySelectorAll(".denomination")
for (var i = 0; i < amountBtn.length; i++) {
    amountBtn[i].addEventListener('click', function(e) {
        document.querySelector('.selected').removeAttribute("checked");
        document.querySelector('.selected').classList.remove("selected");
        document.querySelector(".denomination-other input").value = '';
        document.querySelector(".denomination-other input").classList.remove("selected");
        this.classList.add("selected");
        this.setAttribute('checked', '');
        document.querySelector("button").innerHTML = 'Donate Rp ' + document.querySelector('.selected input').value
        const amount = document.querySelector('.selected input').value.replace(/[^0-9]/g, '');
        document.querySelector("#amount").value = amount;
        // document.querySelector("#custom_amount").value = document.querySelector('.selected input').value;
    });
}

var amount = document.querySelector(".denomination-other input");
amount.addEventListener('focus', function (event) {
    document.querySelector('.selected').removeAttribute("checked");
    document.querySelector('.selected').classList.remove("selected");
    amount.classList.add("selected");
    document.querySelector("#amount").value = '';
    document.querySelector("button").innerHTML = 'Donate Rp ';
});

amount.addEventListener('keyup', function (event) {
    var n = this.value.replace(/\D/g,'');
    var r = n.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    amount.value = r;
    document.querySelector("button").innerHTML = 'Donate Rp ' + r;
    var newvalue = r.replace(/[^0-9]/g, '');
    document.querySelector("#amount").value = newvalue;
});