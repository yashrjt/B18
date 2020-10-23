$.validator.addMethod('alphabets',function(value){
return /^[A-Za-z]+$/.test(value);
})


$('#accountForm').validate({
    rules:{
        name:{
            required:true,
            minlength:2,
            alphabets:true
        },
        email:{
            required:true
        },
        pwd:{
            required:true
        },
        cpwd:{
            required:true
        }
    },
    messages:{
        name:{
            required:'Name is a required field',
            minlength:'Name must be minimum 2 characters',
            alphabets:'Please enter only alphabets for name'
        },
        email:{
            required:'Email is a required field',
        },
        pwd:{
            required:'Password is a required field',
        },
        cpwd:{
            required:'Confirm password is a required field',
        }
    },
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