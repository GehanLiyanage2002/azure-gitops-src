const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        status: "success", 
        message: "Welcome to my production GitOps Cluster on Azure!",
        version: "1.0.0" 
    });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));