$(document).ready(function() {
    $("#registerForm").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "firstName":{
                required: true,
            },
            "lastName":{
                required: true,
            },
            "email":{
                required: true,
                email: true
            },
            "userName": {
                required: true,
                maxlength: 15
            },
            "password": {
                required: true,
                minlength: 8
            },
            "confirmPassword": {
                equalTo: '#password',
                minlength: 8

            },
            "dateOfBirth":{},
            "gender":{},
            "tell":{
                phone: true
            },
            "address":{}
        },
        messages: {
            "firstName":{
                required: "Không được để trống trường này",
            },
            "lastName":{
                required: "Không được để trống trường này",
            },
            "email":{
                required: "Không được để trống trường này",
                email: "Không đúng định dạng"
            },
            "userName": {
                required: "Không được để trống trường này",
                maxlength: "Hãy nhập tối đa 15 ký tự"
            },
            "password": {
                required: "Không được để trống trường này",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
            "confirmPassword": {
                equalTo: "Mật khẩu xác nhận không chính xác",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
            "dateOfBirth":{},
            "gender":{},
            "tell":{
                number: "Không đúng định dạng"
            },
            "address":{}
        },
        submitHandler: function (form) {
            alert('valid form submitted');
            return false; // for demo
        }

    });
});

