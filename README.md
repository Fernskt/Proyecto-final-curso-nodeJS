# 🚀 API REST – Proyecto Final Node.js

API para gestión de productos (ejemplo: figuras coleccionables) con autenticación por JWT y base de datos Firebase Firestore.

## 🌐 URL de producción

```

https://proyecto-final-curso-node-js.vercel.app/api/products

```

## 🔐 Autenticación

La API utiliza JWT (JSON Web Token) para proteger los endpoints.
Para acceder a los recursos protegidos, primero debés loguearte para obtener tu token.

## Login
- Endpoint: `POST /auth/login`
- Body:
  
  ```
      {
        "email": "user@email.com",
        "password": "password123"
      }
  ```

- Respuesta:

    ```
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cC...",
      "user": {
        "id": 1,
        "email": "user@email.com"
      }
    }

    ```

El token recibido lo debés enviar en el header Authorization de todas las peticiones protegidas, con el formato:
  
  ` Authorization: Bearer TU_TOKEN `

## 📦 Endpoints de Productos

### 1) Listar todos los productos
   
- GET `/api/products`
- Headers `Authorization: Bearer TU_TOKEN`
- Respuesta:

  
     ```
     [
        {
          "id": "abc123",
          "category": "pokemon",
          "description": "Figura coleccionable Vulpix - Pokemon Saga",
          "price": 13.3,
          "sku": "PKM00150",
          "stock": 10
        },
        ...
      ]
    ```

     
### 2) Obtener prooductos por ID

   
   
- GET `/api/products/:id`
- Headers: `Authorization: Bearer TU_TOKEN`
- Respuesta exitosa:
  
     
     ```
      {
        "id": "abc123",
        "category": "pokemon",
        "description": "...",
        "price": 13.3,
        "sku": "PKM00150",
        "stock": 10
      }
     ```
- Si el ID no existe:
    
   ```
        {
          "message": "Producto no encontrado"
        }

    ```

   
### 3) Crear producto

   
   
- POST `/api/products`

- Headers:
  `Authorization: Bearer TU_TOKEN`

- Body ejemplo:

  ```
    {
      "category": "pokemon",
      "description": "Figura coleccionable Vulpix - Pokemon Saga",
      "price": 13.3,
      "sku": "PKM00150",
      "stock": 10
    }

  ```
Respuesta:

  ```

    {
      "id": "nuevo_id_generado",
      "category": "pokemon",
      "description": "...",
      "price": 13.3,
      "sku": "PKM00150",
      "stock": 10
    }

  ```



### 4) Actualizar producto

   
   
- PUT `/api/products/:id`

- Headers:
  `Authorization: Bearer TU_TOKEN`

- Body ejemplo:

  ```

    {
      "category": "pokemon",
      "description": "Figura actualizada",
      "price": 20.0,
      "sku": "PKM00150",
      "stock": 8
    }

  ```
- Respuesta:

  ```

    {
      "id": "abc123",
      "category": "pokemon",
      "description": "Figura actualizada",
      "price": 20.0,
      "sku": "PKM00150",
      "stock": 8
    }

  ```


### 5) Eliminar producto

   
   
- DELETE `/api/products/:id`

- Headers:
  `Authorization: Bearer TU_TOKEN`

- Respuesta exitosa:

  ```

    { "message": "Producto eliminado correctamente" }
  
  ```

- Si el producto no existe:

  ```

    { "message": "Producto no encontrado" }

  ```


## 🚧 Errores comunes

- 401 Unauthorized:
  No se envió el token o el formato es incorrecto.

- 403 Forbidden:
  El token es inválido o expiró.

- 400 Bad Request:
  Faltan datos obligatorios o están mal formateados.

- 404 Not Found:
  El recurso (producto) no existe.
