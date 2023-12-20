interface PropsCard {
    src?: string;
    children: React.ReactNode;

}

const Cards = ({src, children} : PropsCard) => {
  return  (
    <div className="card" >
        {src ? <img src={src} className="card-img-top" alt="image" /> : ''}
        <div className="card-body">
            {children}
        </div>
        <a href="#"className="card__link">Go somewhere</a>
    </div>
  )
}

export default Cards;