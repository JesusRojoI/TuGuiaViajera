# Tu Guía Viajera

Replica funcional de una plataforma de rutas e inmersiones gastronómicas en México
para la marca **Tu Guía Viajera** (`tuguiaviajera.com`).

Construida con **Next.js 14 (App Router)**, **React 18**, **TypeScript** y
**Tailwind CSS**. Incluye catálogo de 17 experiencias, detalle de producto,
carrito persistente, checkout con **Etomin**, correos transaccionales con
**Resend**, contenido bilingüe español/inglés y páginas legales.

---

## Requisitos

- Node.js 18.17 o superior
- npm 9 o superior
- Cuenta de Etomin (pagos) y/o Resend (correo) para producción

## Instalación

```bash
npm install
cp .env.example .env   # completa las credenciales
npm run dev
```

La aplicación queda disponible en **http://localhost:3002**.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto 3002 |
| `npm run build` | Compilación de producción |
| `npm start` | Servidor de producción en el puerto 3002 |
| `npm run lint` | Linter de Next.js |
| `npm run email:test` | Diagnóstico del proveedor de correo (ver sección Correo) |

> `npm run dev` arranca con `scripts/dev.mjs`. Si el puerto 3002 está libre,
> limpia `.next` (para no reutilizar artefactos de `next build`) y luego inicia
> Next. Si ya hay un servidor en ese puerto, no lo interrumpe ni borra `.next`:
> solo avisa y termina. Para compilar en producción detén antes el servidor de
> desarrollo, de modo que ambos procesos no escriban en `.next` a la vez.

## Variables de entorno

```dotenv
# Etomin
ETOMIN_USER=
ETOMIN_PASSWORD=
ETOMIN_BASE_URL=https://pagos.etomin.com/api/v1

# Resend (`re_...`) o Emailit (`e_...`)
RESEND_API_KEY=
# Alternativa: llave de Emailit (`e_...`). Tiene prioridad sobre RESEND_API_KEY.
EMAILIT_API_KEY=
EMAIL_FROM=support@tuguiaviajera.com
ADMIN_EMAIL=support@tuguiaviajera.com

# Sitio
NEXT_PUBLIC_SITE_URL=https://tuguiaviajera.com
NEXT_PUBLIC_CONTACT_EMAIL=support@tuguiaviajera.com
# Opcional: teléfono público. Si queda vacío, se ocultan los enlaces de teléfono.
NEXT_PUBLIC_CONTACT_PHONE=
PORT=3002
```

- `ETOMIN_USER` / `ETOMIN_PASSWORD`: credenciales de la cuenta Etomin.
  Sin ellas, el checkout responde con `503 not_configured` y muestra un aviso
  amigable; el resto del sitio sigue funcionando.
- `RESEND_API_KEY`: API key de Resend (`re_...`) **o** de Emailit (`e_...`).
  El proveedor se detecta por el prefijo. También puedes definir
  `EMAILIT_API_KEY` (`e_...`), que tiene prioridad.
- `ADMIN_EMAIL`: recibe una copia de cada mensaje de contacto y de cada compra.
- `EMAIL_FROM`: remitente verificado en el proveedor. Si el dominio aún no está
  verificado, el proveedor rechazará el envío con `403`.
- `NEXT_PUBLIC_SITE_URL`: dominio público; se usa en metadata, sitemap y correos.

### Probar el correo

```bash
npm run email:test                  # valida la llave y lista los dominios
npm run email:test -- tu@correo.mx  # además envía un correo de prueba
```

El diagnóstico indica si la llave es inválida (`401`), si el remitente no está
verificado (`403`) o si el dominio no pertenece a la cuenta. Si el envío falla,
la app **no pierde el mensaje**: lo guarda en `.mail-outbox/` y el formulario de
contacto responde correctamente. Al corregir la llave o verificar el dominio,
los envíos salen de inmediato sin cambiar código.

## Flujo de pago

1. El cliente elige ruta, fecha y número de viajeros.
2. El carrito se guarda en `localStorage` (`tgv_cart_v1`).
3. En `/checkout` se validan datos del cliente y de la tarjeta.
4. `POST /api/payment` valida el carrito contra el catálogo del servidor,
   calcula el total y ejecuta el flujo de Etomin:
   - `POST /signin` → token de autorización
   - `POST /card/tokenizer` → token de tarjeta
   - `POST /sale` → cobro
