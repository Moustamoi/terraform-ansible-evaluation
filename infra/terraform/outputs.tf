output "nginx_url" {
  value = "http://localhost:8080"
}

output "flask_app_name" {
  value = docker_container.flask_app.name
}

output "nginx_name" {
  value = docker_container.nginx.name
}
