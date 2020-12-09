import stars from "../assets/section--opinions/card-opinion-opinions/default/opinions/default/Element/Stars/5.svg";
import userBlankAvatar from "../assets/section--opinions/card-opinion-opinions/default/opinions/default/icon.svg";

export default function OpinionTile({ opinion }) {
  return (
    <div className="opinion__card bg-white p-8 ">
      <div className="opinion__data flex ">
        <img
          className="stars__image"
          src={stars}
          alt="obraz przedstawiający obrazek użytkownika"
        />
        <span className="data__date ml-auto mr-2 ">{opinion.date}</span>
      </div>
      <p className="mt-8 mb-6 card__text">{opinion.text}</p>
      <div className="user__info flex items-center">
        <img
          alt={
            opinion.userName === ""
              ? "awatar domyślny"
              : "awatar użytkownika portalu"
          }
          src={opinion.userName === "" ? userBlankAvatar : opinion.userImg}
          className="user__img "
        />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">
            {opinion.userName}
          </span>
        </span>
      </div>
    </div>
  );
}
