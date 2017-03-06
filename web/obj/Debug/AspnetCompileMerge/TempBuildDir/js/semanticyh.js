
//自己建的方便使用semanticyh
//下代码部分源于menu.js--后添的

	function semanticyhMenu(xzq){	  
	  var  $dropdownItem = $(xzq+'.menu .dropdown .item'),
	    $popupItem    = $(xzq+'.popup.example .browse.item'),
	    $menuItem     = $(xzq+'.menu a.item, .menu .link.item').not($dropdownItem),
	    $dropdown     = $(xzq+'.menu .ui.dropdown'),
	    // alias
	    handler = {
	
	      activate: function() {
	        if(!$(this).hasClass('dropdown browse')) {
	          $(this)
	            .addClass('active')
	            .closest('.ui.menu')
	            .find('.item')
	              .not($(this))
	              .removeClass('active')
	          ;
	        }
	      }
	
	    }
	  ;
	
	  $dropdown
	    .dropdown({
	      on: 'hover'
	    })
	  ;
	
	  $('.main.container .ui.search')
	    .search({
	      type: 'category',
	      apiSettings: {
	        action: 'categorySearch'
	      }
	    })
	  ;
	
	  $('.school.example .browse.item')
	    .popup({
	      popup     : '.admission.popup',
	      hoverable : true,
	      position  : 'bottom left',
	      delay     : {
	        show: 300,
	        hide: 800
	      }
	    })
	  ;
	
	  $popupItem
	    .popup({
	      inline   : true,
	      hoverable: true,
	      popup    : '.fluid.popup',
	      position : 'bottom left',
	      delay: {
	        show: 300,
	        hide: 800
	      }
	    })
	  ;
	
	  $menuItem.on('click', handler.activate);

	};
	
	/*
	使用例:
	<div class="ui vertical pointing menu abc">
	  <a class="item active">Home </a>
	  <a class="item">Messages </a>
	  <a class="item">Friends </a>
	</div>	
	
	<script>	
	(function(){  
		//自定义的初始化
		semanticyhMenu(".abc");
 
	 * */
