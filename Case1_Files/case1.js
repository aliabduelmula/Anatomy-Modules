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
						<a href ="case1.html"> Case 1 </a><br> 
						<a href ="../Case2_Files/case2.html"> Case 2 </a><br> 
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
		<h3> CASE 1 </h3>
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

var woundCategories=["Wound contamination", "Wound colonization", "Critical colonization", "Wound infection", "Bioburden", "Biofilm", "Bacterial synergy", "Quorum sensing"];
var woundDefinitions=["The presence of bacteria within a wound in the absence of a host reaction",
"The presence of bacteria within a wound that multiply or cause a host reaction without resulting in any harm to the host. This is a normal microbiological state of all chronic healing wounds during which there is a balance between the growth and death of bacteria.",
"Bacterial multiplication resulting in delayed wound healing and is often associated with worsening of pain without any host reaction. This stage occurs between colonization and infection, during which there is imbalance between bacterial growth and  host resistance.",
"Multiplication and deposition of bacteria that invade the tissue and yield a host reaction, resulting in to nonhealing or a decline in the wound. Infected wounds elicit classic signs and symptoms of infections.",
"The number of bacteria present",
"Biofilm refers to the slime that encases the communities of bacteria attached to unstable wound surfaces. This provides protection against phagocytes, antibiotics and antimicrobials. Biofilms can result in local infections or weaken the collagen matrix in a recently healed wound, leading to re-ulceration of wound.",
"The process in which agents work together to optimize the function and effect of each other.",
"The action in which microorganisms communicate within a group of organisms, allowing them to coordinate their activities and optimize their capacity to cause disease."];

var inflamConditions=["Allergic contact dermatitis", "Erythematous maceration", "Pressure injury-related proinflammatory hypoxic changes", "Vasculitic wounds", "Pyoderma gangrenosum"];
var inflamDefinitions=["This is an allergic inflammatory skin reaction as a result of contact with an irritating material. It is characterized by redness, inflammation, pruritis and blistering.",
"This is a chronic inflammatory irritation of the skin surrounding the wound. Serous exudate causes a shiny appearance on the surface of the skin.",
"These changes can occur over a pressure point. While the pathogenesis of such changes is unknown, common theories include oxygen deficiency or metabolic release from anoxic tissue.",
"This is a cutaneous manifestation of an inflammatory disease, which affects the cutaneous blood vessels and causes reddish/purple painful wounds. Inflammatory conditions include calciphylaxis, rheumatoid arthritis, scleroderma, polyarteritis nodosa and lupus erythematosus.",
"This is a dermatological condition in which tissues become necrotic, leading to deep wounds mainly in the lower extremities. The wounds are initially characterized by papules or blisters, but later become larger painful necrotic wounds with irregular raised borders and purulent ulcers."];
function addWords(elementID){
	var numWords=0;
	if (elementID.localeCompare('wound') == 0){
		numWords=woundCategories.length; 
	}
	
	else if (elementID.localeCompare('differential') == 0){
		numWords=inflamConditions.length; 
	}
	
	// Get the div you want to add element to
	var currDiv = $('#'+elementID+'');
	// Loop through images and add them to target div
	for (var i=1; i <= numWords; i++) {
		if (elementID.localeCompare('wound') == 0){
			var element = '<button type="button" class="collapsible secondcollapse">'+woundCategories[i-1]+'</button><div class="content"><p>'+woundDefinitions[i-1]+'</p></div>';
		}
		
		if (elementID.localeCompare('differential') == 0){
			var element = '<button type="button" class="collapsible secondcollapse">'+inflamConditions[i-1]+'</button><div class="content"><p>'+inflamDefinitions[i-1]+'</p></div>';
		}
		currDiv.append(element);
	}
}

function showExplanation(elementID){
	document.getElementById(elementID).style.display='block';
}


function btnfn(filename) 
{ 
	window.open(filename,"_self");
}

var correctAns=[4, 3, 2, 3]; 
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