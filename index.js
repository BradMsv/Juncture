var homeBut = document.getElementById("homeBut"),
	display = document.getElementById("display"),
	app = document.getElementById("app"),
	appDisp = document.getElementById("appDisp"),
	loading = document.getElementById("loading"),
	mainMenu = document.getElementById("mainMenu"),
	settingsBut = document.getElementById("settingsBut"),
	settingsPage = document.getElementById("settingsPage"),
	favesBut = document.getElementById("favesBut"),
	favesPage = document.getElementById("favesPage"),
	backToMain = document.getElementById("backToMain");

function show(x) {
	x.style.zIndex = "1"
	x.style.opacity = "1"
}

function hide(x) {
	x.style.zIndex = "-1"
	x.style.opacity = "0"
}

app.addEventListener("click", function(){
	show(loading)
	setTimeout(function(){ show(appDisp); }, 3000);
	setTimeout(function(){ show(mainMenu); }, 3000);
	setTimeout(function(){ hide(loading); }, 4500);
		
});

homeBut.addEventListener("click", function(){
	hide(settingsPage)
	hide(appDisp)
	hide(favesPage)
});

settingsBut.addEventListener("click", function(){
	hide(mainMenu)
	hide(favesPage)
	show(settingsPage)
});

backToMain.addEventListener("click", function(){
	hide(settingsPage)
	hide(favesPage)
	show(mainMenu)
});

favesBut.addEventListener("click", function(){
	hide(settingsPage)
	hide(mainMenu)
	show(favesPage)
});