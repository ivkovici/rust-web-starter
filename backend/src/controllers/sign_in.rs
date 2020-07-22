use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(Serialize, Deserialize, Debug)]
pub struct SignInForm {
    pub email: String,
    pub password: String,
}

pub async fn get_signin(pool: web::Data<PgPool>) -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/signin.html")?)
}

pub async fn post_signin(form: web::Form<SignInForm>, pool: web::Data<PgPool>) -> Result<String>  {
    println!("jeeeeeeeeeeeeeeeeeeeee, {:?}", form);
    Ok(format!("Welcome {}!", form.email))
}