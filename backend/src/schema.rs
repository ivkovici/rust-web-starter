table! {
    users (id) {
        id -> Int4,
        username -> Varchar,
        email -> Varchar,
        password -> Nullable<Varchar>,
        facebook_id -> Nullable<Int4>,
        google_id -> Nullable<Int4>,
    }
}
