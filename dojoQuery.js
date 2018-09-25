function $Dojo(id) {
    this.id = document.getElementById(id);
    this.click = function (callback) {
        this.id.addEventListener("click", callback);
    };

    this.hover = function (hovIn, hovOut) {
        this.id.addEventListener("mouseover", hovIn);
        this.id.addEventListener("mouseout", hovOut);
    };

    return this;
}