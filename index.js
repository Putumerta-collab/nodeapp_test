var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>CICD Info</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 80%;
                        margin: 0 auto;
                        padding: 20px;
                        text-align: left;
                    }
                    h1 {
                        color: #007bff;
                        font-size: 3em;
                        margin-bottom: 10px;
                        text-align: center;
                    }
                    p, li {
                        font-size: 1.1em;
                        line-height: 1.6;
                        margin-bottom: 10px;
                    }
                    ul {
                        padding-left: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to CICD Info</h1>
                    <p><strong>Continuous Integration and Continuous Delivery/Deployment (CI/CD) with Jenkins to Kubernetes</strong> adalah praktik untuk mengotomatisasi proses pengembangan, pengujian, dan pengiriman aplikasi secara cepat dan konsisten. Jenkins digunakan sebagai alat CI/CD, dan Kubernetes sebagai platform untuk men-deploy dan mengelola container aplikasi.</p>
                    <ul>
                        <li><strong>Continuous Integration (CI):</strong> Proses otomatis untuk mengintegrasikan perubahan kode dari beberapa pengembang secara berkala ke repositori pusat. Jenkins akan secara otomatis melakukan build, pengujian, dan integrasi setiap kali ada perubahan kode yang dikirim (commit) ke repositori seperti GitHub.</li>
                        <li><strong>Continuous Delivery/Deployment (CD):</strong> Proses otomatis yang memastikan aplikasi siap untuk dirilis (delivery) atau secara otomatis dirilis (deployment) ke lingkungan produksi atau staging. CD memastikan bahwa setiap versi yang sudah diuji dapat di-deploy kapan saja.</li>
                    </ul>
                    <p><strong>Kubernetes (disingkat K8s)</strong> adalah platform open-source yang digunakan untuk mengelola container aplikasi secara otomatis. Kubernetes menyediakan cara untuk mengatur, menjalankan, dan mengelola container secara efisien di berbagai lingkungan, baik di data center lokal (on-premises) maupun di cloud.</p>
                    <p><strong>Fungsi Utama Kubernetes:</strong></p>
                    <ul>
                        <li>Orkestrasi Container: Mengelola dan mengoordinasi banyak container aplikasi dalam berbagai lingkungan.</li>
                        <li>Scaling Aplikasi: Meningkatkan atau mengurangi jumlah container berdasarkan kebutuhan beban kerja.</li>
                        <li>Load Balancing: Membagi lalu lintas jaringan ke berbagai container secara otomatis, memastikan aplikasi tetap responsif.</li>
                        <li>Self-healing: Jika ada container yang gagal, Kubernetes dapat secara otomatis me-restart atau menggantinya tanpa campur tangan manual.</li>
                        <li>Manajemen Penyimpanan: Mengelola penyimpanan yang digunakan oleh container, termasuk integrasi dengan berbagai jenis storage (local storage, cloud storage, dll).</li>
                        <li>Deployment Otomatis: Mendukung deployment otomatis dan rolling updates, sehingga versi baru aplikasi dapat di-deploy tanpa menghentikan versi yang sedang berjalan.</li>
                    </ul>
                </div>
            </body>
        </html>
    `);
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Universitas Pendidikan Ganesha" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/merta', function (req, res) {
    res.send('{ "response": " Hello Merta " }');
});
app.get('/puja', function (req, res) {
    res.send('{ "response": "dengang" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration and continuous delivery/deployment " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
