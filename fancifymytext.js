function greet() {
    
	alert("Hello, World!");
}
function biggertext() {
    const text = document.getElementById("text-input");
    text.style.fontSize = "24px";
}
function moo() {
    const text = document.getElementById("textarea");
    let content = textarea.value;
    
    let sentences = content.split(".");

    sentences = sentences.map(sentence => sentence.trim() + "-Moo.");

    textarea.value = sentences.join(" ");
    
}

    

function applyStyle() {
	const fancy = document.getElementById("fancy");
	const boring = document.getElementById("boring");
	const text = document.getElementById("textarea");

	if (fancy.checked) {
		text.style.fontWeight = "bold";
		text.style.textDecoration = "underline";
		text.style.color = "blue";
	} else if (boring.checked) {
		text.style.fontWeight = "normal";
		text.style.textDecoration = "none";
		text.style.color = "black";
	}
}
document.getElementById("biggerButton").onclick = function() {
    biggertext();
    greet();
}