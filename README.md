# 🩳 LikeItShort
LikeItShort is a simple and modern URL shortener built with **Next.js** and **MongoDB**.  
It allows users to convert long URLs into short, shareable links and automatically redirects users to the original URL when accessed.

---

## 🍰 Features
- Create short URLs from long URLs
- Prevent duplicate short URLs
- Store URL mappings in MongoDB
- Redirect short URLs to their original destinations
- Side note, during development, i tested and debugged using Postman

---

## 🔨 Tech Stack
- **Frontend & Backend**: Next.js (App Router)
- **Database**: MongoDB Atlas (Cloud)
- **API Testing**: Postman
- **Deployment**: Vercel
- **Styling**: Tailwind CSS

---

## 🔄 How a URL Shortener Works (dumping some bite-size notes)
A URL shortener works by **storing a mapping between a short key and a long URL**.

### 1️⃣ Creating a Short URL

1. The client sends a **POST request** with:
   ```json
   {
     "url": "https://example.com/very/loooooooooooooooooooooooong/url",
     "shorturl": "shortie"
   }
2. Server connects to MongoDB, check if the URL already exist, stores the mapping in database if unique.
3. MongoDB stores something like:
   ```json
   {
     "url": "https://example.com/very/loooooooooooooooooooooooong/url",
     "shorturl": "shortie"
   }

### 2️⃣ Accessing a Short URL

1. A user visits: "https://likeitshort.vercel.app/shortie"
2. Server will extract 'shortie' from URL, look up in MongoDB, find original 'loooooooooooooooooooooooong' URL, send a redirect response.
3. Browser automatically redirects user to original URL.

### 3️⃣ Postman usage 
1. Test API endpoints independentaly of frontend.
2. Validate request / response data. 
3. Debug MongoDB connection and logic issues.

---

## 🚀 Live LikeItShort URL Shortner
**Deployed on Vercel:** (https://url-shortener-te9k.vercel.app/)


