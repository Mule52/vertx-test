var Router = require("vertx-web-js/router");

var router = Router.router(vertx);

router.route().handler(function (routingContext) {

    // debugging seems to work for JS only with locals that you console.log first.
    var a1 = "this is a1";
    var b1 = "this is b1";
    var c1 = "this is c1";
    console.log(routingContext);

    console.log(a1);
    console.log(c1);
    //console.log(test2);

    console.log("inside the route handler");
    routingContext.response().putHeader("content-type", "text/html").end("Hello World!--------");
});

vertx.createHttpServer().requestHandler(router.accept).listen(8080);
