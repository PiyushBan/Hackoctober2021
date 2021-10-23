document.getElementById('click').onclick = function() {click()};

function click(){  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	OutputStatus("Head!");
    }else{
        OutputStatus("Tails!");
    }
};

function OutputStatus(status) {
    document.getElementById("result").innerHTML = status;
};
