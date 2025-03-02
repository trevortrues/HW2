document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".ingredient").forEach(item => {
        item.addEventListener("mouseenter", function(event) {
            let tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerText = this.getAttribute("data-info");
            document.body.appendChild(tooltip);

            tooltip.style.position = "absolute";
            tooltip.style.left = event.pageX + 10 + "px";
            tooltip.style.top = event.pageY + 10 + "px";
            tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "8px";
            tooltip.style.borderRadius = "5px";
            tooltip.style.fontSize = "14px";
            tooltip.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)";
            tooltip.style.zIndex = "1000";
            tooltip.style.pointerEvents = "none"; 
            tooltip.setAttribute("id", "active-tooltip");
        });

        item.addEventListener("mousemove", function(event) {
            let tooltip = document.getElementById("active-tooltip");
            if (tooltip) {
                tooltip.style.left = event.pageX + 10 + "px";
                tooltip.style.top = event.pageY + 10 + "px";
            }
        });

        item.addEventListener("mouseleave", function() {
            let tooltip = document.getElementById("active-tooltip");
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
