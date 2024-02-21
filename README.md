# EndPoint API My Unsplash

## /v1/user ##
- /v1/user
    Registrar un nuevo usuario en la base de datos.
    - Método: POST
    - body:
        ```json
        {
            "username": "String",
            "userimg": "String",
            "password": "Number"
        }
        ```

- /v1/user/login
    Comprobar si la cuenta existe.
    - Método: POST
    - body:
        ```json
        {
            "username": "String",
            "password": "Number"
        }
        ```
    - Response: True or False

- /v1/user/all
    Mostrar todos los usuarios que están en la base de datos.
    - Método: GET
    - Response:
         ```json
        [
            {
                "id": 1,
                "username": "jose",
                "userimg": "https://example.com/user1.jpg",
                "numberpost": 5,
                "password": 123456
            },
            {
                "id": 2,
                "username": "luis",
                "userimg": "https://example.com/user2.jpg",
                "numberpost": 3,
                "password": 654321
            }
        ]
         ```

## /v1/post ##

- /v1/post/:{id}
    - Obtener un post especifico, ingresar el id del post
    - Método: Get
    - Response:
        ```json
             {
              "id": 1,
              "img": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
              "title": "Increíble aventura felina",
              "description": "Únete a este emocionante viaje junto a los gatos más valientes del mundo. Descubre cómo conquistaron las alturas.",
              "fecha": "2024-02-14T10:30:00.000Z",
              "authorid": 1
            }
        ```



- /v1/post/all
    Mostrar todos los posts que hay en la base de datos.
    - Método: GET
    - Response:
         ```json
        [
            {
                "id": 1,
                "img": "https://example.com/image1.jpg",
                "title": "Ejemplo de título 1",
                "description": "Lorem ipsum description 1",
                "fecha": "2024-02-14T12:00:00.000Z",
                "authorid": 2
            },
            {
                "id": 2,
                "img": "https://example.com/image2.jpg",
                "title": "Ejemplo de título 2",
                "description": "Lorem ipsum description 2",
                "fecha": "2024-02-14T13:00:00.000Z",
                "authorid": 3
            }
        ]
         ```

- /v1/post/:{id}
    Registrar un nuevo post en la base de datos, tienes que ingresar el ID del usuario al que le pertenece el post.
    - Método: POST
    - body:
        ```json
        {
            "title": "String",
            "description": "String",
            "img": "String (Image Link)"
        }
        ```

- /v1/post/like/all
    Muestra los likes de cada post.
    - Método: GET
    - Response:
         ```json
            [
                {
                    "id": 1,
                    "count": 2,
                    "likeid": 10
                },
                {
                    "id": 2,
                    "count": 1,
                    "likeid": 11
                }
            ]
         ```

- /v1/post/like/:{id}
    Agregar un like (me gusta) en un post, tienes que ingresar el ID del post al que quieres dar like.
    - Método: POST

## /v1/rank ##

- /v1/rank
    Muestra un ranking de todos los usuarios.
    - Método: GET
    - Response:
         ```json
            [
                 {
                    "userData": {
                        "id": 1,
                        "username": "jose",
                        "userimg": "https://example.com/user1.png",
                        "numberpost": 7,
                        "password": "contraseña123"
                    },
                    "postData": {
                        "id": 11,
                        "img": "https://example.com/post1.png",
                        "title": "Título del Post de José",
                        "description": "Descripción del post de José.",
                        "fecha": "2024-02-14T01:49:57.320Z",
                        "authorid": 1
                    },
                    "likeData": {
                        "id": 2,
                        "count": 10,
                        "likeid": 11
                    },
                    "likecount": 10
                },
                {
                    "userData": {
                        "id": 2,
                        "username": "luis",
                        "userimg": "https://example.com/user2.png",
                        "numberpost": 3,
                        "password": "contraseña456"
                    },
                    "postData": {
                        "id": 22,
                        "img": "https://example.com/post2.png",
                        "title": "Título del Post de Luis",
                        "description": "Descripción del post de Luis.",
                        "fecha": "2024-02-14T02:30:00.000Z",
                        "authorid": 2
                    },
                    "likeData": {
                        "id": 3,
                        "count": 5,
                        "likeid": 22
                    },
                    "likecount": 5
                    }
            ]
         ```