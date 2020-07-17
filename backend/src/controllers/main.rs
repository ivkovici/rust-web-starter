use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct SignInForm {
    pub email: String,
    pub password: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct SignUpForm {
    pub username: String,
    pub email: String,
    pub password: String,
    pub confirm_password: String,
}

#[derive(Serialize, Deserialize)]
struct MyObj {
    name: String,
}

pub async fn index() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/index.html")?)
}

/** Serving the frontend */
pub async fn about() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/about.html")?)
}

pub async fn get_signin() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/signin.html")?)
}

pub async fn post_signin(form: web::Form<SignInForm>) -> Result<String>  {
    println!("jeeeeeeeeeeeeeeeeeeeee, {:?}", form);
    Ok(format!("Welcome {}!", form.email))
}

pub async fn get_signup() -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/signup.html")?)
}

pub async fn post_signup(form: web::Form<SignUpForm>) -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/signup.html")?)
}

pub async fn index2() -> impl Responder {
    HttpResponse::Ok().body("Hello world again!")
}

pub async fn response() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(MyObj {
        name: "json response WAZZZEEEEE".to_string(),
    }))
}