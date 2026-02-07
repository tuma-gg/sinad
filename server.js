const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Example: Get all data
app.get('/api/items', async (req, res) => {
  const { data, error } = await supabase
    .from('items')
    .select('*');
  
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Example: Create new item
app.post('/api/items', async (req, res) => {
  const { data, error } = await supabase
    .from('items')
    .insert([req.body]);
  
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});