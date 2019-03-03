var validator=$('#contactForm').validate({
    rules: {
        hoten: {
            required: true,

            maxlength: 100
        },
        email: {
            required: true,
            email: true
        },
        sdt: {
            required: true,
            maxlength: 10,
            minlength: 10,
        },
        noidung: {
            required: true,
        },

    },
    messages: {
        hoten: {
            required: '* nhập họ tên',
            maxlength: '* Ten qua dai ',
        },

        email: {
            required: "* nhập email",
            email: '* email đúng định dạng',

        },
        sdt: {
            required: '* nhập số điện thoại.',
            maxlength: '* nhập đúng {0} số',
            minlength: '* nhập đúng {0} số',
        },
        noidung: {
            required: '* nhập nội dung .',
        }

    },
});
var validato1r = $('#form3').validate({
    rules: {
        email: {
            required: true,
            email: true

        },

        name: {
            required: true,

        },
        phonenumber: {
            required: true,
            maxlength: 10,
            minlength: 10,
        },
        address: {
            required: true,
        },
        person: {
            required: true,
        },


        usernumber: {
            required: true,
        },
    },
    messages: {

        name: {
            required: '* nhập họ tên ',
        },
        email: {
            required: '* nhập email',
            email: '* nhập email đúng định dạng '

        },

        phonenumber: {
            required: '* nhập số điện thoại.',
            maxlength: '* ',
            minlength: '* ',
        },
        address: {
            required: '* Nhập địa chỉ',
        },
        person: {
            required: '* ',
        },

        usernumber: {
            required: '* ',
        },
    }
});

var validator1=$('#contactForm2').validate({
    rules: {
        hoten2: {
            required: true,

            maxlength: 100
        },
        email2: {
            required: true,
            email: true
        },
        noidung: {
            required: true,
        },

    },
    messages: {
        hoten2: {
            required: '* nhập họ tên',
            maxlength: '* Ten qua dai ',
        },

        email2: {
            required: "* nhập email",
            email: '* email đúng định dạng',

        },

        noidung: {
            required: '* nhập nội dung .',
        }

    },


});

var validator2 = $('#formcreate').validate({
    rules: {
        tourName: {
            required: true,


        },
        tourFId: {
            required: true,

        },
        tourImage: {
            required: true,
        },
        tourDayGo: {
            required: true,
        },
        tourTotalDay: {
            required: true,
        },
        tourPrice: {
            required: true,
        },
        tourNumberOfSeats: {
            required: true,
        },
        tourShortDescription: {
            required: true,
        },
        tourType: {
            required: true,
        },
        tourCategory: {
            required: true,
        },

        tourDateGo: {
            required: true,
        },
        tourDateGoCome: {
            required: true,
        },
        tourGoFlight: {
            required: true,
        },
        tourDateReturn: {
            required: true,
        },
        tourDateReturnCome: {
            required: true,
        },
        tourHotel: {
            required: true,
        },
        tourGuideName: {
            required: true,
        },
        tourGuideAddress: {
            required: true,
        },
        tourGuideTel: {
            required: true,
        }, tourFocusDay: {
            required: true,
        }, tourConcentratedPlace: {
            required: true,
        },


    },
    messages: {
        tourName: {
            required: '**',
        },
        tourFId: {
            required: '**',
        },
        tourImage: {
            required: '**',
        },
        tourDayGo: {
            required: '**',
        },
        tourTotalDay: {
            required: '**',
        },
        tourPrice: {
            required: '**',
        },
        tourNumberOfSeats: {
            required: '**',
        },
        tourShortDescription: {
            required: '**',
        },
        tourType: {
            required: '**',
        },
        tourCategory: {
            required: '**',
        },

        tourDateGo: {
            required: '**',
        },
        tourDateGoCome: {
            required: '**',
        },
        tourGoFlight: {
            required: '**',
        },
        tourDateReturn: {
            required: '**',
        },
        tourDateReturnCome: {
            required: '**',
        },
        tourHotel: {
            required: '**',
        },
        tourGuideName: {
            required: '**',
        },
        tourGuideAddress: {
            required: '**',
        },
        tourGuideTel: {
            required: '**',
        }, tourFocusDay: {
            required: '**',
        }, tourConcentratedPlace: {
            required: '**',
        },
    },


});

var validator3 = $('#registerForm').validate({
    rules: {
        firstName: {
            required: true,

            maxlength: 100
        },
        email: {
            required: true,
            email: true
        },
        lastName: {
            required: true,
        },
        password:{
            required:true
        },
        confirmPassword: {
            required: true,
            equalTo: "#password"

        },
        dateOfBirth: {
            required: true,
        },
        gender: {
            required: true,
        },
        tell: {
            required: true,
        },
        address: {
            required: true,
        },


    },
    messages: {
        firstName: {
            required: '*',

            maxlength:'max 100'
        },
        email: {
            required: '*',
            email: true
        },
        lastName: {
            required: '*',
        },
        password: {
            required: '*',
        },
        confirmPassword: {
            required: '*',
            equalTo: "khong khop"

        },
        dateOfBirth: {
            required: '*',
        },
        gender: {
            required: '*',
        },
        tell: {
            required: '*',
        },
        address: {
            required: '*',
        },

    }

});
var validator4=$('#registerFormlogin').validate({
    rules: {

        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
        },

    },
    messages: {


        email: {
            required: "* nhập email",
            email: '* email đúng định dạng',

        },

        password: {
            required: '* nhập password .',
        }

    },


});
