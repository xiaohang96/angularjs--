var items=[
{
	id:'1',
	name:'蜂蜜',
	price:30.00
},
{
	id:'2',
	name:'水果',
	price:15.8
},
{
	id:'3',
	name:'饮料',
	price:15.88
},
{
	id:'4',
	name:'家电',
	price:29.9
},
{
	id:'5',
	name:'视频',
	price:1.23
},
{
	id:'6',
	name:'被子',
	price:8.32
}
];
var boughtlist={};
//定义控制器
var myapp=angular.module('myapp',[]);
myapp.controller('myctrl',function($scope){
//传入参数
	$scope.items=items;
	$scope.boughtlist=boughtlist;
	$scope.total=0;
//获取总价，每次刷新
	function gettotal(){
		total=0;
		for(var k in boughtlist){
           if(boughtlist[k]){
           	if(boughtlist[k].num<=0){
           		boughtlist[k].num=0;
           	}
           	total+=boughtlist[k].num*boughtlist[k].price;
           }
		}
		return total;
	}
//点击购买
	$scope.buy=function($event){
		var el=$event.target;
		var id=el.getAttribute('item-id');
		if(boughtlist[id]){
			boughtlist[id].num+=1; 
		}  
		else{
			var arr=[];
			arr.name = el.getAttribute('name');
	        arr.price = el.getAttribute('price');
	        arr.num = 1;   
            arr.id = id;             
            boughtlist[id] = arr;
		}
		$scope.total=gettotal();
	}
//点击删除
	$scope.delitem=function($event){
		var li=$event.target.parentNode;
		li.parentNode.removeChild(li);
		var id=$event.target.getAttribute('item-id');
		if(boughtlist[id])
		{
			delete boughtlist[id];
		}
		$scope.total=gettotal();
	}
//改变num，三种方式
	$scope.changenum = function($event,num){   
		var id; 
		if(typeof $event == 'string'){
			id = $event;
		}
		else{
			id = $event.target.parentNode.getAttribute('item-id');  
		}                            
		boughtlist[id].number = num;
		$scope.total = gettotal();               
	}             
       
});