5. Si el cobro es aprobado, se envían los correos al cliente y al administrador
   y se muestra `/compra-exitosa`.

Los precios del catálogo ya incluyen IVA. El resumen muestra subtotal, IVA
incluido y total (el total coincide con la suma de precios publicados).

> La tarjeta nunca se guarda en el navegador ni se registra en logs; solo se
> procesa en el servidor y se envía a Etomin tokenizada.

## Correo

`POST /api/send-email` recibe el formulario de contacto y envía:

- Confirmación al cliente.
- Copia al buzón definido en `ADMIN_EMAIL`.

Las plantillas HTML están en `src/lib/email.ts` y los textos en
`messages/es.json` / `messages/en.json` bajo la clave `emails`.

El transporte se elige por la llave: Resend (`re_...`) usa la API de Resend;
Emailit (`e_...`) usa `https://api.emailit.com/v2/emails`. Si ningún proveedor
está configurado, el formulario responde `503` en producción y se omite el
envío en desarrollo. Si el proveedor rechaza el envío, el correo se escribe en
`.mail-outbox/` (ignorado por git) y el flujo continúa sin errores para el
usuario. Usa `npm run email:test` para validar la configuración.

## Idiomas

- Español e inglés con cambio instantáneo desde el selector del header.
- Preferencia guardada en cookie `NEXT_LOCALE` y `localStorage`.
- Diccionarios en `messages/es.json` y `messages/en.json`.
- No se muestran claves de traducción sin resolver.

## Rutas principales

| Ruta | Contenido |
| --- | --- |
| `/` | Home con hero, cómo funciona, rutas destacadas, historia, FAQ y galería |
| `/rutas` | Catálogo con filtros por categoría |
| `/product/[slug]` | Detalle de las 17 experiencias |
| `/carrito` | Carrito completo |
| `/checkout` | Datos de cliente, tarjeta y resumen |
| `/compra-exitosa` | Confirmación de compra |
| `/contacto` | Formulario y datos de contacto |
| `/politica-privacidad` | Aviso de privacidad (contenido en preparación) |
| `/terminos-y-condiciones` | Términos y condiciones (contenido en preparación) |
| `/politicas-reembolso` | Políticas de reembolso (contenido en preparación) |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Estructura

```text
messages/                 Diccionarios ES/EN
public/                   Logo, favicon, imágenes, video y sellos de pago
src/app/                  Rutas, layout, estilos globales y API routes
src/components/           Header, footer, home, catálogo, carrito, checkout
src/context/              Idioma y carrito
src/data/products.ts      Catálogo de 17 experiencias
src/lib/                  Etomin, Resend, formato, i18n y constantes del sitio
src/types/                Tipos compartidos
```

## Identidad visual

- Paleta: jade `#0C3B35`, terracota `#C85A3A`, maíz `#EAB64C`,
  crema `#F6EFE2` y papel `#FBF7EF`.
- Tipografías: Fraunces (display), Manrope (texto) y Caveat (acentos).
- Logo propio tipo “sello de ruta” con camino punteado y sol/ubicación.
- Animaciones de entrada con `IntersectionObserver`, marquesina de ingredientes,
  progreso de scroll y transiciones suaves; respetan `prefers-reduced-motion`.

## Pendientes antes de producción

1. Verificar que `ETOMIN_USER`, `ETOMIN_PASSWORD` y la llave de correo
   (`RESEND_API_KEY` o `EMAILIT_API_KEY`) estén configuradas en `.env`.
2. Verificar el dominio remitente en el proveedor (`EMAIL_FROM`) y comprobarlo
   con `npm run email:test -- tu@correo.mx`.
3. Definir `NEXT_PUBLIC_CONTACT_PHONE` con el teléfono real si se quiere mostrar;
   si queda vacío, los enlaces de teléfono se ocultan automáticamente.
4. Redactar el contenido legal definitivo.
5. Confirmar que `NEXT_PUBLIC_SITE_URL` apunte al dominio final.

## Licencia

Proyecto privado para Tu Guía Viajera. El contenido e imágenes se usan como
base de la réplica solicitada.
