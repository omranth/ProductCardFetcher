const products = [
  {
    id: 1,
    title: 'Watchs',
    image: 'https://media.istockphoto.com/id/165853320/photo/wristwatch.webp?s=1024x1024&w=is&k=20&c=7oll9jl5c1A76ePrPFSQRir5FuyzESwi0YCTcHtnL6M=',
    description: 'A timeless classic black watch for men, perfect for any occasion.',
  },
  {
    id: 2,
    title: 'Sporty Blue Watch',
    image: 'https://media.istockphoto.com/id/165853320/photo/wristwatch.webp?s=1024x1024&w=is&k=20&c=7oll9jl5c1A76ePrPFSQRir5FuyzESwi0YCTcHtnL6M=',
    description: 'Durable and sporty blue watch, ideal for active lifestyles.',
  },
  {
    id: 3,
    title: 'Elegant Silver Watch',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f',
    description: 'Elegant silver watch for formal events and professional attire.',
  },
  {
    id: 4,
    title: 'Luxury Gold Watch',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    description: 'Luxurious gold watch, a statement piece for high-end fashion.',
  },
  {
    id: 5,
    title: 'Minimalist White Watch',
    image: 'https://images.unsplash.com/photo-1723525605263-952a2a5dc14d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2hpdGUlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Sleek and minimalist white watch, perfect for a modern look.',
  },
  {
    id: 6,
    title: 'Digital Smartwatch',
    image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Advanced digital smartwatch with fitness tracking and notifications.',
  },
];
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// تمكين CORS لجميع الطلبات
app.use(cors());

app.get('/api', (req, res) => {
  res.json(products);
});

// تشغيل server :)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
