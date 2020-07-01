use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use std::path::PathBuf;
use serde::{Deserialize, Serialize};

/*pub async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hellooooo world!")
}*/

#[derive(Serialize, Deserialize)]
struct MyObj {
    name: String,
}

pub async fn index(req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = req.match_info().query("index.html").parse().unwrap();
    Ok(NamedFile::open(path)?)
}

pub async fn index2() -> impl Responder {
    HttpResponse::Ok().body("Hello world again!")
}

pub async fn response() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(MyObj {
        name: "json response WAZZZEEEEE".to_string(),
    }))
}