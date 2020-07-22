use actix_web::{web, App, HttpResponse, HttpServer, Responder, http};
use listenfd::ListenFd;
use actix_files::Files;
use actix_cors::Cors;
use dotenv::dotenv;
use std::env;
use sqlx::PgPool;
use anyhow::Result;

#[macro_use]
extern crate validator_derive;
extern crate validator;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

mod controllers;
mod models;

//     "export": "next export -o ../backend/src/views"

#[actix_rt::main]
async fn main() -> Result<()> {
    dotenv().ok();
    let mut listenfd = ListenFd::from_env();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    let db_pool = PgPool::new(&database_url).await?;

    let mut server = HttpServer::new(move || {
        App::new()
            .data(db_pool.clone()) // pass database pool to application so we can access it inside handlers
            .wrap(
                Cors::new() // <- Construct CORS middleware builder
                .allowed_methods(vec!["GET", "POST"])
                .allowed_header(http::header::ACCESS_CONTROL_ALLOW_ORIGIN)
                .allowed_header(http::header::ACCESS_CONTROL_ALLOW_HEADERS)
                .finish()
            )
            .route("/about", web::get().to(controllers::about::about))
            .route("/signin", web::get().to(controllers::sign_in::get_signin))
            .route("/api/signin", web::post().to(controllers::sign_in::post_signin))
            .route("/signup", web::get().to(controllers::sign_up::get_signup))
            .route("/api/signup", web::post().to(controllers::sign_up::post_signup))
            .route("/", web::get().to(controllers::home::index))
            .service(Files::new("/", "./src/views").show_files_listing()) // needs this to find FE files
    });

    server = match listenfd.take_tcp_listener(0)? {
        Some(listener) => server.listen(listener)?,
        None => {
            let host = env::var("HOST").expect("HOST is not set in .env file");
            let port = env::var("PORT").expect("PORT is not set in .env file");
            server.bind(format!("{}:{}", host, port))?
        }
    };

    server.run().await?;

    Ok(())
}


