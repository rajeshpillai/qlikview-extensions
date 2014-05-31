Qva.AddExtension('TekAcademy/HTMLPage', function() {
// Set the HTML
var _this = this;
var frameTag = "<iframe src='"
	+ _this.Layout.Text0.text
	+ "' style='height: "
	+ _this.GetHeight()
	+ "px; width: "
	+ _this.GetWidth()
	+ "px; margin: 0; padding: 0; border: none'></iframe>"
	_this.Element.innerHTML = frameTag;
},true);