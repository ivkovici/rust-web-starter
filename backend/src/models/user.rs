use serde::{Serialize, Deserialize};
use actix_web::{HttpResponse, HttpRequest, Responder, Error};
//use futures::future::{ready, Ready};
use sqlx::{PgPool, FromRow, Row};
use sqlx::postgres::PgRow;
use anyhow::Result;

// this struct will be used to represent database record
#[derive(Serialize, FromRow)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub email: String,
    pub password: Option<String>,
    pub facebook_id: Option<i32>,
    pub google_id: Option<i32>,
}

// this struct will use to receive user input
#[derive(Serialize, Deserialize)]
pub struct UserInsert {
    pub username: String,
    pub email: String,
    pub password: Option<String>,
    pub facebook_id: Option<i32>,
    pub google_id: Option<i32>,
}

impl User {
    pub async fn find_by_email(email: String, pool: &PgPool) -> Result<User> {
        let rec = sqlx::query!(
                r#"
                    SELECT * FROM users WHERE email = $1
                "#,
                email
            )
            .fetch_one(&*pool)
            .await?;

        Ok(User {
            id: rec.id,
            username: rec.username,
            email: rec.email,
            password: rec.password,
            facebook_id: rec.facebook_id,
            google_id: rec.google_id,
        })
    }

    pub async fn create(todo: UserInsert, pool: &PgPool) -> Result<User> {
        let mut tx = pool.begin().await?;
        let user = sqlx::query("INSERT INTO users (username, email, password, facebook_id, google_id) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, email, password, facebook_id, google_id")
            .bind(&todo.username)
            .bind(&todo.email)
            .bind(&todo.password)
            .bind(&todo.facebook_id)
            .bind(&todo.google_id)
            .map(|row: PgRow| {
                User {
                    id: row.get(0),
                    username: row.get(1),
                    email: row.get(2),
                    password: row.get(3),
                    facebook_id: row.get(4),
                    google_id: row.get(5),
                }
            })
            .fetch_one(&mut tx)
            .await?;

        tx.commit().await?;
        Ok(user)
    }
}