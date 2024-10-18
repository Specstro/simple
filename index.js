const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="3;url=https://zunvein.carrd.co">
            <title>Redirect</title>
            <style>
                body {
                    font-family: 'Times New Roman', Times, serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                    flex-direction: column;
                }
                h1 {
                    font-size: 48px;
                }
                p {
                    font-size: 24px;
                }
            </style>
        </head>
        <body>
            <h1>hmm?</h1>
            <p>Redirecting in <span id="countdown">3</span> seconds...</p>

            <script>
                let countdown = 3;
                const countdownElement = document.getElementById('countdown');
                const interval = setInterval(() => {
                    countdown--;
                    countdownElement.textContent = countdown;
                    if (countdown === 0) {
                        clearInterval(interval);
                    }
                }, 1000);
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
