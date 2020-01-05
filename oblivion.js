$.fn.src = function(args) {
    if (args == undefined) {
        var element_src = $(this).attr('src');

        if (element_src == undefined) {
            return 'Unsupported Object';
        }else{
            return element_src;
        }
    }else{
        $(this).prop('src', args);
        return true;
    }
};
 

$.fn.disabled = function(args) {
    var element_attr = $(this).attr('disabled');
    if (args == undefined) {

        if (element_attr == undefined) {
            return false;
        }else{
            return true;
        }
    }else if(args == 'true'){
        $(this).prop('disabled', args);
        return true;
    }else if(args == 'false') {
        $(this).removeAttr('disabled');
    }else if(args == 'toggle') {
        if (element_attr == undefined) {
            $(this).prop('disabled', args);
        } else {
            $(this).removeAttr('disabled');
        }
    }
};

$.fn.reload = function() {
    window.location.reload();
};

$.fn.url = function(args) {
    if (args == undefined) {
        return window.location.href;
    }else{
        window.location.assign(args);
    }
};

$.fn.getContent = function(args) {
    var object = this;
    $.get(args, function (data) {
        $(object).html(data);
    });
};