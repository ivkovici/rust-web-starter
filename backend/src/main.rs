use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use listenfd::ListenFd;
use actix_files::Files;

mod controllers;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let mut listenfd = ListenFd::from_env();
    let mut server = HttpServer::new(|| {
        App::new()
            .route("/api/response", web::get().to(controllers::main::response))
            .route("/again", web::get().to(controllers::main::index2))
            .service(Files::new("/", "./frontend/build/").index_file("index.html"))
            //.service(Files::new("/meh", "./frontend/build/").index_file("index.html"))
            /*.service(web::scope("/meh").default_service(
                Files::new("/", "./frontend/build/")
                    .index_file("index.html")
                    .use_last_modified(true),
            ),)*/
    });

    server = if let Some(l) = listenfd.take_tcp_listener(0).unwrap() {
        server.listen(l)?
    } else {
        server.bind("127.0.0.1:8088")?
    };

    server.run().await
}


