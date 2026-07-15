# 🎯 Grabber - React Application

پروژه React استقرار‌شده بر روی Cloudflare Pages

## 🚀 شروع سریع

### نیازمندی‌ها
- Node.js 18+
- npm یا yarn

### نصب
```bash
npm install
```

### اجرای توسعه
```bash
npm start
```

سایت در `http://localhost:3000` باز می‌شود

### ساخت برای تولید
```bash
npm run build
```

## 📦 استقرار بر روی Cloudflare Pages

### گام‌های استقرار:

1. **اتصال Git Repository:**
   - به [Cloudflare Dashboard](https://dash.cloudflare.com) بروید
   - به Pages بروید
   - روی "Connect to Git" کلیک کنید
   - Repository خود را انتخاب کنید

2. **تنظیمات Build:**
   - **Project name:** grabber
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory (advanced):** `/` (خالی گذاشته شود)
   - **Node.js version:** 18.x

3. **Environment Variables (اختیاری):**
   - اگر نیاز به متغیرهای محیطی دارید آن‌ها را اضافه کنید

4. **Deploy:**
   - روی "Save and Deploy" کلیک کنید

## 📁 ساختار پروژه

```
Grabber/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── wrangler.toml
```

## 🎨 ویژگی‌ها

- ✨ رابط کاربری مدرن
- 📱 پاسخ‌دهی خودکار (Responsive)
- 🚀 استقرار فوری بر روی Cloudflare Pages
- 🔒 HTTPS خودکار
- 🌍 CDN سراسر جهان

## 📞 پشتیبانی

برای مشکلات و سؤالات به [Cloudflare Docs](https://developers.cloudflare.com/pages/) مراجعه کنید.

---

ساخته شده با ❤️ برای Cloudflare Pages
