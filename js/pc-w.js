window.onload = function(){
	var oul=document.getElementById('ul')
    var oli=oul.getElementsByTagName('li')
    var obtn=document.getElementById('btn')
    var olis=obtn.getElementsByTagName('li')
    var ol=document.getElementById('left')
    var or=document.getElementById('right')
    var now=0;
    var key=0;
    olis[0].style.backgroundColor='red'
    for (var i = 0; i < olis.length; i++) {
    	olis[i].index=i
    	olis[i].onclick=function(){
            now=key=this.index
            show()
    	}
    }
    function next(){
    	now++;
    	if (now>olis.length-1) {
    		now=0
    	}
    	key++;
    	if (key>olis.length) {
    		key=1
    		oul.style.left=0
    	}
    	show()
    }
    var time=setInterval(next,2000)
    oul.onmouseover=function(){
    	clearInterval(time)
    }
    oul.onmouseout=function(){
    	time=setInterval(next,2000)
    }
    var time1=null
    function show(){
    	for (var i = 0; i < olis.length; i++) {
    		olis[i].style.backgroundColor=''
    	};
    	olis[now].style.backgroundColor='red'
    	var len=(-oli[0].offsetWidth)*key-oul.offsetLeft;
    	var start=oul.offsetLeft;
    	var count=20;
    	var a=0;
    	clearInterval(time1)
    	time1=setInterval(function(){
    		a++;
    		oul.style.left=start+len*a/count+'px';
    		if (a==count) {
    			clearInterval(time1)
    		}
    	},30)
    }
}
