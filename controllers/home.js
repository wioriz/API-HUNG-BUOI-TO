const { errorHandler } = require("../utils");

// Dữ liệu mẫu cho các API
const apis = [
  { name: "Images Gái", method: "GET", description: "Ảnh Gái", params: "No Query", status: "Active", url: "#" },
  { name: "Images Gái Sexy", method: "GET", description: "Ảnh Gái Sexy", params: "No Query", status: "Active", url: "#" },
  { name: "Images 6 Múi", method: "GET", description: "Ảnh Sáu Múi", params: "No Query", status: "Active", url: "#" },
  // Thêm các API khác ở đây
];

exports.home = async (req, res, next) => {
  try {
    let apiRows = apis.map(api => `
      <tr>
          <td>${api.name}</td>
          <td>${api.method}</td>
          <td>${api.description}</td>
          <td>${api.params}</td>
          <td class="${api.status.toLowerCase()}">${api.status}</td>
          <td><a href="${api.url}" class="go-button">Go</a></td>
      </tr>
    `).join('');

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>List of APIs</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f9;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 1200px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  text-align: center;
                  color: #333;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 20px;
              }
              th, td {
                  border: 1px solid #ddd;
                  padding: 12px;
                  text-align: left;
              }
              th {
                  background-color: #f2f2f2;
              }
              .active {
                  color: green;
                  font-weight: bold;
              }
              .inactive {
                  color: red;
                  font-weight: bold;
              }
              .go-button {
                  color: blue;
                  text-decoration: none;
              }
              .go-button:hover {
                  text-decoration: underline;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>List of APIs</h1>
              <table>
                  <thead>
                      <tr>
                          <th>API</th>
                          <th>Method</th>
                          <th>Description</th>
                          <th>Params / Query</th>
                          <th>Status</th>
                          <th>URL</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${apiRows}
                  </tbody>
              </table>
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    next(error);
  }
};
