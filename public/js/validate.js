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