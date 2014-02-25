/**
 * 缩放图片
 * qq: 362228416
 * email: zyluckstar@gmail.com
 */
(function($){
  $.fn.zoom = function(){
      this.load(function(){
          var img = new Image();
          img.src = this.src;
          resize(this, img.width, img.height);
      });
      return this.each(function(){
          $(this).attr('src', $(this).data('src')).removeAttr('data-src');
      })
  }

  function resize(obj, w, h) {
  	if (w>h){
  		obj.height = ($(obj).parent().height() + 10) * 1.2;
  		obj.style.margin = "-10% 0 0 -25%";
  	}else if(w==h){
  		obj.height = ($(obj).parent().height() + 10) * 1.2;
  		obj.style.margin = "-10% 0 0 -10%";
  	}else if(w<h) {
  		obj.width = ($(obj).parent().width() + 10) * 1.2;
  		obj.style.margin = "-10% 0 0 -10%";
  	}
  	//
  	if (w<$(obj).parent().width() && h<$(obj).parent().height()) {
  		obj.width = $(obj).parent().width();
  		obj.height = $(obj).parent().height();
  		obj.style.margin = "0";
  	}
  }
})($)
