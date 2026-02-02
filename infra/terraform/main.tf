resource "docker_network" "app_network" {
  name = "app_network"
}
resource "docker_container" "nginx" {
  name  = "nginx_proxy"
  image = "nginx:latest"
  ports {
    internal = 80
    external = 8080
  }
  networks_advanced {
    name = docker_network.app_network.name
  }
}
resource "docker_container" "flask_app" {
  name  = "flask_app"
  image = "tp-app:latest"
  ports {
    internal = 5000
    external = 5000
  }
  networks_advanced {
    name = docker_network.app_network.name
  }
}
