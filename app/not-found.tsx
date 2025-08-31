export default function NotFound() {
  return (
    <main
      className="container"
      style={{ paddingTop: '20vh', textAlign: 'center' }}
    >
      <h1>404</h1>
      <p>抱歉，页面未找到。</p>
      <p>
        <a className="site-nav" href="/">
          返回首页
        </a>
      </p>
    </main>
  );
}
