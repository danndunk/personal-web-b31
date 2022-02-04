function showData(){
    
    // DOM mengambil inputan data
    let name = document.getElementById("input-name").value
    console.log(name);
    // DOM mengirimkan data
    document.getElementById("input-name").value = ""

    let email = document.getElementById("input-email").value
    console.log(email);
    document.getElementById("input-email").value = ""

    let phonenumber = document.getElementById("input-phonenumber").value
    console.log(phonenumber);
    document.getElementById("input-phonenumber").value = ""

    let select = document.getElementById("input-select").value
    console.log(select);
    document.getElementById("input-select").value = ""

    let message = document.getElementById("input-message").value
    console.log(message);
    document.getElementById("input-message").value = ""

    if(name == ""){
        alert("Input name field must be not empty")
    }

    if(email == ""){
        alert("Input email field must be not empty")
    }

    if(phonenumber == ""){
        alert("Input phone number field must be not empty")
    }

    if(message == ""){
        alert("Input message field must be not empty")
    }


    let emailReceiver = 'rhomairama@mail.com'

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${select}&body= Hello my name is ${name}, ${message}, this is my number phone ${phonenumber}`

    a.click()

    let dataObject = {
        dataName : name,
        dataEmail : email,
        dataPhoneNumber : phonenumber,
        dataSelect : select,
        dataMessage : message
    }

    console.table(dataObject)
}