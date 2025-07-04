# Proyecto E-commerce de Celulares 📱💻

**Tienda online funcional** desarrollada con React, Auth0 para autenticación y SendGrid para notificaciones por correo. Proyecto visual con arquitectura preparada para integración con MongoDB.

## 🛠 Stack Tecnológico

| Tecnología | Uso Implementado |
|------------|------------------|
| **React** | Estructura principal del frontend |
| **Auth0** | Autenticación segura de usuarios |
| **SendGrid** | Envío de correos transaccionales |
| **MongoDB** | Pruebas de modelo de datos (no conectado) |
| **CSS3** | Estilos personalizados y responsive |
| **JavaScript ES6+** | Lógica de negocio |

## 📂 Estructura del Proyecto

- **Modelos**: 
  - `Producto.js` (Esquema de celulares/accesorios)
  - `Usuario.js` (Estructura para Auth0)
- **Pruebas**: 
  - Conexión local a MongoDB (no implementada en producción)
  - Ejemplos de queries CRUD

## react-auth0-intro/
- **Componentes Principales**:
  - `AuthWrapper/` (Configuración Auth0)
  - `ProductList/` (Catálogo interactivo)
  - `Checkout/` (Flujo de compra visual)
  - `UserDashboard/` (Área personal)
  
- **Características**:
  - Login/Logout con Auth0
  - Simulación de carrito de compras
  - Formularios controlados con React Hooks
  - Diseño responsive con CSS Grid/Flexbox

## 🔐 Configuración Requerida
1. Variables de Entorno:
```bash
# Archivo .env.example (renombrar a .env)
REACT_APP_AUTH0_DOMAIN=your_domain.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your_client_id
REACT_APP_SENDGRID_API_KEY=your_sendgrid_key
REACT_APP_MONGO_URI=mongodb_connection_string
```
2. Pasos para Ejecución:
```bash
npm install
cp .env.example .env
# Editar .env con tus credenciales
npm start
```

## 🚀 Funcionalidades Clave

| Módulo         | Descripción                              | Estado        |
|----------------|------------------------------------------|---------------|
| **Autenticación** | Flux completo con Auth0                  | ✅ Funcional  |
| **Catálogo**     | Vista de productos con filtros           | ✅ Funcional  |
| **Checkout**     | Simulación de proceso de pago            | 🚧 Visual     |
| **Notificaciones** | Integración con SendGrid                 | ✅ Configurado |

## ⚠️ Consideraciones Importantes
1. Seguridad:

  - Todos los archivos .env fueron eliminados del repositorio

  - Credenciales deben ser agregadas localmente

  - Auth0 configurado con PKCE para máxima seguridad

2. Base de Datos:

  - Modelos preparados para MongoDB Atlas

  - Conexión comentada en código (requiere REACT_APP_MONGO_URI)

3. Pruebas:
```bash
npm test  # Jest + Testing Library
```
## 💡 Recomendaciones para Desarrollo
1. Para probar SendGrid:

  - Usar cuenta sandbox

  - Limitar a 100 emails/día (modo prueba)

2. Para Auth0:

  - Configurar Callback URLs en dashboard

  - Usar "Single Page App" como tipo de aplicación

3. Para MongoDB:

  - Ejecutar mongod localmente o

  - Usar Atlas con IP autorizadas

## 🔧 Proyecto 100% funcional como demo visual - Requiere configuración de credenciales para uso completo
