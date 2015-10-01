web_server_conf = {
    'port' : 8080,
    'host' : 'localhost'
}

# Start the web server, with the config we defined above
import vertx

vertx.deploy_verticle('web-server', web_server_conf)