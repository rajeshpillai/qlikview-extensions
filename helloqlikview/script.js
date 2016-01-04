Qv.AddExtension("tekacademy/helloqlikview", function(){
	// Inside the extension "this" points to the extension object
	this.Element.innerHTML = "<marquee>Hello Qlik Extension</marquee>";
});