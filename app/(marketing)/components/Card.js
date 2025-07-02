export default function Card() {
  return (
    <div className="d-flex justify-content-center gap-3">
      {/* การ์ดใบที่ 1 */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="/images/Card/1.jpg" className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>

      {/* การ์ดใบที่ 2 */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="/images/Card/2.jpg" className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>

      {/* การ์ดใบที่ 3 */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="/images/Card/3.jpg" className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}
