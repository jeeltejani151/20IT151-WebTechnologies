window.onload =function change_color() {
    var color=['blue','green','violet','darkgrey','red','orange','yellow','darkcyan','darkorange'];
    document.body.style.background=color[Math.floor(Math.random()*color.length)]
}

