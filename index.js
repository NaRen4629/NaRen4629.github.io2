const _btnSubmit = document.getElementById('btnSubmit');
const _input_bday = document.getElementById('bdate');
const _input_mobile = document.getElementById('mobile');
const _input_height = document.getElementById('height');
const _input_weight = document.getElementById('weight');

let today = new Date();

function validateBday() {
    let input = _input_bday.value;
    bday = new Date(input);
    return bday < today;
}

function calculateAge(){
    let age = today.getFullYear() - bday.getFullYear();
    if(today.getMonth() < bday.getMonth() || today.getDay() < bday.getMonth()){
        age--;
    }
    return age;
}

function validateMobile_TwoChars(mobile){
    const firstTwoChars = mobile.slice(0, 2);
    if(firstTwoChars == "09"){
        return true;
    }
}

function validateMobile_OnlyNumbers(mobile){
    if(/^\d+$/.test(mobile)){ return true; }
}

function validateMobile_GreatOrEquals11(mobile){
    if(mobile.trim().length >= 11){ return true; }
}

function validateHeight(height){
    if(height>100){return true;}
}

function validateWeight(weight){
    if(weight>20){return true;}
}

_btnSubmit.addEventListener("click", function(){
    //check birthdate
    if(validateBday()){
        //true if age is greater than or equals to 18
        if(calculateAge() >= 18){
            _input_bday.style.border = "1px solid #ced4da";
        }
        else{
            _input_bday.style.border = "1px solid red";
            alert("Your age is " + calculateAge() + ". Age must be 18 or above!");
        }
    }else{
        _input_bday.style.border = "1px solid red";
        alert('Birth date should be lesser than date today!');
    }

    let mobile = _input_mobile.value;
    //check if mobile number has '09' in the first two digits
    if(validateMobile_TwoChars(mobile)){
        //check if mobile number only contains integers
        if(validateMobile_OnlyNumbers(mobile)){      
            //check if mobile number is greater than or equals to 11 digits
            if(validateMobile_GreatOrEquals11(mobile)){
                _input_mobile.style.border = "1px solid #ced4da";
            }
            else{
                _input_mobile.style.border = "1px solid red";
                alert('Mobile number should be greater than or equals to 11 digits!');
            }
        }
        else{
            _input_mobile.style.border = "1px solid red";
            alert('Mobile number should be numbers only!');
        }
        
    }else{
        _input_mobile.style.border = "1px solid red";
        alert("Mobile number should start with '09'");
    }

    let height = _input_height.value;
    let weight = _input_weight.value;
    if(validateHeight(height)){
        _input_height.style.border = "1px solid #ced4da";
    }else{
        _input_height.style.border = "1px solid red";
        alert('Height should be greater than 100cm!');
    }

    if(validateWeight(weight)){
        _input_weight.style.border = "1px solid #ced4da";
    }
    else{
        _input_weight.style.border = "1px solid red";
        alert('Weight should be greater than 20kg!');
    }
});