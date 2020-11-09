$(function () {
    $('#featured_slide').after('<div id="fsn"><ul id="fs_pagination">').cycle({
        timeout: 5000, // 切换间隔时间
        fx: 'fade', // 且换效果           
        pager: '#fs_pagination', // 指定页码元素，如多图片滚动时那个数字序号条
        pause: 0, // 决定鼠标指上去时是否暂停
        pauseOnPagerHover: 0 // 鼠标指向页码区时暂停切换
    });
});