/// <reference path="D:\web\Admin\web\layer/layer.js" />
layer.config({
    path: 'layer/skin/default/layer.css',
});


//msg提示 [string,int,int]
function msg() {
    var arg = arguments.length;
    var reg = new RegExp("^[0-9]*$");
    var op = arguments[1];
    var op2 = arguments[2];
    var syntax = "msg(content[必填],icon,time)\r\n";

    if (arg <= 0) {
        console.log(syntax + "%cerror:\"参数为空\"", "color:red;");
        return;
    }

    switch (arg) {
        case 1:
            layer.msg(arguments[0]);
            break;
        case 2:
            if (!reg.test(op)) {
                console.log(syntax + "%cerror:\"可选参数为正整数\"", "color:red;");
                return;
            }
            //图标
            if (op >= 0 && op <= 6) {
                layer.msg(arguments[0], { icon: arguments[1] });
            }
            //时间
            if (op >= 100) {
                layer.msg(arguments[0], { time: arguments[1] });
            }
            else {
                console.log(syntax + "%cerror:\"可选参数不正确 （icon:0-6 / time:大于等于100）\"", "color:red;");
            }
            break;
        case 3:
            if (!reg.test(op) || !reg.test(op2)) {
                console.log(syntax + "%cerror:\"可选参数为正整数\"", "color:red;");
                return;
            }
            if (op > 6) {
                console.log(syntax + "%cerror:\"图标只允许0-6\"", "color:red");
                return;
            }
            if (op2 < 100) {
                console.log(syntax + "%cerror:\"时间必须大于或等于100毫秒\"", "color:red;");
                return;
            }

            layer.msg(arguments[0], { icon: arguments[1], time: arguments[2] });
            break;
    }
}

//alert弹出层 [string,string,int]
function alert(content, title, icon) {
    var arg = arguments.length;
    if (arg = 0) {
        console.log("error:\"content参数为空\"");
        return;
    }
    layer.alert(content, { title: title || "提示", icon: icon || -1, move: false });
}

//confirm 询问层 [string,function,function]
function confirm(content, fun1, fun2) {
    if (content == null || content == "") {
        console.log("error:\"content参数为空\"");
        return;
    }
    layer.confirm(content,
        { btn: ["确定", "取消"], },
        fun1 || function () {
            layer.msg("什么都没有做");
        },
        fun2 || function () { }
    );
}

//iframe层 [string,string,string,string]
function dioag(url, title, width, height) {
    layer.open({
        type: 2,
        title: title,
        shade: 0.6,
        area: [width, height],
        content: url
    });
}

//关闭层
function close(index) {
    layer.close(index);
}
