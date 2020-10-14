document.addEventListener('DOMContentLoaded',function(){
	var nav = document.querySelector('.navbar-custom-menu');
	var menu = document.querySelector('.dropdown-menu');
	nav.onclick = function(){
		menu.classList.toggle('hiendanhsach');
    }
    //
    var icon = document.getElementsByClassName('treeview-name');
	for(var i = 0; i<icon.length; i++){
		icon[i].onclick = function(){
			if(this.classList[1] === 'nenxanh'){
				this.classList.remove('nenxanh');
			}
			else{
				for(var k =0; k<icon.length; k++){
					icon[k].classList.remove('nenxanh');
				}
				this.classList.toggle('nenxanh');
			}
		}
	}
}, false);