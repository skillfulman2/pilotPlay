function pullTweetFromUser(user, callback) {
    var url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + user + "&count=1";
    $.getJSON(url, function(data) {
        callback(data[0]);
    });
}

function makeBarGraph(data, selector) {
    var barGraph = new BarGraph(selector, data);
    barGraph.draw();
}

function makePieGraph(data, selector) {
    var pieGraph = new PieGraph(selector, data);
    pieGraph.draw();
}

function makeLineGraph(data, selector) {
    var lineGraph = new LineGraph(selector, data);
    lineGraph.draw();
}

function makeDonutGraph(data, selector) {
    var donutGraph = new DonutGraph(selector, data);
    donutGraph.draw();
}



// Make a bar graph
function BarGraph(selector, data) {
    this.selector = selector;
    this.data = data;
    this.margin = {top: 20, right: 20, bottom: 30, left: 40};
    this.width = $(selector).width() - this.margin.left - this.margin.right;
    this.height = $(selector).height() - this.margin.top - this.margin.bottom;
    this.x = d3.scale.ordinal().rangeRoundBands([0, this.width], .1);
    this.y = d3.scale.linear().range([this.height, 0]);
    this.xAxis = d3.svg.axis().scale(this.x).orient("bottom");
    this.yAxis = d3.svg.axis().scale(this.y).orient("left").ticks(10);
    this.chart = d3.select(selector).append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
}

