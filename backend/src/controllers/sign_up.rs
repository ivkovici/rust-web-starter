use actix_web::{web, App, HttpResponse, HttpServer, HttpRequest, Responder, Result};
use actix_files::NamedFile;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use crate::models::user::{User, UserInsert};

// A trait that the Validate derive will impl
use validator::{Validate, ValidationError, ValidationErrors};

#[derive(Serialize, Deserialize, Debug, Validate)]
pub struct SignUpForm {
    #[validate(length(min = 6))]
    pub username: String,
    #[validate(email, custom = "validate_unique_email")]
    pub email: String,
    #[validate(length(min = 6, message = "The password is too short."))]
    pub password: String,
    #[validate(must_match(other = "password", code = "wrong_password_confirmation", message = "The passwords are not matching."))]
    pub confirm_password: String,
}

#[derive(Serialize, Debug)]
pub struct Response {
    pub success: bool,
    pub errors: Option<ValidationErrors>,
}

fn validate_unique_email(email: &str) -> Result<(), ValidationError> {
    if email == "wrongEmailAddress" {
        // the value of the email will automatically be added later
        return Err(ValidationError::new("terrible_email"));
    }

    Ok(())
}

pub async fn get_signup(pool: web::Data<PgPool>) -> Result<NamedFile> {
    Ok(NamedFile::open("./src/views/signup.html")?)
}

pub async fn post_signup(form: web::Form<SignUpForm>, pool: web::Data<PgPool>) -> Result<HttpResponse> {
    let response = match form.validate() {
        Ok(_) => Response {
            success: true,
            errors: None
        },
        Err(e) => Response {
            success: false,
            errors: Some(e)
        }
    };

    if response.success {
        let result = User::create(UserInsert {
            username: form.username.clone(),
            email: form.email.clone(),
            password: Some(form.password.clone()),
            facebook_id: None,
            google_id: None,
        }, pool.get_ref()).await;
    }

    Ok(HttpResponse::Ok().json(response))
}