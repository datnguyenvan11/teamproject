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
        children: {
            required: true,
        },
        trenho: {
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
        children: {
            required: '* ',
        },
        trenho: {
            required: '* ',
        },

        usernumber: {
            required: '* ',
        },
    }
});
