use actix_web::{web, App, HttpResponse, HttpServer, Responder, http};
use listenfd::ListenFd;
use actix_files::Files;
use actix_cors::Cors;

mod controllers;

//     "export": "next export -o ../backend/src/views"

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    let mut listenfd = ListenFd::from_env();
    let mut server = HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::new() // <- Construct CORS middleware builder
                .allowed_methods(vec!["GET", "POST"])
                .allowed_header(http::header::ACCESS_CONTROL_ALLOW_ORIGIN)
                .allowed_header(http::header::ACCESS_CONTROL_ALLOW_HEADERS)
                .finish()
            )
            .route("/api/response", web::get().to(controllers::main::response))
            .route("/again", web::get().to(controllers::main::index2))
            .route("/about", web::get().to(controllers::main::about))
            .route("/signin", web::get().to(controllers::main::get_signin))
            .route("/api/signin", web::post().to(controllers::main::post_signin))
            .route("/api/signin", web::get().to(controllers::main::post_signin))
            .route("/signup", web::get().to(controllers::main::get_signup))
            .route("/api/signup", web::post().to(controllers::main::post_signup))
            .route("/shop", web::get().to(controllers::main::index))
            .route("/", web::get().to(controllers::main::index))
            .service(Files::new("/", "./src/views").show_files_listing()) // needs this to find FE files
    });

    server = if let Some(l) = listenfd.take_tcp_listener(0).unwrap() {
        server.listen(l)?
    } else {
        server.bind("127.0.0.1:8088")?
    };

    server.run().await
}


