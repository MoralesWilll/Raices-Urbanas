import { routes } from './helpers/routes';

const API_URL = 'http://localhost:4000/api/auth/verify-token';

// Verificar token con la API
async function verifyToken(token) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return [data.valid, data];
  } catch (error) {
    console.error('Token verification failed:', error);
    return [false, { message: error.message }];
  }
}

// Navegar a una nueva ruta
export function navigateTo(path) {
  window.history.pushState({}, '', window.location.origin + path);
  Router();
}

// Verificar la autenticación y redirigir
async function checkAuth(path, params) {
  const token = localStorage.getItem('token');

  if (token) {
      // Redirigir al perfil si se intenta acceder al login o a la raíz
      if (path === '/login') {
        navigateTo('/profile');
        return;
      }

      // Ejecutar componente privado correspondiente
      const privateRoute = routes.private.find((r) => r.path === path);
      if (privateRoute) {
        // hace la peticion al backend.
        privateRoute.component(params);
        return;
      } else {
        navigateTo('/home'); // Redirigir a home si la ruta privada no existe
      }
    
  } else {
    // Si no hay token, redirigir a login
    navigateTo('/login');
  }
}

// Definir y manejar el router
export async function Router() {
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  // Verificar autenticación antes de decidir qué componente mostrar
  if (path === '/login') {
    const token = localStorage.getItem('token');
    if (token) {
      navigateTo('/profile');
      return;
    }
  }

  // Comprobar rutas públicas y privadas
  const publicRoute = routes.public.find((r) => r.path === path);
  const privateRoute = routes.private.find((r) => r.path === path);

  if (publicRoute) {
    publicRoute.component(params);
  } else if (privateRoute) {
    checkAuth(path, params);
  } else {
    console.warn('Ruta no encontrada:', path);
    navigateTo('/home');
  }
}

// Manejar el evento de retroceso/avance en el navegador
window.onpopstate = Router;
