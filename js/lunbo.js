var carousel ={
    dom:{},
    index: 0,
    timer:null,
    flag: false,
    init: function(){
        this.initDom();
        this.bindEvent();
        this.timer = setInterval(function(){
            if(!carousel.flag){
              carousel.changePic();
            }
        },3000)
    },
    //初始化
    initDom: function(){
        var dom = this.dom;
        dom.banner = $('.banner');
        dom.oLi = $('.bPicv3 li');
        dom.btn = $('.tabNum li');
        dom.prev = $('.prevv3');
        dom.next = $('.nextv3');
    },
    //绑定事件
    bindEvent: function(){
        var dom = this.dom;
        dom.btn.click(function(){
            carousel.flag = true;
            var index = $(this).index();
            carousel.index = index;
            dom.oLi.hide();
            dom.oLi.eq(index).show();
            dom.btn.removeClass('active');
            dom.btn.eq(index).addClass('active');
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })
        //鼠标移上上去按钮显示
        dom.banner.mouseover(function() {
            dom.prev.show();
            dom.next.show();
        });
        //鼠标移开上去按钮隐藏
        dom.banner.mouseout(function(){
            dom.prev.hide();
            dom.next.hide();
        })
        //上一张
        dom.prev.click(function(){
            carousel.flag = true;
            if(carousel.index == 0){
                carousel.index = dom.oLi.length - 2;
            }else{
               carousel.index -= 2;
            }
            carousel.changePic();
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })
        //下一张
        dom.next.click(function(){
            carousel.flag = true;
            carousel.changePic();
            setTimeout(function(){
                carousel.flag = false;
            },3000)
        })

    },
    //大图移动
    changePic: function(){
        var dom = this.dom;
        this.index++;
        if(this.index >= dom.oLi.length){
            this.index = 0;
        }
        dom.oLi.hide();
        dom.btn.removeClass('active');
        dom.oLi.eq(this.index).show();
        dom.btn.eq(this.index).addClass('active');
    }
}
$(function(){
    carousel.init();
})
