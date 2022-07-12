import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/comm.css";
import "../styles/index.css";
import "../styles/detailed.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

require("http")
  .createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hellow world");
  })
  .listen(3000);
