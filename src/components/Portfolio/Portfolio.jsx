import "./Portfolio.css";
import Header from "./../Header/Header";
import data from "./data";
import Card from "./Card";

export default function Portfolio({ setShowDetailsDialog, setDialogData }) {
  const onClickHandler = (title, image) => {
    setShowDetailsDialog(true);
    setDialogData({
      title,
      image,
    });

    document.body.classList.add("noScroll");
  };
  return (
    <>
      <section id="portfolio">
        <Header title={"PORTFOLIO"} />

        <div className="container">
          <div className="row gx-5 gy-5">
            {data.map((card) => (
              <Card
                title={card.title}
                image={card.image}
                onClickHandler={() => onClickHandler(card.title, card.image)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
