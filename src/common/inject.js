// ==UserScript==
// @name ChristmasTree
// @include http://*
// @include https://*
// @require jquery-1.11.1.min.js
// ==/UserScript==

var form = "<form style='display: inline;' method='GET' action='http://23.99.112.114:5000/create'>" +
	"<input type='hidden' value='dio' name='name' class='form-control' style='display: inline;'>" +
	"<input type='hidden' value='blr1' name='region' class='form-control' style='display: inline;'" +
	"<input type='hidden' value='512mb' name='size' class='form-control' style='display: inline;'>" +
	"<input type='hidden' name='giturl' id='giturl'>" +
	"<input class='form-control' type='hidden' id='token' name='token'>"+
	"<button id='submit' class='btn btn-sm btn-primary js-menu-target' type='submit'>OctoShark! Deploy</button><br>"+
	"</form>";


function insertBadge(){
	console.log("Inserting Badge!");
	$("#readme").prepend(form);
	$("#giturl").val(window.location + '.git');
	$("#token").val(kango.storage.getItem('do_manager_auth_token'));
}

// ----------------------------------------------------------
// This part of the script triggers when page is done loading
console.log("Hello. This message was sent from scripts/inject.js");
// ----------------------------------------------------------

var links = [];
$('a').each(function() {
   var href = this.href;
   // now process with the href as you wish      

   if(href.indexOf("Dockerfile")!=-1){

   	links.push(href);

 	 }
});

if(links.length >= 1){
	insertBadge();
}