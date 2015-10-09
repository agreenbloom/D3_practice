
$(document).on('ready', function(){

      var dataset = [ 5, 10, 15, 20, 25 ];

      d3.select("body").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d){
          return d + "px";
        });

      // d3.select("body").selectAll("p")
      //   .data(dataset)
      //   .enter()
      //   .append("p")
      //   .text(function(d) {
      //     return "I can count up to " + d;
      //   })
      // .style("color", function(d){
      //   if (d > 15 ) {
      //     return "red";
      //   } else {
      //     return "black";
      //   }
      // });




})