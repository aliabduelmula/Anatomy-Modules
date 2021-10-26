function loadSideBar(){  
	document.getElementById('side_bar').innerHTML=`
	<div class="left_col scroll-view">
		<div class="navbar nav_title" style="border: 0;">
			<a href="#" class="site_title"><i class="fa fa-book"></i> <span>Dermatology CBL</span></a>
		</div>

		<div class="clearfix"></div>

		<!-- menu profile quick info -->
		<!-- /menu profile quick info -->

		<br/>

		<!-- sidebar menu -->
		<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
			<div class="menu_section">
				<ul class="nav side-menu">
					<li>
						<a href ="../Home.html"> Home </a> 
						<a href ="../Case1_Files/case1.html"> Case 1 </a><br> 
						<a href ="case2.html"> Case 2 </a><br> 
						<a href ="case3.html"> Case 3 </a><br> 
						<a href ="case4.html"> Case 4 </a><br> 
						<a href ="case5.html"> Case 5 </a>
					</li>
				</ul>
			</div>


		</div>

	</div>`;   
}  


function loadTitle(){
	document.getElementById('page_title').innerHTML=`
	<div class="title_left">
		<h3> CASE 2 </h3>
	</div>
	
	<div class="title_right">
		<div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
			<div class="input-group">
			</div>
		</div>
	</div>`;
	
}

function collapseTabs(tabsClassName, elementName){
	var element = document.getElementById(elementName); 
	var coll = element.getElementsByClassName(tabsClassName);
	var i;
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display == "block") {
			  content.style.display = "none";
			  if (i == (coll.length)){
				coll[i-1].style.borderBottom="2px solid black";
			  }
			} else {
			  content.style.display = "block";
			  if (i == coll.length){
				coll[i-1].style.borderBottom="none";
				content.style.borderBottom="2px solid black"; 
			  }
			}
		});
	}
}

function showExplanation(elementID){
	document.getElementById(elementID).style.display='block';
}

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}



var correctAns=[1, 3, 3, 1]; 
function checkAns(elementID, QNum, feedbackID){
	var num = parseInt(QNum);
	var element=document.getElementById(elementID);
	var inputs=element.getElementsByClassName("radioBtn"); 
	var options=element.getElementsByClassName("option");
	var buttons=document.getElementsByClassName("quizSubmit");
	var i = 0; 
	for (i; i < inputs.length; i++){
		if (inputs[i].checked){
			break; 
		}
	}
	if (i == (correctAns[QNum-1] - 1)){
		options[i].style.backgroundColor = "#9cffd6"; 
		document.getElementById(feedbackID).innerHTML="Correct!"; 
		document.getElementById(feedbackID).style.fontSize="1.7em"; 
		buttons[QNum-1].style.display="none"; 
	}
	
	else{
		options[i].style.backgroundColor = "#ffa59c"; 
		var text="Incorrect, the correct answer is: " + inputs[correctAns[QNum-1] - 1].value; 
		document.getElementById(feedbackID).innerHTML=text; 
		document.getElementById(feedbackID).style.fontSize="1.7em"; 
		buttons[QNum-1].style.display="none"; 
		options[correctAns[QNum-1] - 1].style.backgroundColor = "#9cffd6"; 
	}
}