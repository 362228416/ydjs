/**
 * 缩放图片
 * qq: 362228416
 * email: zyluckstar@gmail.com
 */
(function($){
    $.fn.zoom = function(width, height){
        this.load(function(){
            var img = new Image();
            img.src = this.src;
            resize(this, img.width, img.height, width, height);
        });
        return this.each(function(){
            $(this).attr('src', $(this).data('src')).removeAttr('data-src');
        })
    }
    /**
     * 自动缩放图片
     * @param normal 如果为true则读取img标签的data-src属性, 为false则读取img的src属性，默认为false
     * @returns {*}
     */
	$.fn.autoZoom = function(normal){
        var srcAttr = 'src';
        if (normal) {
            srcAttr = 'data-src';
        }
        this.each(function(){
            var width = $(this).width();
            var height = $(this).height();
            $(this).find('img').load(function(){
                var img = new Image();
                img.src = this.src;
                resize(this, img.width, img.height, width, height);
            })
        });
        return this.find('img').each(function(){
            $(this).attr('src', $(this).attr(srcAttr));
        })
    }

    function resize(obj, w, h, width, height) {
        if (w>h){
            obj.height = (height + 10) * 1.2;
            obj.style.margin = "-10% 0 0 -25%";
        }else if(w==h){
            obj.height = (height + 10) * 1.2;
            obj.style.margin = "-10% 0 0 -10%";
        }else if(w<h) {
            obj.width = (width + 10) * 1.2;
            obj.style.margin = "-10% 0 0 -10%";
        }
        //
        if (w<$(obj).parent().width() && h<$(obj).parent().height()) {
            obj.width = $(obj).parent().parent().width();
            obj.height = $(obj).parent().parent().height();
            obj.style.margin = "0";
        }
    }
})($)
