const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "BlogHub API",
    version: "1.0.0",
    description:
      "This repository of API is related to a blog website, where users can signup and login with encrypted credentials. This API provides the ability to create, read, update, or delete the blog.",
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {

    // User Routes

    "/api/users/signup": {
      post: {
        tags: ["User Routes"],
        summary: "Create New User",
        description: "Add a new user.",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successfully User Added",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "66cb5d8b1448701d0c601763",
                        },
                        name: {
                          type: "string",
                          example: "John Doe",
                        },
                        email: {
                          type: "string",
                          example: "john.doe@example.com",
                        },
                        profile_pic: {
                          type: "string",
                          example:
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        },
                        skills: {
                          type: "list",
                          example: [],
                        },
                        blogs: {
                          type: "list",
                          example: [],
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-08-25T16:34:47.417Z",
                        },
                        _v: {
                          type: "number",
                          example: 0,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          201: {
            description: "User Already Exists",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User already exists!",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/users/login": {
      post: {
        tags: ["User Routes"],
        summary: "Sign In",
        description: "Sign In with existing user",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "ok",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "login successful!",
                    },
                    token: {
                      type: "string",
                      example:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNM2MDE3NjMiLCJpYXQiOjE3MjQ2MDk2MzYsImV4cCI6MTcyNDYyNDAzNn0.tYjcCRjCuJQHjDdMDUhkRuG6d3hddRsJ8RlRSINuox",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Invalid password",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User not found.",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Internal Server Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Server error",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/users/user-data": {
      get: {
        tags: ["User Routes"],
        summary: "Get User Data",
        description:
          "Retrieves user data based on the Bearer Token provided in the Authorization header.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response with user data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "66cb5d8b1448701d0c601763",
                        },
                        name: {
                          type: "string",
                          example: "John Doe",
                        },
                        email: {
                          type: "string",
                          example: "john.doe@example.com",
                        },
                        profile_pic: {
                          type: "string",
                          example:
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        },
                        skills: {
                          type: "list",
                          example: ["Nodejs", "React", "Express"],
                        },
                        blogs: {
                          type: "list",
                          example: [
                            "66cb5d8b1448701d0c601763",
                            "66cb5d8b1448701d0c601763",
                          ],
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-08-25T16:34:47.417Z",
                        },
                        _v: {
                          type: "number",
                          example: 0,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized - Missing Bearer Token",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "No token provided",
                    },
                  },
                },
              },
            },
          },
          498: {
            description: "Unauthorized - Invalid Bearer Token",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Invalid Token",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    // Blog Routes

    "/api/blogs": {
      get: {
        tags: ["Blog Routes"],
        summary: "Fetch all blogs",
        description: "Retrieves all blog post.",
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    blogs_data: {
                      type: "list",
                      example: [
                        {
                          title: "My first blog",
                          description: "description",
                          image_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                          blog_tags: [
                            "tag_1",
                            "tag_2"
                          ],
                          createdAt: "2024-08-25T16:34:47.417Z",
                          user: "66cc2e3d4a36076237cfa623",
                          username: "Jon Doe",
                          _id: "66cc2e3d4a36076237cfa623",
                          _v: 0
                        },

                        {
                          title: "Open BlockBox in 4 Ways",
                          description: "description",
                          image_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                          blog_tags: [
                            "tag_1",
                            "tag_2"
                          ],
                          createdAt: "2024-08-25T16:34:47.417Z",
                          user: "66cc2e3d4a36076237cfa623",
                          username: "Jon Doe",
                          _id: "66cc2e3d4a36076237cfa623",
                          _v: 0
                        }
                      ]
                    },
                  },
                }
              },

            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "No blogs found",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/blogs/add": {
      post: {
        tags: ["Blog Routes"],
        summary: "Add New Blog",
        description: "Create new blog post.",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                  },
                  description: {
                    type: "string",
                  },
                  image_url: {
                    type: "string",
                  },
                  blog_tags: {
                    type: "list",
                    example: ["string_1", "string_2"]
                  },
                  user: {
                    type: "string",
                  },
                  username: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    blogs_data: {
                      type: "object",
                      properties: {
                        title: {
                          type: "string",
                          example: "My first blog",
                        },
                        description: {
                          type: "string",
                          example: "description",
                        },
                        image_url: {
                          type: "string",
                          example:
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        },
                        blog_tags: {
                          type: "list",
                          example: [
                            "tag_1",
                            "tag_2",
                          ],
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-08-25T16:34:47.417Z",
                        },
                        user: {
                          type: "string",
                          example: "66cc2e3d4a36076237cfa623",
                        },
                        username: {
                          type: "string",
                          example: "Jon Doe",
                        },
                        _id: {
                          type: "string",
                          example: "66cc2e3d4a36076237cfa623",
                        },
                        _v: {
                          type: "number",
                          example: 0,
                        },
                      },
                    },
                  },
                }
              },

            },
          },
          501: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Invalid User ID",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Server Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Internal Server Error",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/blogs/blog/{id}": {
      get: {
        tags: ["Blog Routes"],
        summary: "Fetch blog by id",
        description: "Retrieves blog post by its Id.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Enter Blog Id to fetch",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response with user data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    blog: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "66cb5d8b1448701d0c601763",
                        },
                        title: {
                          type: "string",
                          example:
                            "40+ Design Tools in One - 😱 A Gem For Web Developer & Designers ",
                        },
                        description: {
                          type: "string",
                          example:
                            '<p><a href="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fep40ea9k26mx8rjhc77t.png" rel="noopener noreferrer" target="_blank"><img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fep40ea9k26mx8rjhc77t.png" alt="Header" height="120" width="800"></a></p><p><strong>Hello👋 Developers</strong>! Welcome to My Another Blog Post.</p><p>It\'s me <a href="https://mdtaquiimam.vercel.app/" rel="noopener noreferrer" target="_blank">Md Taqui Imam</a> and it\'s been along that i hadn\'t posted any blogs in dev because busy these day\'s.</p><p>So in this blog post, i want to tell you about one of the new mind blowing website that has <strong>more than 40+ design tools</strong> and the good part is all the <strong>tools are FREE</strong>.</p><p>So let\'s start 👇 and don\'t <strong>Forget</strong> to "💖🦄🔥".</p><h2><a href="https://dev.to/random_ti/all-in-one-design-tools-a-gem-for-web-developer-designers-23g8#fffuelco" rel="noopener noreferrer" target="_blank"> </a> <a href="https://fffuel.co/" rel="noopener noreferrer" target="_blank">fffuel.co🤪</a></h2><p>I know the name is some weird ',
                        },
                        image_url: {
                          type: "string",
                          example:
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        },
                        blog_tags: {
                          type: "list",
                          example: ["Writing", "Tutorial"],
                        },
                        createdAt: {
                          type: "string",
                          example: "2024-08-25T16:34:47.417Z",
                        },
                        user: {
                          type: "string",
                          example: "66cb5d8b1448701d0c601763",
                        },
                        username: {
                          type: "string",
                          example: "Jon Doe",
                        },
                        _v: {
                          type: "number",
                          example: 0,
                        },
                        UpdatedAt: {
                          type: "string",
                          example: "2024-08-25T16:34:47.417Z",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "No blogs found",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/blogs/update/{id}": {
      put: {
        summary: "Update blog by ID",
        description: "Update blog by its ID",
        tags: ["Blog Routes"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Enter Blog Id to update",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                  },
                  description: {
                    type: "string",
                  },
                  image_url: {
                    type: "string",
                  },
                  blog_tags: {
                    type: "list",
                    example: ["string_1", "string_2"]
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Blog has been updated!",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Unable to update the Blog",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    "/api/blogs/{id}": {
      delete: {
        tags: ["Blog Routes"],
        summary: "Delete a blog post by its ID",
        description: "Deletes a specific blog post using its ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "The ID of the blog post to delete",
            schema: {
              type: "string",
              example: "",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Deleted Successfully",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "No blog found",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

module.exports = swaggerDocument;
