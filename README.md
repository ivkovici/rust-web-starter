I'm trying to build a web starter for myself in Rust.

Autoreload command:
systemfd --no-pid -s http::8088 -- cargo watch -x run

Installing the migration tool (if missing):
cargo install diesel_cli --no-default-features --features "postgres"

Running the migrations from the backend folder:
diesel migration run

