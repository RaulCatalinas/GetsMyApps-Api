package main

import (
	"os"

	"github.com/RaulCatalinas/GetsMyApps-Api/src/routes"
	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v3"
)

func main() {
	var port string

	envPort := os.Getenv("PORT")

	if envPort != "" {
		port = envPort
	} else {
		port = "3000"
	}

	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	routes.MainRoute(app.Group(""))

	app.Listen(":" + port)
}
