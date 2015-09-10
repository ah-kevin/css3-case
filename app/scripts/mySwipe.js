/**
 *Created by WebStorm.
 *User: Lennon
 *Date: 15/9/10
 *File: mySwipe
 */
/**
 *
 *
 */
function Swipe(container){
    //获取第一个子节点
    var element = container.find(":first");
    //滑动对象
    var swipe={};

    //li页面的数量
    var slides = element.find("li");
    //获取容器尺寸
    var width = container.width();
    var height = container.height();
    //设置li页面的总宽度
    element.css({
        width: (slides.length * width) + "px",
        height: height + "px"
    });
    //设置每一个页面的宽度
    $.each(slides, function (index) {
        var slide = slides.eq(index);
        slide.css({
            width: width + "px",
            height: height + "px"
        });
    });
    //监控完成与移动
    swipe.scrollTo= function (x, speed) {
        //执行动画移动
        element.css({
                'transition-timing-function': 'linear',
                'transition-duration': speed+'ms',
                'transform': 'translate3d(-' + x+ 'px,0px,0px)' //设置页面X轴移动
        });
        return this;
    };
    return swipe;
}