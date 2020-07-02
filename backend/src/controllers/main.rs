use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use serde::{Deserialize, Serialize};

/*pub async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hellooooo world!")
}*/

#[derive(Serialize, Deserialize)]
struct MyObj {
    name: String,
}

pub async fn index() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/index.html")?)
}

/** Serving the frontend */
pub async fn about() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/web/about.html")?)
}

pub async fn index2() -> impl Responder {
    HttpResponse::Ok().body("Hello world again!")
}

pub async fn response() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(MyObj {
        name: "json response WAZZZEEEEE".to_string(),
    }))
}