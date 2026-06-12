# 📸 Cómo Agregar las Nuevas Fotos al Proyecto

## ¿Qué se hizo?

✅ Se actualizó la galería para mostrar **8 fotos** en lugar de 7
✅ Se mejoró el layout con un grid tipo **masonry** que se ve más hermoso
✅ Se agregaron animaciones al pasar el mouse

## 🖼️ Las 8 Fotos que Compartiste

Las siguientes fotos que me pasaste necesitan ser subidas al proyecto:

1. **Foto 1**: Pareja al atardecer con plantas 🌅
2. **Foto 2**: Pareja en bosque/camino 🌲
3. **Foto 3**: Detalle de anillo de bodas 💍
4. **Foto 4**: Pareja de manos sobre naturaleza 🤝
5. **Foto 5**: Pareja abrazándose en bosque 🤗
6. **Foto 6**: Pareja abrazándose en railing 👫
7. **Foto 7**: Pareja bajo árbol grande 🌳
8. **Foto 8**: Pareja bajo árbol (otra vista) 🌳

## 📤 Cómo Subir las Fotos

### Opción 1: Usando Lovable Editor (Recomendado)

1. Abre el archivo `src/routes/index.tsx`
2. Busca la sección de imports de fotos (líneas 8-15)
3. Haz clic derecho en `src/assets/photos/` en el Explorer
4. Selecciona "Subir archivo" o arrastra las imágenes JPG
5. Asegúrate de que se creen los archivos `.asset.json` automáticamente

### Opción 2: Línea de Comandos

```bash
# Navega al proyecto
cd "C:\Users\migue\OneDrive\Documents\invitaciones matrimonio stiven y gisel\karen-stiven-everafter"

# Las fotos deben estar en:
src/assets/photos/

# Los archivos deben ser nombrados:
p1.jpg, p2.jpg, p3.jpg, ... p8.jpg

# Y deben tener sus correspondientes:
p1.jpg.asset.json, p2.jpg.asset.json, etc.
```

### Opción 3: Upload a Través de Cloudinary (Para Producción)

Si prefieres usar un servicio de almacenamiento en la nube:

1. Ve a [cloudinary.com](https://cloudinary.com) y crea una cuenta
2. Sube las 8 fotos
3. Copia las URLs públicas
4. Actualiza `src/routes/index.tsx` para usar las URLs directas:

```typescript
const gallery = [
  "https://res.cloudinary.com/tu-cuenta/image/upload/v1/foto1.jpg",
  "https://res.cloudinary.com/tu-cuenta/image/upload/v1/foto2.jpg",
  // ... etc
];
```

## ✅ Verificación

Después de subir las fotos:

1. Ejecuta `npm run dev` en la terminal
2. Abre http://localhost:8080 en tu navegador
3. Desplázate hasta la sección "Galería"
4. Verifica que las 8 fotos se muestren correctamente

## 🎨 Mejoras Visuales de la Galería

El nuevo layout de galería tiene:

- ✨ **Grid responsivo**: 2 columnas (móvil) → 4 columnas (desktop)
- 🎭 **Efecto masonry**: Algunas fotos son más grandes que otras
- 💫 **Animaciones suaves**: Zoom al pasar el mouse
- 🎯 **Bordes elegantes**: Con colores coordinados con la invitación

## 📝 Estado Actual

- `p1.jpg.asset.json` ✅ Existe
- `p2.jpg.asset.json` ✅ Existe
- `p3.jpg.asset.json` ✅ Existe
- `p4.jpg.asset.json` ✅ Existe
- `p5.jpg.asset.json` ✅ Existe
- `p6.jpg.asset.json` ✅ Existe
- `p7.jpg.asset.json` ✅ Existe
- `p8.jpg.asset.json` ⏳ Creado (necesita imagen)

## 🆘 Si Necesitas Ayuda

1. Verifica que las imágenes sean `JPG` o `PNG`
2. Asegúrate de que el nombre sea exacto: `p1.jpg`, `p2.jpg`, etc.
3. Si algo no funciona, reinicia el servidor: `npm run dev`

---

**¡Listo! Tus fotos hermosas de Stiven y Gisel pronto estarán en la invitación digital.** 💒✨
