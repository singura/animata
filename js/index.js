$(function(){
    $('#fullpage').fullpage({
        verticalCentered:false,
        navigation:true,
        loopBottom:true,
        loopTop:true,
        onLeave:function(index,nextIndex,direction){
            if(nextIndex == 1){
                $(".qq_bg").removeClass("qq_bg_rotate");
            }else{
                $(".qq_bg").addClass("qq_bg_rotate");
            }
            //离开第一屏的时候
            if(index == 1){
                $(".s1_main").addClass("s1_main_begin");
            }
            //离开第二屏的时候
            if(index == 2 ){
                $(".s2_main").addClass("s2_main_end");
                setTimeout(function(){
                    $(".s2_main").css("transition","none");
                    $(".s2_main").removeClass("s2_main_end");
                    $(".s2_main").addClass("s2_main_begin");
                },1000)
            }
            //离开第三屏的时候
            if(index == 3){
                $(".s3_main").addClass("s3_main_begin");
            }
            //离开第四屏的时候
            if(index == 4){
                $(".s4_main").addClass("s4_main_end");
                setTimeout(function(){
                    $(".s4_main").removeClass("s4_main_end");
                    $(".s4_main").addClass("s4_main_begin");
                },1000)
            }
        },
        afterLoad:function(linkName,index){
            // 第一屏加载好之后
            if(index == 1){
                $(".s1_main").removeClass("s1_main_begin");
            }
            // 第二屏加载好之后
            if(index == 2){
                $(".s2_main").css("transition","transform 1s");
                $(".s2_main").removeClass("s2_main_begin");
            }
            // 第三屏加载好之后
            if(index == 3){
                $(".s3_main").removeClass("s3_main_begin");
            }
            // 第四屏加载好之后
            if(index == 4){
                setTimeout(function(){
                    $(".s4_main").removeClass("s4_main_begin");
                },200)
            }
        },        
    });
});