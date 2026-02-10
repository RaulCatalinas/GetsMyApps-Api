package routes

import "github.com/gofiber/fiber/v3"

func MainRoute(router fiber.Router) {
	router.Get("/", func(c fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"hello": "world",
		})
	})
}
