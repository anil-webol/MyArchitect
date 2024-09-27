// Main project overview object that initializes different charts and tables
var ProjectOverviewModule = (function () {
    // Retrieve CSS variables for theme colors and store them in readable names
    var themeBlack = KTUtil.getCssVariableValue("--bs-theme-black"),
        themeBlackLight = KTUtil.getCssVariableValue("--bs-theme-black-light"),
        themeLight = KTUtil.getCssVariableValue("--bs-light"),
        themeLightAlt = KTUtil.getCssVariableValue("--bs-theme-light"),
        gridLineColor = KTUtil.getCssVariableValue("--bs-gray-200"),
        axisLabelColor = KTUtil.getCssVariableValue("--bs-gray-500");
        
    return {
        // Initialize the charts and tables when called
        init: function () {
            var chartContainer, chartHeight;
            
            // Doughnut chart for project progress
            (function () {
                var progressCanvas = document.getElementById("project_progress_week1");
                if (progressCanvas) {
                    var chartContext = progressCanvas.getContext("2d");
                    new Chart(chartContext, {
                        type: "doughnut",
                        data: { 
                            datasets: [{
                                data: [26, 23, 1, 12, 7], // Project progress data
                                backgroundColor: ["#dbdfe9", "#99a1b7", "#4b5675", "#282728B"] // Segment colors
                            }],
                            labels: [
                                "Preparation & Survey", 
                                "Design & Planning", 
                                "Technical & Tender", 
                                "Builder Chosen / Site-prep", 
                                "On-site / Project assistance"
                            ] // Labels for each segment
                        },
                        options: {
                            chart: { fontFamily: "inherit" },
                            cutout: "75%", // The inner radius of the doughnut
                            responsive: true,
                            maintainAspectRatio: false, // Responsive size
                            animation: { animateScale: true, animateRotate: true }, // Animation settings
                            tooltips: {
                                enabled: true,
                                intersect: false,
                                mode: "nearest",
                                backgroundColor: "#20D489", // Tooltip background color
                                titleFontColor: "#ffffff", // Tooltip title color
                                displayColors: false,
                                cornerRadius: 4,
                            },
                            plugins: { legend: { display: false } } // Hide the chart legend
                        }
                    });
                }
            })(),
            
           
            
            // Data table functionality for the project overview
            (function () {
                
            })();
        }
    };
})();

// Initialize the project overview when the DOM is fully loaded
KTUtil.onDOMContentLoaded(function () {
    ProjectOverviewModule.init();
});
