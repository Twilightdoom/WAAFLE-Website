
    var scales = document.getElementById("scales");
    var selector = document.getElementById("selector");
    var selectValue = document.getElementById("selectValue");
    var progressBar = document.getElementById("progressBar");

    selectValue.innerHTML = scales.value;
        scales.oninput = function(){
        selectValue.innerHTML = this.value;
        selector.style.left = this.value + "%";
        progressBar.style.width = this.value + "%";
    }