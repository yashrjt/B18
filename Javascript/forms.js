$('#accountForm').validate({
    submitHandler:function(){


        const formdata={
            name:$('#name').val(),
            email:$('#email').val(),
            password:$('#password').val(),
            passwordConfirm:$('#cPassword').val(),
        }
        console.log("formdata", formdata)
        
        $.ajax({
            method:'post',
            url:'http://localhost:8080/api/register',
            contentType:'application/json',
            data:JSON.stringify(formdata),
            success:(res)=>{
            console.log("res", res)
        
            },
            error:(err)=>{
            console.log("err", err)
                
            }
        
        })
    }
})