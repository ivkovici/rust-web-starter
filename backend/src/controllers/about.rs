use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

pub async fn about(pool: web::Data<PgPool>) -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/about.html")?)
}