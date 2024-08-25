const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "BLOGHUB API",
        version: "1.0.0",
        description: "This repository of API is related to a blog website, where users can signup and login with encrypted credentials. This API provides the ability to create, read, update, or delete the blog.",
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
    paths: {
        "/api/users": {
            get: {
                tags: ["All Users"],
                description: "",
                responses: {
                    "200": {
                        description: "ok",
                    },
                    "404": {
                        description: "No users found",
                    },
                },
            },
        },
        "/api/users/signup": {
            post: {
                tags: ["User Signup"],
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
                    "200": {
                        description: "ok",
                    },
                    "201": {
                        description: "User already exists!, Login instead.",
                    },
                },
            },
        },
        "/api/users/login": {
            post: {
                tags: ["User Sign In"],
                description: ".",
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
                    "200": {
                        description: "ok",
                    },
                    "400": {
                        description: "Invalid password.",
                    },
                    "404": {
                        description: "User not found.",
                    },
                },
            },
        },
        "/api/blogs": {
            get: {
                tags: ["All Blogs"],
                description: "",
                responses: {
                    "200": {
                        description: "ok",
                    },
                    "404": {
                        description: "No blogs found",
                    },
                },
            },
        },
        "/api/blogs/add": {
            post: {
                tags: ["Add Blogs"],
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
                                    image: {
                                        type: "string",
                                    },
                                    user: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "ok",
                    },
                    "501": {
                        description: "Invalid User ID.",
                    },
                },
            },
        },
        "/api/blogs/update/": {
            put: {
                tags: ["Update Blogs"],
                parameters: [
                    {
                        name: "id",
                        in: "query",
                        description: "Enter Blog Id",
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
                                    image: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "ok",
                    },
                    "500": {
                        description: "Unable to update the Blog",
                    },
                },
            },
        },
        "/api/blogs/": {
            delete: {
                tags: ["Delete Blog"],
                parameters: [
                    {
                        name: "id",
                        in: "query",
                        description: "Enter Blog Id",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "ok",
                    },
                    "500": {
                        description: "Unable to delete the Blog",
                    },
                },
            },
        },
    },
};

module.exports = swaggerDocument