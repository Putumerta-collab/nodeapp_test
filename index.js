var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Testing Deploy NodeApp</title>
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
                    img {
                        display: block;
                        margin: 20px auto;
                        max-width: 50%;
                        height: auto;
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>CI/CD projek </h1>
                     <img src="https://mlops-guide.github.io/MLOps/CICDML/ci-cd.png" alt="CICD Image" />
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


app.get('/login', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>Login Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .login-container {
                        width: 300px;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        font-size: 2em;
                        margin-bottom: 20px;
                        color: #007bff;
                    }
                    input[type="text"], input[type="password"] {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    button {
                        width: 100%;
                        padding: 10px;
                        background-color: #007bff;
                        border: none;
                        border-radius: 4px;
                        color: white;
                        font-size: 1em;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="login-container">
                    <h1>Login</h1>
                    <form action="/login" method="post">
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </body>
        </html>
    `);
});

    
app.get('/will', function (req, res) {
    res.send('{ "response": "Perguruan tinggi" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration, continuous delivery and continuous deployment " }');
});

app.get('/dashboard', function (req, res) {
    res.send(`
        <html>
 <head>
  <title>
   Jenkins Dashboard
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
 </head>
 <body class="bg-gray-100 font-sans">
  <div class="flex flex-col h-screen">
   <!-- Header -->
   <header class="bg-black text-white flex items-center justify-between p-4">
    <div class="flex items-center">
     <img alt="Jenkins logo" class="rounded-full mr-2" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-oJq8Rtnigh75JsWY59SRpAWj.png?st=2024-10-01T02%3A29%3A49Z&amp;se=2024-10-01T04%3A29%3A49Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-30T14%3A43%3A04Z&amp;ske=2024-10-01T14%3A43%3A04Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=GrCcu07fCaNpKK8N6HYPUChnRjgf4eHH6cvvReOhgwU%3D" width="40"/>
     <span class="text-2xl font-bold">
      Jenkins
     </span>
    </div>
    <div class="flex items-center space-x-4">
     <input class="p-2 rounded bg-gray-800 text-white" placeholder="Search (CTRL+K)" type="text"/>
     <i class="fas fa-question-circle">
     </i>
     <i class="fas fa-bell">
     </i>
     <i class="fas fa-shield-alt">
     </i>
     <span class="bg-yellow-500 text-black rounded-full px-2">
      1
     </span>
     <span class="bg-red-500 text-white rounded-full px-2">
      2
     </span>
     <span>
      Admin1234
     </span>
     <a class="text-white" href="#">
      log out
     </a>
    </div>
   </header>
   <!-- Main Content -->
   <div class="flex flex-1">
    <!-- Sidebar -->
    <aside class="bg-white w-64 p-4 border-r">
     <nav class="space-y-4">
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-home">
       </i>
       <span>
        Dashboard
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-code">
       </i>
       <span>
        Changes
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-play">
       </i>
       <span>
        Build Now
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-cog">
       </i>
       <span>
        Configure
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-trash">
       </i>
       <span>
        Delete Pipeline
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-expand">
       </i>
       <span>
        Full Stage View
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-pen">
       </i>
       <span>
        Rename
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-code-branch">
       </i>
       <span>
        Pipeline Syntax
       </span>
      </a>
      <a class="flex items-center space-x-2 text-gray-700" href="#">
       <i class="fas fa-sync">
       </i>
       <span>
        Git Polling Log
       </span>
      </a>
     </nav>
    </aside>
    <!-- Main Panel -->
    <main class="flex-1 p-6">
     <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold flex items-center space-x-2">
       <i class="fas fa-check-circle text-green-500">
       </i>
       <span>
        Testing Deploy Nodeapp
       </span>
      </h1>
      <div class="flex items-center space-x-4">
       <span>
        astunkara
       </span>
       <a class="text-gray-700" href="#">
        Edit description
       </a>
       <a class="text-gray-700" href="#">
        Disable Project
       </a>
      </div>
     </div>
     <h2 class="mt-8 text-xl font-bold">
      Stage View
     </h2>
     <div class="mt-4">
      <div class="overflow-x-auto">
       <table class="min-w-full bg-white border">
        <thead>
         <tr>
          <th class="px-4 py-2 border">
           Declarative: Checkout SCM
          </th>
          <th class="px-4 py-2 border">
           Checkout Source
          </th>
          <th class="px-4 py-2 border">
           Build image
          </th>
          <th class="px-4 py-2 border">
           Pushing Image
          </th>
          <th class="px-4 py-2 border">
           Deploying App to Kubernetes
          </th>
          <th class="px-4 py-2 border">
           Declarative: Post Actions
          </th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           20s
          </td>
          <td class="px-4 py-2 border">
           59s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
         </tr>
         <tr>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           6s
          </td>
          <td class="px-4 py-2 border">
           18s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
         </tr>
         <tr>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           2min 21s
          </td>
          <td class="px-4 py-2 border">
           7min 5s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           6s
          </td>
         </tr>
         <tr>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           1s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           19s
          </td>
          <td class="px-4 py-2 border">
           2s
          </td>
          <td class="px-4 py-2 border">
           5s
          </td>
         </tr>
        </tbody>
       </table>
      </div>
     </div>
     <div class="mt-8">
      <h2 class="text-xl font-bold">
       Build History
      </h2>
      <div class="mt-4">
       <div class="flex items-center justify-between">
        <span class="text-gray-700">
         trend
        </span>
        <input class="p-2 rounded bg-gray-200" placeholder="Filter builds..." type="text"/>
       </div>
       <ul class="mt-4 space-y-2">
        <li class="flex items-center justify-between p-2 bg-white border rounded">
         <span>
          #45
         </span>
         <span>
          1 Okt 2024 09.14
         </span>
         <span>
          1 commit
         </span>
        </li>
        <li class="flex items-center justify-between p-2 bg-white border rounded">
         <span>
          #44
         </span>
         <span>
          1 Okt 2024 08.13
         </span>
         <span>
          1 commit
         </span>
        </li>
        <li class="flex items-center justify-between p-2 bg-white border rounded">
         <span>
          #43
         </span>
         <span>
          1 Okt 2024 07.55
         </span>
         <span>
          1 commit
         </span>
        </li>
        <li class="flex items-center justify-between p-2 bg-white border rounded">
         <span>
          #42
         </span>
         <span>
          23 Sep 2024 08.29
         </span>
         <span>
          1 commit
         </span>
        </li>
       </ul>
      </div>
     </div>
    </main>
   </div>
  </div>
 </body>
</html>
    `);
});

// Jalankan server
app.listen(process.env.PORT || 3000);
module.exports = app;
