export default function Card() {
  const cards = [
    { img: "/images/Card/1.jpg", alt: "Card 1", text: "รายละเอียดการ์ด 1" },
    { img: "/images/Card/2.jpg", alt: "Card 2", text: "รายละเอียดการ์ด 2" },
    { img: "/images/Card/3.jpg", alt: "Card 3", text: "รายละเอียดการ์ด 3" },
  ];

  return (
    <div className="d-flex justify-content-center gap-3" role="group" aria-label="Card list">
      {cards.map((card, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={card.img} className="card-img-top" alt={card.alt} />
          <div className="card-body">
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
