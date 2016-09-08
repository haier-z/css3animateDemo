// JavaScript Document
/*zl2015-6-4*/
var scrollFunc = function (e) {
        var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时;
				_checknow(1);
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时);
			   _checknow(2);
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail< 0) { //当滑轮向上滚动时;
				_checknow(1);
            }
            if (e.detail> 0) { //当滑轮向下滚动时
				_checknow(2);
            }
        }
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
	setTimeout(function(){
		$("#JS_stage_0").addClass("stage-in");
		},100);
	var _index = 0;
	var _nav = $("#JS_nav").find("li");
	var flag = false;
	setTimeout(function(){
		flag = true;
		},100);
	function _checknow(up){
		if(up == 1 && flag){
			switch(_index){
				case 1:
					flag = false;
					$("#JS_stage_1").removeClass("stage-in").removeClass("stage-in-out");
					_stag_0_goin(2500);
					break;
				case 2:
					flag = false;
					$("#JS_stage_2").removeClass("stage-in").removeClass("stage-in-out");
					_stag_1_goin(3000);
					break;
				case 3:
					flag = false;
					$("#JS_stage_3").removeClass("stage-in-out");
					_stag_2_goin(500);
					break;
				case 4:
					flag = false;
					$("#JS_stage_4").removeClass("stage-in").removeClass("stage-in-out");
					_stag_3_goin(500);
					break;
				case 5:
					flag = false;
					$("#JS_stage_5").removeClass("stage-in");
					_stag_4_goin(1000);
					break;
				}
			}else if(up == 2 && flag){
				switch(_index){
				case 0:
					flag = false;
					$("#JS_stage_0").removeClass("stage-in");
					_stag_1_goin(2500);
					break;
				case 1:
					flag = false;
					$("#JS_stage_1").removeClass("stage-in").removeClass("stage-in-out");
					_stag_2_goin(2500);
					break;
				case 2:
					flag = false;
					$("#JS_stage_2").removeClass("stage-in").removeClass("stage-in-out");
					_stag_3_goin(3000);
					break;
				case 3:
					flag = false;
					$("#JS_stage_3").removeClass("stage-in-out");
					_stag_4_goin(0);
					break;
				case 4:
					flag = false;
					$("#JS_stage_4").removeClass("stage-in").removeClass("stage-in-out");
					_stag_5_goin(0);
				}
				
			}
		}
	function _navChange(indexT){
		_nav.removeClass("now");
		_nav.eq(indexT).addClass("now");
		}
	function _stag_0_goin(delayTime){
		_navChange(0);
		setTimeout(function(){
			$("#JS_stage_0").addClass("stage-in");
			_index = 0;
			flag = true;
			},delayTime);
		}
	function _stag_1_goin(delayTime){
		_navChange(1);
		setTimeout(function(){
			$("#JS_stage_1").addClass("stage-in").addClass("stage-in-out");
			_index = 1;
			flag = true;
			},delayTime);
		}
	function _stag_2_goin(delayTime){
		_navChange(2);
		setTimeout(function(){
			$("#JS_stage_2").addClass("stage-in").addClass("stage-in-out");
			_index = 2;
			flag = true;
			},delayTime);
		}
	function _stag_3_goin(delayTime){
		_navChange(3);
		setTimeout(function(){
			$("#JS_stage_3").addClass("stage-in").addClass("stage-in-out");
			},delayTime);
		setTimeout(function(){
			$("#JS_stage_3").removeClass("stage-in");
			_index = 3;
			flag = true;
			},delayTime + 500);
		}
	function _stag_4_goin(delayTime){
		_navChange(4);
		setTimeout(function(){
			$("#JS_stage_4").addClass("stage-in");
			},delayTime);
		setTimeout(function(){
			$("#JS_stage_4").addClass("stage-in-out");
			_index = 4;
			flag = true;
			},delayTime + 500);
		}
	function _stag_5_goin(delayTime){
		_navChange(5);
		setTimeout(function(){
			$("#JS_stage_5").addClass("stage-in");
			_index = 5;
			flag = true;
			},delayTime);
		}
	function _chooseFun(_num,delay){
		switch (_num){
			case 0 :
				_stag_0_goin(delay);
				break;
			case 1 :
				_stag_1_goin(delay);
				break;
			case 2 :
				_stag_2_goin(delay);
				break;
			case 3 :
				_stag_3_goin(delay);
				break;
			case 4 :
				_stag_4_goin(delay);
				break;
			case 5 :
				_stag_5_goin(delay);
				break;
			}
		}
	_nav.click(function(){
		if(!$(this).hasClass("now") && flag){
			flag = false;
			var _now = $(this).index();
			switch ($("#JS_nav").find("li.now").index()){
				case 0:
					$("#JS_stage_0").removeClass("stage-in");
					_chooseFun(_now,2500);
					break;
				case 1:
					$("#JS_stage_1").removeClass("stage-in").removeClass("stage-in-out");
					_chooseFun(_now,2500);
					break;
				case 2:
					$("#JS_stage_2").removeClass("stage-in").removeClass("stage-in-out");
					_chooseFun(_now,3000);
					break;
				case 3:
					$("#JS_stage_3").removeClass("stage-in-out");
					_chooseFun(_now,0);
					break;
				case 4:
					$("#JS_stage_4").removeClass("stage-in").removeClass("stage-in-out");
					_chooseFun(_now,0);
					break;
				case 5:
					$("#JS_stage_5").removeClass("stage-in");
					_chooseFun(_now,1000);
					break;
				}
			}
		});